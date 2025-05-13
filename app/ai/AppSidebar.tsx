import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarProvider } from "@/components/ui/sidebar"
import { Plus } from "lucide-react"

export function AppSidebar({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupAction>
                            <Plus /> <span className="sr-only">Add Project</span>
                        </SidebarGroupAction>
                        <SidebarGroupContent></SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            {children}
        </SidebarProvider>
    )
}
