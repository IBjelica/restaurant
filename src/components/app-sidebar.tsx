import { Calendar, Home, Inbox, Mail, Phone, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Naslovna",
    url: "#",
    icon: Home,
  },
  {
    title: "O Nama",
    url: "#",
    icon: Home,
  },
  {
    title: "Meni",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Dostava",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Kontakt",
    url: "#",
    icon: Search,
  },
]

export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-col items-start justify-evenly gap-2 w-full border-t-1 border-b p-2">
              <a href="tel:+381694794715">
                <span>+381 69 479 4715</span>
              </a>
              <a href="mailto:marukoshi.belgrade@gmail.com">
                <span>marukoshi.belgrade@gmail.com</span>
              </a>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}