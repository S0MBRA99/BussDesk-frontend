import Link from "next/link";
import {Button} from '@/components/ui/button'
import React from "react";


export default function Login(){
    return (
        <div className="min-h-screen flex items-center justify-center -mt-20">
            <form className="space-y-4 bg-stone-200 rounded-lg shadow-2xl w-full max-w-1/4 p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Company Registration
                </h2>
                <div className="flex flex-col w-1/2 mx-auto">
                    <label htmlFor="email" className="text-gray-700 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="bg-gray-50 border border-b-gray-300 mt-5 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        id="email"
                        name="email"
                        placeholder=" Enter your email"
                        required
                    />
                </div>
                <div className="flex flex-col w-1/2 mx-auto pt-3">
                    <label htmlFor="password" className="text-gray-700 text-sm font-medium">Password</label>
                    <input
                        type="password"
                        className="bg-gray-50 border border-b-gray-300 mt-5 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        id="password"
                        name="password"
                        placeholder=" Enter your Password"
                        required
                    />
                </div>
                <div className="flex w-1/3 mx-auto justify-center align-middle pt-10">
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
                        <Link href="/auth/login" className="text-red-500 hover:text-red-600 font-medium">
                            Register in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
