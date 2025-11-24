"use client"

import "../globals.css";
import {ReactNode, useEffect, useState} from "react";
import Footer from "@/components/core/footer";
import {AppSidebar} from "@/components/core/appSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import ThemeProvider from "@/components/core/theme-provider";
import {ModeToggle} from "@/components/core/modelToggle";


export default function Layout({ children }: { children: ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

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
            <SidebarProvider defaultOpen={false}>
                <AppSidebar />
                <ThemeProvider
                    attribute={"class"}
                    defaultTheme={"system"}
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="h-screen w-screen bg-[url('/columna.png')] bg-cover bg-fixed">
                        <div className="h-1/10">
                            {isMobile ? <SidebarTrigger className="p-4 fixed top-5 left-5 border border-gray-300"/> : null}
                            <ModeToggle />
                        </div>
                        {children}
                    </div>
                </ThemeProvider>
            </SidebarProvider>
            <Footer />
        </>
    )
}
