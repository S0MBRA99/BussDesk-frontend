"use client"
import {useDeviceStore} from "@/app/lib/store";
import {CompanyProfile} from "@/components/core/companyProfile"
import {UserProfile} from "@/components/core/userProfile";

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
                        bg-no-repeat
                        bg-cover
                        bg-center
                        rounded-md"
                    >
                        <UserProfile />
                    </div>
                </>
            )}
        </main>
    )
}