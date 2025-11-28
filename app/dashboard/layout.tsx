"use client"

import "../globals.css";
import {ReactNode, useEffect, useState} from "react";
import Footer from "@/components/core/footer";
import {AppSidebar} from "@/components/core/appSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import ThemeProvider from "@/components/core/theme-provider";
import {ModeToggle} from "@/components/core/modelToggle";
import {useDeviceStore} from "@/app/lib/store";


export default function Layout({ children }: { children: ReactNode }) {
    const {isMobile, setIsMobile} = useDeviceStore();

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
                    {/*<div className="
                        w-screen h-screen
                        fixed
                        top-1/4
                        right-1/8
                        bg-[url('/column.png')]
                        bg-no-repeat
                        bg-contain
                        bg-right-top
                        pointer-events-none
                        z-10
                        opacity-5
                        dark:opacity-25
                        "/>*/}
                    <div className="
                        w-[500px] h-[500px]
                        fixed
                        top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        bg-[url('/corona-silueta.png')]
                        bg-no-repeat
                        bg-contain
                        bg-center
                        pointer-events-none
                        z-10
                        opacity-5
                        dark:opacity-1
                        "/>
                    <div className="h-screen w-screen bg-stone-100 dark:bg-black">
                        <div className="h-1/10">
                            {isMobile ? <SidebarTrigger className="p-4 fixed top-5 left-5 border border-gray-300"/> : null}
                            <ModeToggle />
                        </div>
                        {children}
                    </div>
                </ThemeProvider>
            </SidebarProvider>
        </>
    )
}
