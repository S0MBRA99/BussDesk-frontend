import { Settings, UserRound, Folder, ChevronDown, Building, Users, Code, LogOut, House } from "lucide-react"
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
    SidebarMenuSubButton,
    SidebarTrigger, SidebarHeader
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible"
import {ModeToggle} from "@/components/core/modelToggle";

// Menu items.
const items = [
    {
        title: "Home",
        icon: House,
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
                        icon: Building,
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
    }
]

function RenderMenuItem({item, level = 0}:{item:any, level? :number}){
    const ItemIcon = item.icon

    if (item.subItems){
        return (
            <Collapsible key={item.title} className={`group/collapsible-${level}`}>
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                            {ItemIcon && <ItemIcon className="!text-dark dark:text-white"/>}
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
                            {ItemIcon && <ItemIcon className="!text-dark dark:text-white" />}
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            )
        } else {
            return (
                <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton asChild>
                        <Link href={item.url || '#'}>
                            {ItemIcon && <ItemIcon className="!text-dark dark:text-white" />}
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
        <Sidebar collapsible={"icon"} className="
                                            !bg-[url('/marmol-blanco.jpeg')]
                                            dark:!bg-[url('/marmol-negro.jpeg')]
                                            bg-cover bg-center bg-no-repeat">
            <SidebarHeader className="!bg-transparent">
                <SidebarTrigger className="p-4 ml-5 mt-5 border mx-auto border-gray-300 cursor-pointer"/>
            </SidebarHeader>
            <SidebarContent className="!bg-transparent"> {/*This is the full sidebar */}
                <SidebarGroup>{/*This is the name and the options*/}
                    <SidebarGroupContent>
                        <SidebarMenu className="mt-4">{/*This one is the options*/}
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