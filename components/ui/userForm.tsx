import React from "react";
import Link from "next/link";


export default function UserForm() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="bg-stone-200 rounded-lg shadow-2xl w-full max-w-3xl p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                User Registration
            </h2>
            <form className="space-y-6">
                <div className="flex gap-6">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="userName" className="text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Value"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="companyToken" className="text-sm font-medium text-gray-700">
                            Company Token*
                        </label>
                        <input
                            type="text"
                            id="companyToken"
                            name="companyToken"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Value"
                        />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="userEmail" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Value"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="userPhone" className="text-sm font-medium text-gray-700">
                            Phone*
                        </label>
                        <input
                            type="tel"
                            id="userPhone"
                            name="userPhone"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Value"
                        />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="userPassword" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="userPassword"
                            name="userPassword"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Value"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="userConfirmPassword" className="text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="userConfirmPassword"
                            name="userConfirmPassword"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Value"
                        />
                    </div>
                </div>

                <div className="flex gap-6 items-end">
                    <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="companyRole" className="text-sm font-medium text-gray-700">
                            Company Role*
                        </label>
                        <input
                            type="text"
                            id="companyRole"
                            name="companyRole"
                            className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Value"
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
                        <Link href="/auth/login" className="text-red-500 font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}