"use client"
import { useSidebar } from "@/components/ui/sidebar"
import {Columns2} from "lucide-react"

export function CustomTrigger() {
    const { toggleSidebar } = useSidebar()

    return(
    <button onClick={toggleSidebar} className="p-1 mt-5 rounded-md border border-gray-500 mx-auto">
        <Columns2/>
    </button>
    )
}
