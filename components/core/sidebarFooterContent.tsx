import {LogOut, Settings, UserRound} from "lucide-react"
import Link from "next/link"


export default function SidebarFooterContent() {
    return (
        <div className="flex items-center gap-3 p-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
            {/* Avatar with indicator */}
            <div className="relative shrink-0">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                        src="/Corona-silueta.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Indicator green if they join in future change to red and online if they dont join */}
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-sidebar" />
            </div>

            {/* UserInfo */}
            <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
                <p className="text-sm font-medium truncate text-sidebar-foreground">
                    MASTER
                </p>
                <p className="text-xs text-muted-foreground truncate">
                    En línea
                </p>
            </div>

            {/* Action icons */}
            <div className="flex gap-1 group-data-[collapsible=icon]:hidden">
                <button
                    className="p-1.5 hover:bg-sidebar-accent rounded transition-colors"
                    title="Logout"
                >
                    <LogOut className="size-4 text-muted-foreground hover:text-foreground" />
                </button>
                <button
                    className="p-1.5 hover:bg-sidebar-accent rounded transition-colors"
                    title="Settings"
                >
                    <Settings className="size-4 text-muted-foreground hover:text-foreground" />
                </button>
                <Link
                    href="/dashboard/homeUser/profile"
                    className="p-1.5 hover:bg-sidebar-accent rounded transition-colors"
                    title="Profile"
                >
                    <UserRound className="size-4 text-muted-foreground hover:text-foreground" />
                </Link>
            </div>
        </div>
    )
}