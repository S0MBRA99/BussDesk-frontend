import React from "react";
import Link from "next/link";


export default function CompanyForm() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="bg-stone-200 rounded-lg shadow-2xl w-full max-w-3xl p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Company Registration
            </h2>
            <form className="space-y-6">
                <div className="flex gap-6">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                            Company Name*
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Enter company name"
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
                            id="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone*
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Enter company's phone number"
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
                        />
                        <p className="text-xs text-red-500 mt-1">* Optional</p>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <button
                            onClick={handleSubmit}
                            className="bg-gray-200 hover:bg-blue-400 text-gray-800 font-medium px-8 py-2 rounded-md border border-gray-400 transition-colors"
                        >
                            Accept
                        </button>
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
    )
}