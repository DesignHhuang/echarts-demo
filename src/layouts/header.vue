<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
</script>

<template>
  <div class="flex min-h-screen min-w-[1000px] w-full flex-col">
    <header
      class="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-6"
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
  </div>
</template>
