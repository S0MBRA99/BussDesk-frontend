import "../globals.css";
import React from "react";
import Footer from "@/components/core/footer";
import {AppSidebar} from "@/components/core/appSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
                <main className="w-full h-full">
                    <SidebarTrigger />
                        {children}
                </main>
        </SidebarProvider>
    )
}
