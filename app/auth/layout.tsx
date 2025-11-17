import "../globals.css";
import React from "react";
import Navbar from '@/components/core/navbar'
import Footer from '@/components/core/footer'

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Navbar/>
                <main className="min-h-screen pt-20 bg-[url('https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1920&q=80')] bg-cover bg-center bg-fixed')]">
                    {children}
                </main>
            <Footer/>
        </>
    );
}
