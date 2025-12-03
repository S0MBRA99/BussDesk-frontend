"use client"
import {useDeviceStore} from "@/app/lib/store";


export default function Profile() {

    const {isMobile, setIsMobile} = useDeviceStore();

    return (
        <main className="h-8/10 w-full flex flex-col justify-center items-center">
            {isMobile ? (
                <h1>mobile</h1>
            ):(
                <>
                    <div className="h-full w-9/10">
                        <div className="bg-white dark:bg-stone-950 rounded-md h-full w-full">
                            <div className="h-[50%] w-full bg-blue-400">
                                <div className="h-full w-[35%] bg-white"></div>
                            </div>
                            <div className="h-[50%] w-full bg-yellow-300"></div>
                        </div>
                    </div>
                </>
            )}
        </main>
    )
}