"use client"
import Link from "next/link";
import {ResizableContent} from "@/components/core/resizableContent"
import {useEffect} from "react";
import {useDeviceStore} from "@/app/lib/store";
import AppCarousel from "@/components/core/appCarousel";


export default function HomeUser() {

    const {isMobile, setIsMobile} = useDeviceStore();

    return (
        <main className="h-8/10 w-full flex flex-col justify-center items-center">
            {isMobile ? (
                <>
                    <button className="cursor-pointer border border-gray-300 dark:border-gray-700 rounded-md px-4 py-1.5 hover:bg-gray-200 fixed top-5 right-20">
                        Join
                    </button>
                    <div className="h-9/10 w-9/10 flex justify-center items-center">
                        <AppCarousel/>
                    </div>
                </>
            ):(
                <>
                    <button className="cursor-pointer border border-gray-300 dark:border-gray-700 rounded-md px-4 py-1.5 hover:bg-gray-200 fixed top-5 right-20">
                        Join
                    </button>
                    <div className="h-full w-9/10">
                        <ResizableContent/>
                    </div>
                </>
                )}
        </main>
    )
}