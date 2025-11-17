import "../globals.css";
import React from "react";
import Footer from "@/components/core/footer";
import Sidebar from "@/components/core/sideBar";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Sidebar/>
                {children}
            <Footer/>
        </>
    );
}
