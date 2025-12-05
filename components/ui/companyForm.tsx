import {useState,FormEvent,ChangeEvent} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {fetchCompanyRegister} from "@/app/lib/api/auth/fetchAuth";
import {ObjCompanyRegister, ObjCompanyRegisterResponse} from "@/app/types";
import {useDeviceStore} from "@/app/lib/store";

export default function CompanyForm() {

    const {isMobile} = useDeviceStore();
    const router = useRouter();
    const [requiredObj, setRequiredObj] = useState("");
    const [objCompany, setObjCompany] = useState<ObjCompanyRegister>({
        companyName: "",
        companyLogo: null,
        companyEmail: "",
        companyPhone: "",
        password: "",
        companyConfirmPassword: "",
        adminName: "",
        country: "",
        website: ""
    })
    const required: string[] = [
        "companyName",
        "companyEmail",
        "password" ,
        "adminName",
        "companyPhone",
        "country"
    ]

    const verifyObj = async (obj: ObjCompanyRegister)=>{
        if (obj.password !== obj.companyConfirmPassword){
            return setRequiredObj("Passwords are not match");
        }
        if (required.some(field => !obj[field as keyof ObjCompanyRegister])){ {/* MUCHO CUIDADO CON ESTO*/}
            return setRequiredObj("Required fields are empty");
        }
        return true;
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await verifyObj(objCompany)
        if(result) {
            let resp: ObjCompanyRegisterResponse = await fetchCompanyRegister(objCompany)
            console.log(resp);
            router.push("/dashboard/homeCompany")
        }else{
            return ""
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setObjCompany({...objCompany,[e.target.name]:e.target.value})
    }

    return (
        <>
            {isMobile ? (
                <div className="bg-stone-200 rounded-lg shadow-2xl w-full max-w-3xl p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                        Company Registration
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>

                        {/* Row 1 */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter company name"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="companyLogo" className="text-sm font-medium text-gray-700">
                                    Upload Company Logo*
                                </label>
                                <input
                                    type="file"
                                    id="companyLogo"
                                    name="companyLogo"
                                    accept="image/*"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="companyEmail" className="text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="companyEmail"
                                    name="companyEmail"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="companyPhone" className="text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="companyPhone"
                                    name="companyPhone"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter company's phone number"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter password"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="adminName" className="text-sm font-medium text-gray-700">
                                    Admin Name
                                </label>
                                <input
                                    type="text"
                                    id="adminName"
                                    name="adminName"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter your admin name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter the same password again"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="country" className="text-sm font-medium text-gray-700">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter your company's country"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Row 5 */}
                        <div className="flex flex-col gap-6 items-start">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="website" className="text-sm font-medium text-gray-700">
                                    Website*
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter your company's website"
                                    onChange={handleChange}
                                />
                                <p className="text-xs text-red-500 mt-1">* Optional</p>
                            </div>

                            <div className="w-full flex flex-col items-center">
                                <button
                                    type="submit"
                                    className="bg-gray-200 hover:bg-blue-400 text-gray-800 font-medium px-8 py-2 rounded-md border border-gray-400 transition-colors"
                                >
                                    Submit
                                </button>

                                {requiredObj ? (
                                    <p className="text-red-500 mt-2">{requiredObj}</p>
                                ) : ('')}
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Already registered?{' '}
                                <Link href="/auth/login" className="text-red-500 hover:text-red-600 font-medium">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            ):(
                <div className="bg-stone-200 rounded-lg shadow-2xl w-full max-w-3xl p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                        Company Registration
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter company name"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="companyLogo" className="text-sm font-medium text-gray-700">
                                    Upload Company Logo*
                                </label>
                                <input
                                    type="file"
                                    id="companyLogo"
                                    name="companyLogo"
                                    accept="image/*"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="companyEmail"
                                    name="companyEmail"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="companyPhone"
                                    name="companyPhone"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter company's phone number"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="adminName" className="text-sm font-medium text-gray-700">
                                    Admin Name
                                </label>
                                <input
                                    type="text"
                                    id="adminName"
                                    name="adminName"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter your admin name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter the same password again"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="country" className="text-sm font-medium text-gray-700">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter your company's country"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex gap-6 items-end">
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="website" className="text-sm font-medium text-gray-700">
                                    Website*
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Enter your company's website "
                                    onChange={handleChange}
                                />
                                <p className="text-xs text-red-500 mt-1">* Optional</p>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center  items-center mb-7">
                                <button
                                    type="submit"
                                    className="bg-gray-200 hover:bg-blue-400 text-gray-800 font-medium px-8 py-2 rounded-md border border-gray-400 transition-colors"
                                >
                                    Submit
                                </button>
                                {requiredObj? (
                                    <p className="text-red-500 mt-2">{requiredObj}</p>
                                ):('')}
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Already registered?{' '}
                                <Link href="/auth/login" className="text-red-500 hover:text-red-600 font-medium">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}