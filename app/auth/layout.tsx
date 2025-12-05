"use client"
import "../globals.css";
import {useEffect,ReactNode} from "react";
import Navbar from '@/components/core/navbar'
import Footer from '@/components/core/footer'
import {useDeviceStore} from "@/app/lib/store";


export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
    const {setIsMobile} = useDeviceStore();

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            }else(setIsMobile(false));
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[])
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
