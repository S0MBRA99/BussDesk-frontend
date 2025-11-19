import { Settings, UserRound, Folder, ChevronDown, Building, Users, Code, LogOut } from "lucide-react"
import Link from "next/link";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible"

// Menu items.
const items = [
    {
        title: "Home",
        icon: UserRound,
        url: "/dashboard/homeUser"
    },
    {
        title: "Companies",
        icon: Folder,
        subItems: [
            {
                title: "Company A",
                icon: Building,
                url: "#"
            },
            {
                title: "Company B",
                icon: Building,
                subItems: [
                    {
                        title: "Departament",
                        url: "#",
                        subItems: [
                            {
                                title: "Dev",
                                icon: Code,
                                subItems: [
                                    { title: "Team A", url: "#", icon: Users },
                                    { title: "Team B", url: "#", icon: Users }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Settings",
        icon: Settings,
        subItems: [
            { title: "Profile", url: "/dashboard/homeUser/profile" },
            { title: "Log Out", url: "#", icon: LogOut },
        ]
    }
]

function RenderMenuItem({item, level = 0}:{item:any, level? :number}){
    const ItemIcon = item.icon

    if (item.subItems){
        return (
            <Collapsible key={item.title} className={`group/collapsible-${level}`}>
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton className={level > 0 ? `pl-${level*4}`: ""}>
                            {ItemIcon && <ItemIcon className="text-blue-500"/>}
                            <span>{item.title}</span>
                            <ChevronDown/>
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {item.subItems.map((subItem: any) => (
                                <RenderMenuItem
                                    key={subItem.title}
                                    item={subItem}
                                    level={level + 1}
                                />
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        )
    }else {
        if (level === 0) {
            return (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <Link href={item.url || '#'}>
                            {ItemIcon && <ItemIcon className="text-blue-500" />}
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            )
        } else {
            return (
                <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton asChild style={{ paddingLeft: `${level * 6}px` }}>
                        <Link href={item.url || '#'}>
                            {ItemIcon && <ItemIcon className="text-blue-500" />}
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuSubButton>
                </SidebarMenuSubItem>
            )
        }
    }
}


export function AppSidebar() {
    return (
        <Sidebar collapsible={"icon"} className="mr-0">
            <SidebarContent className="bg-gray-200-400"> {/*This is the full sidebar */}
                <SidebarGroup>{/*This is the name and the options*/}
                    <SidebarGroupLabel className="text-2xl">Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="mt-4"> {/*This one is the options*/}
                            {items.map((item) => (
                                <RenderMenuItem key={item.title} item={item}/>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}