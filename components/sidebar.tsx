"use client"

import type * as React from "react"

import {
  Sidebar as RadixSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"

export function Sidebar({ children }: { children: React.ReactNode }) {
  return <RadixSidebar>{children}</RadixSidebar>
}

Sidebar.Content = SidebarContent
Sidebar.Footer = SidebarFooter
Sidebar.Group = SidebarGroup
Sidebar.GroupContent = SidebarGroupContent
Sidebar.GroupLabel = SidebarGroupLabel
Sidebar.Header = SidebarHeader
Sidebar.Menu = SidebarMenu
Sidebar.MenuButton = SidebarMenuButton
Sidebar.MenuItem = SidebarMenuItem
Sidebar.Provider = SidebarProvider
Sidebar.Rail = SidebarRail
Sidebar.Separator = SidebarSeparator
