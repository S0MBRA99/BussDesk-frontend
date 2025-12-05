"use client"
import Link from "next/link";
import {useState} from "react";
import CompanyForm from "@/components/ui/companyForm";
import UserForm from "@/components/ui/userForm";


export default function Register() {
    const [activeForm, setActiveForm] = useState("company");

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br p-8 flex flex-col items-center justify-center md:-mt-20">
                <div className="mb-6 flex gap-4">
                    <button
                        onClick={() => setActiveForm('company')}
                        className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                            activeForm === 'company'
                                ? 'bg-amber-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        Company
                    </button>
                    <button
                        onClick={() => setActiveForm('user')}
                        className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                            activeForm === 'user'
                                ? 'bg-amber-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        User
                    </button>
                </div>

                {activeForm === 'company' ? <CompanyForm /> : <UserForm />}
            </div>
        </>
    );
}
