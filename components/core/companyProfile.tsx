import * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Pencil, X } from "lucide-react";
import {useDeviceStore} from "@/app/lib/store";

type FormData = {
    companyEmail: string;
    companyName: string;
    country: string;
    email: string;
    phone: string;
    password: string;
    adminName: string;
    companyLogo: File | null;
};

export function CompanyProfile() {
    const [formData, setFormData] = useState<FormData>({
        companyEmail: "mock@example.com",
        companyName: "Mocked Company S.A.",
        country: "Spain",
        email: "admin@mock.com",
        phone: "+34 123 456 789",
        password: "123456",
        adminName: "Leo Admin",
        companyLogo: null,
    });

    const {isMobile} = useDeviceStore();
    const [tempData, setTempData] = useState<FormData>(formData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, files } = e.target;
        setTempData((prev) => ({
            ...prev,
            [id]: files && files.length > 0 ? files[0] : value,
        }));
    };

    const saveChanges = () => {
        setFormData(tempData);
        setIsModalOpen(false);
    };

    return (
        <>
            {isMobile ? (
                <div className="flex flex-col w-full h-full overflow-y-auto bg-transparent">
                    {/* Avatar Section */}
                    <section className="flex flex-col items-center pt-8 pb-6 relative">
                        <div className="relative">
                            {/* Profile Photo */}
                            <div className="
                                w-32 h-32 bg-[url('/Avatar.jpeg')]
                                shadow-[0_0_5px_2px_rgba(255,215,0,0.7)]
                                dark:shadow-[0_0_8px_3px_rgba(255,255,255,0.7)]
                                bg-no-repeat bg-cover bg-center
                                rounded-full"
                            />

                            {/* Camera Button */}
                            <button className="
                                rounded-full shadow-[0_0_3px_2px_rgba(255,215,0,0.7)]
                                dark:shadow-[0_0_3px_1px_rgba(255,255,255,0.7)]
                                bg-white dark:bg-stone-950 p-2
                                flex items-center justify-center
                                absolute bottom-0 right-0"
                            >
                                <Camera className="text-dark dark:text-white w-4 h-4" />
                            </button>
                        </div>

                        {/* Edit Button */}
                        <button
                            onClick={() => {
                                setTempData(formData);
                                setIsModalOpen(true);
                            }}
                            className="
                                shadow-[0_0_3px_2px_rgba(255,215,0,0.7)]
                                dark:shadow-[0_0_3px_1px_rgba(255,255,255,0.7)]
                                rounded-full bg-white dark:bg-stone-950 p-2
                                flex items-center mt-4 ml-auto mr-5"
                        >
                            <Pencil className="text-dark dark:text-white w-4 h-4" />
                        </button>
                    </section>

                    {/* Form Fields - Read Only */}
                    <section className="flex flex-col gap-6 px-6 pb-8">
                        <div className="space-y-2">
                            <Label htmlFor="companyEmail-mobile" className="text-sm">Company Email</Label>
                            <Input
                                id="companyEmail-mobile"
                                type="email"
                                value={formData.companyEmail}
                                readOnly
                                className="bg-transparent"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="companyName-mobile" className="text-sm">Company Name</Label>
                            <Input
                                id="companyName-mobile"
                                type="text"
                                value={formData.companyName}
                                readOnly
                                className="bg-transparent"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country-mobile" className="text-sm">Country</Label>
                            <Input
                                id="country-mobile"
                                type="text"
                                value={formData.country}
                                readOnly
                                className="bg-transparent"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email-mobile" className="text-sm">Email</Label>
                            <Input
                                id="email-mobile"
                                type="email"
                                value={formData.email}
                                readOnly
                                className="bg-transparent"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone-mobile" className="text-sm">Phone</Label>
                            <Input
                                id="phone-mobile"
                                type="tel"
                                value={formData.phone}
                                readOnly
                                className="bg-transparent"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password-mobile" className="text-sm">Password</Label>
                            <Input
                                id="password-mobile"
                                type="password"
                                value={formData.password}
                                readOnly
                                className="bg-transparent"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="adminName-mobile" className="text-sm">Admin Name</Label>
                            <Input
                                id="adminName-mobile"
                                type="text"
                                value={formData.adminName}
                                readOnly
                                className="bg-transparent"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="companyLogo-mobile" className="text-sm">Company Logo</Label>
                            <Input
                                id="companyLogo-mobile"
                                type="file"
                                disabled
                                className="bg-transparent"
                            />
                        </div>
                    </section>

                    {/* Modal - Shared between mobile and desktop */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                            <div className="bg-[#1f1f1f] dark:bg-[#121212] w-full max-w-lg rounded-2xl p-6 shadow-xl border border-white/10">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold text-white">Edit Profile</h2>
                                    <button onClick={() => setIsModalOpen(false)}>
                                        <X className="w-6 h-6 text-gray-400 hover:text-white" />
                                    </button>
                                </div>

                                {/* Form */}
                                <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-1">
                                    {(Object.keys(formData) as Array<keyof FormData>).map((key) => (
                                        <div key={key} className="flex flex-col gap-2">
                                            <Label htmlFor={key} className="capitalize text-white/80">
                                                {key.replace(/([A-Z])/g, " $1")}
                                            </Label>

                                            <Input
                                                id={key}
                                                type={key === "password" ? "password" : key === "companyLogo" ? "file" : "text"}
                                                value={key === "companyLogo" ? undefined : tempData[key] as string}
                                                onChange={handleChange}
                                                className="bg-[#0d0d0d] border border-white/10 text-white"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 mt-5">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 rounded-lg bg-stone-700 hover:bg-stone-600 text-white"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={saveChanges}
                                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex w-full h-full items-center relative">
                    {/* Profile Photo */}
                    <section className="flex gap-3 h-full w-[40%] lg:w-[50%] relative">
                        <div className="
                            w-50 h-50 lg:w-60 lg:h-60
                            xl:w-90 xl:h-90 bg-[url('/Avatar.jpeg')]
                            shadow-[0_0_5px_2px_rgba(255,215,0,0.7)]
                            dark:shadow-[0_0_8px_3px_rgba(255,255,255,0.7)]
                            bg-no-repeat bg-cover bg-center
                            pointer-events-none rounded-full absolute
                            top-10 left-10
                            lg:top-15 lg:left-15
                            xl:top-20 xl:left-20"
                        />
                    </section>

                    <button className="
                        rounded-full shadow-[0_0_3px_2px_rgba(255,215,0,0.7)]
                        dark:shadow-[0_0_3px_1px_rgba(255,255,255,0.7)]
                        bg-white dark:bg-stone-950 p-3
                        flex items-center justify-center
                        absolute
                        top-52 left-52
                        lg:top-68 lg:left-68
                        xl:top-100 xl:left-100
                        cursor-pointer"
                    >
                        <Camera className="text-dark dark:text-white w-5 h-5" />
                    </button>

                    {/* Inputs */}
                    <section className="h-[95%] w-[60%] lg:w-[50%] flex gap-2 items-center rounded-md mr-5 mt-40 lg:mt-0">
                        {/* Left */}
                        <div className="h-[80%] w-1/2 flex flex-col gap-15 items-center justify-center">
                            <div className="flex flex-col gap-5 justify-center w-3/4">
                                <Label htmlFor="companyEmail">Company Email</Label>
                                <Input id="companyEmail" type="email" value={formData.companyEmail} readOnly />
                            </div>
                            <div className="flex flex-col gap-5 justify-center w-3/4">
                                <Label htmlFor="companyName">Company Name</Label>
                                <Input id="companyName" type="text" value={formData.companyName} readOnly />
                            </div>
                            <div className="flex flex-col gap-5 justify-center w-3/4">
                                <Label htmlFor="country">Country</Label>
                                <Input id="country" type="text" value={formData.country} readOnly />
                            </div>
                            <div className="flex flex-col gap-5 justify-center w-3/4">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" value={formData.email} readOnly />
                            </div>
                        </div>

                        {/* Right */}
                        <div className="h-[80%] w-1/2 flex flex-col gap-15 items-center justify-center">
                            <div className="flex flex-col gap-5 justify-center w-3/4">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" type="tel" value={formData.phone} readOnly />
                            </div>
                            <div className="flex flex-col gap-5 justify-center w-3/4">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" value={formData.password} readOnly />
                            </div>
                            <div className="flex flex-col gap-5 justify-center w-3/4">
                                <Label htmlFor="adminName">Admin Name</Label>
                                <Input id="adminName" type="text" value={formData.adminName} readOnly />
                            </div>
                            <div className="flex flex-col gap-5 justify-center w-3/4">
                                <Label htmlFor="companyLogo">Company Logo</Label>
                                <Input id="companyLogo" type="file" disabled />
                            </div>
                        </div>
                    </section>

                    {/* Pencil button that opens modal */}
                    <button
                        onClick={() => {
                            setTempData(formData);
                            setIsModalOpen(true);
                        }}
                        className="
                      shadow-[0_0_3px_2px_rgba(255,215,0,0.7)]
                      dark:shadow-[0_0_3px_1px_rgba(255,255,255,0.7)]
                      bottom-5 right-5 rounded-full bg-white
                      dark:bg-stone-950 p-2 flex items-center justify-center
                       cursor-pointer absolute"
                    >
                        <Pencil className="text-dark dark:text-white w-5 h-5" />
                    </button>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                            <div className="bg-[#1f1f1f] dark:bg-[#121212] w-[90%] max-w-lg rounded-2xl p-6 shadow-xl border border-white/10">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold text-white">Edit Profile</h2>
                                    <button onClick={() => setIsModalOpen(false)}>
                                        <X className="w-6 h-6 text-gray-400 hover:text-white" />
                                    </button>
                                </div>

                                {/* Form */}
                                <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-1">
                                    {(Object.keys(formData) as Array<keyof FormData>).map((key) => (
                                        <div key={key} className="flex flex-col gap-2">
                                            <Label htmlFor={key} className="capitalize text-white/80">
                                                {key.replace(/([A-Z])/g, " $1")}
                                            </Label>

                                            <Input
                                                id={key}
                                                type={key === "password" ? "password" : key === "companyLogo" ? "file" : "text"}
                                                value={key === "companyLogo" ? undefined : tempData[key] as string}
                                                onChange={handleChange}
                                                className="bg-[#0d0d0d] border border-white/10 text-white"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 mt-5">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 rounded-lg bg-stone-700 hover:bg-stone-600 text-white"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={saveChanges}
                                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}