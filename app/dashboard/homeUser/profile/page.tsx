"use client"
import {useDeviceStore} from "@/app/lib/store";
import {CompanyProfile} from "@/components/core/ProfileComponent"

export default function Profile() {

    const {isMobile, setIsMobile} = useDeviceStore();

    return (
        <main className="h-8/10 w-full flex flex-col justify-center items-center">
            {isMobile ? (
                <h1>mobile</h1>
            ):(
                <>
                    <div className="
                        h-full w-9/10 bg-[url('/bg-perfil-light.png')] dark:bg-[url('/bg-perfil-dark.png')]
                        bg-white
                        bg-no-repeat
                        bg-cover
                        bg-center
                        pointer-events-none
                        rounded-md"
                    >
                        <CompanyProfile/>
                    </div>
                </>
            )}
        </main>
    )
}