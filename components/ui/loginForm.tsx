import {useState,FormEvent,ChangeEvent} from "react";
import Link from "next/link";
import {fetchLogin} from "@/app/lib/api/auth/fetchAuth";
import {useRouter} from "next/navigation";
import {ObjLogin} from "@/app/types";

export default function LoginForm(){

    const router = useRouter();

    const [objLogin, setObjLogin] = useState<ObjLogin> ({
        email: "",
        password: ""
    })

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let resp = await fetchLogin(objLogin)
        console.log(resp)
        //router.push("/dashboard/homeUser")
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setObjLogin({...objLogin,[e.target.name]:e.target.value})
    }

    return (
        <form className="space-y-4 bg-stone-200 rounded-lg shadow-2xl w-full max-w-2xl p-8" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Login
            </h2>
            <div className="flex flex-col w-1/2 mx-auto">
                <label htmlFor="email" className="text-gray-700 text-sm font-medium">Email</label>
                <input
                    type="email"
                    className="bg-gray-50 border border-b-gray-300 mt-2 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    id="email"
                    name="email"
                    placeholder=" Enter your email"
                    value={objLogin.email}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col w-1/2 mx-auto pt-3">
                <label htmlFor="password" className="text-gray-700 text-sm font-medium">Password</label>
                <input
                    type="password"
                    className="bg-gray-50 border border-b-gray-300 mt-2 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    id="password"
                    name="password"
                    placeholder=" Enter your Password"
                    value={objLogin.password}
                    onChange={handleChange}
                />
            </div>
            <div className="flex w-1/3 mx-auto justify-center align-middle pt-7">
                <button
                    type="submit"
                    className="bg-gray-200 hover:bg-blue-400 border border-gray-400 rounded py-2 px-4 text-gray-800 transition-colors"
                >
                    Login in
                </button>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                    Not registered?{' '}
                    <Link href="/auth/register" className="text-red-500 hover:text-red-600 font-medium">
                        Register in
                    </Link>
                </p>
            </div>
        </form>
    )
}