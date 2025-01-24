<script setup lang="ts">
import { Input } from "@/components/ui/input";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  ChevronRight,
  ChevronsUpDown,
  GalleryVerticalEnd,
  Search,
  Settings2,
  SquareTerminal,
} from "lucide-vue-next";
import { ref } from "vue";

const navMain = [
  {
    title: "Plant",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "Charts",
        url: "/plant/charts",
      },
      {
        title: "Devices",
        url: "/plant/devices",
      },
      {
        title: "Information",
        url: "#",
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "General",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Billing",
        url: "#",
      },
      {
        title: "Limits",
        url: "#",
      },
    ],
  },
];

const activeTeam = ref({
  name: "Wattsonic Inc",
  logo: GalleryVerticalEnd,
  plan: "Enterprise",
});
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div
                class="flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <component :is="activeTeam.logo" class="size-4" />
              </div>
              <div class="grid flex-1 text-sm leading-tight text-left">
                <span class="font-semibold truncate">
                  {{ activeTeam.name }}
                </span>
                <span class="text-xs truncate">{{ activeTeam.plan }}</span>
              </div>
              <ChevronsUpDown class="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            <Collapsible
              v-for="item in navMain"
              :key="item.title"
              as-child
              :default-open="item.isActive"
              class="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger as-child>
                  <SidebarMenuButton :tooltip="item.title">
                    <component :is="item.icon" />
                    <span>{{ item.title }}</span>
                    <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem
                      v-for="subItem in item.items"
                      :key="subItem.title"
                    >
                      <SidebarMenuSubButton as-child>
                        <RouterLink :to="subItem.url">
                          {{ subItem.title }}
                        </RouterLink>
                        <!--  <a :href="subItem.url">
                          <span>{{ subItem.title }}</span>
                        </a> -->
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <header
        class="flex h-16 border-b items-center justify-between px-4 lg:px-6 gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <h1 class="text-xl font-semibold">WuXi-Lab-Gen3-Enterprise-Single</h1>
        <div class="relative w-[300px]">
          <Search
            class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search plant..."
            class="pl-8 shadow-none appearance-none bg-background"
          />
        </div>
      </header>

      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>
