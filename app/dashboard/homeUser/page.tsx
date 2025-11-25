"use client"
import Link from "next/link";
import {ResizableContent} from "@/components/core/resizableContent"
import {useEffect} from "react";
import {useDeviceStore} from "@/app/lib/store";


export default function HomeUser() {

    const {isMobile, setIsMobile} = useDeviceStore();

    return (
        <main className="h-8/10 w-full flex flex-col justify-center items-center">
            {isMobile ? (
                <>
                    <div className="h-1/10 w-full flex justify-center items-center">
                        <button className="cursor-pointer border border-gray-500 rounded-md px-4 py-2 hover:bg-gray-600">
                            Join
                        </button>
                    </div>
                    <div className="h-9/10 w-9/10">
                        <ResizableContent/>
                    </div>
                </>
            ):(
                <>
                    <div className="h-1/10 w-full flex justify-center items-center">
                        <button className="cursor-pointer border border-gray-500 rounded-md px-4 py-2 hover:bg-gray-600">
                            Join
                        </button>
                    </div>
                    <div className="h-9/10 w-9/10">
                        <ResizableContent/>
                    </div>
                </>
                )}
        </main>
    )
}