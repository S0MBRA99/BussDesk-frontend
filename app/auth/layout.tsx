import "../globals.css";
import React from "react";
import Navbar from '@/components/core/navbar'
import Footer from '@/components/core/footer'


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Navbar/>
                <main className="min-h-screen pt-20 bg-[url('@/public/bg-griego-auth.png')] bg-cover bg-center bg-fixed')]">
                    {children}
                </main>
            <Footer/>
        </>
    );
}
