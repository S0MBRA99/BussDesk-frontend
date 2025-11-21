import "../globals.css";
import React from "react";
import Footer from "@/components/core/footer";
import {AppSidebar} from "@/components/core/appSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import ThemeProvider from "@/components/core/theme-provider";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute={"class"}
            defaultTheme={"system"}
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <AppSidebar />
                <main className="min-h-screen w-screen bg-gray-400">
                    <SidebarTrigger className="p-5 bg-blue-400 ml-3 mt-3 border border-blue-600"/>
                        {children}
                    <Footer />
                </main>
            </SidebarProvider>
        </ThemeProvider>
    )
}
