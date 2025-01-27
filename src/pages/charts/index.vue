<script setup lang="ts">
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";

import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DateRangePicker } from "@/components/date-range-picker";

import { Copy, BatteryFull, Heater, Info } from "lucide-vue-next";

import AnalyticsTrends from "./AnalyticsTrends.vue";
import AnalyticsStates from "./AnalyticsStates.vue";
</script>

<template>
  <div class="flex flex-1 p-4 gap-4">
    <div class="flex flex-col flex-1 gap-4">
      <div class="flex items-center justify-between gap-4">
        <div class="flex gap-4 w-[500px]">
          <Select>
            <SelectTrigger class="items-start [&_[data-description]]:hidden">
              <SelectValue placeholder="Select a device" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="genesis">
                <div class="flex items-start gap-3 text-muted-foreground">
                  <BatteryFull class="size-5" />
                  <div class="grid gap-0.5">
                    <p class="font-medium text-foreground">
                      SM38RRY124430680001
                    </p>
                    <p class="text-xs" data-description>iStorage-G3</p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="explorer">
                <div class="flex items-start gap-3 text-muted-foreground">
                  <BatteryFull class="size-5" />
                  <div class="grid gap-0.5">
                    <p class="font-medium text-foreground">
                      SM38NRY124270010001
                    </p>
                    <p class="text-xs" data-description>iStorage-G3</p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="quantum">
                <div class="flex items-start gap-3 text-muted-foreground">
                  <Heater class="size-5" />
                  <div class="grid gap-0.5">
                    <p class="font-medium text-foreground">iHeater</p>
                    <p class="text-xs" data-description>Energy Heater</p>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <Tabs default-value="account" class="flex-none w-[200px]">
            <TabsList class="grid w-full grid-cols-2">
              <TabsTrigger value="account"> Battery </TabsTrigger>
              <TabsTrigger value="password"> Cell </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Button>Add More Charts</Button>
      </div>

      <div class="grid grid-cols-1 gap-4">
        <Card>
          <CardHeader>
            <div class="flex items-center justify-between gap-4">
              <CardTitle>SOC & SOH</CardTitle>
              <DateRangePicker />
            </div>
          </CardHeader>
          <CardContent class="overflow-hidden">
            <AnalyticsStates />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center justify-between gap-4">
              <CardTitle>CCL & DCL & Current</CardTitle>
              <DateRangePicker />
            </div>
          </CardHeader>
          <CardContent class="overflow-hidden">
            <AnalyticsTrends />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center justify-between gap-4">
              <CardTitle>Battery Cell Voltage</CardTitle>
              <DateRangePicker />
            </div>
          </CardHeader>
          <CardContent class="pl-2">
            <AnalyticsTrends />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center justify-between gap-4">
              <CardTitle>Power</CardTitle>
              <DateRangePicker />
            </div>
          </CardHeader>
          <CardContent class="pl-2">
            <AnalyticsTrends />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center justify-between gap-4">
              <CardTitle>Current & Voltage</CardTitle>
              <DateRangePicker />
            </div>
          </CardHeader>
          <CardContent class="pl-2">
            <AnalyticsTrends />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center justify-between gap-4">
              <CardTitle>Temperature</CardTitle>
              <DateRangePicker />
            </div>
          </CardHeader>
          <CardContent class="pl-2">
            <AnalyticsTrends />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center justify-between gap-4">
              <CardTitle>Statistics</CardTitle>
              <DateRangePicker />
            </div>
          </CardHeader>
          <CardContent class="pl-2">
            <AnalyticsTrends />
          </CardContent>
        </Card>
      </div>
    </div>
    <Card class="overflow-hidden h-full flex flex-col flex-none sticky top-20">
      <CardHeader class="flex flex-row items-start bg-muted/50">
        <div class="grid gap-0.5">
          <CardTitle class="flex items-center gap-2 text-lg">
            <div class="w-[280px] text-ellipsis overflow-hidden">
              BMS SN:
              <span title="WRDSM38NRD123552840001">WRDSM38NRD123552840001</span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button variant="ghost" size="icon">
                    <Copy class="size-3" />
                    <span class="sr-only">Copy SN</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Copy SN</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <CardDescription>Date: November 23, 2024</CardDescription>
        </div>
      </CardHeader>
      <CardContent class="p-6 text-sm flex-1">
        <div class="grid gap-3">
          <div class="font-semibold">BMS Details</div>
          <ul class="grid gap-3">
            <li class="flex items-center justify-between font-semibold">
              <div class="flex items-center gap-2">
                <span class="text-muted-foreground"> SOC </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info
                        class="size-4 text-muted-foreground hover:text-foreground"
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right"
                      >State of charge</TooltipContent
                    >
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span>80%</span>
            </li>
            <li class="flex items-center justify-between font-semibold">
              <div class="flex items-center gap-2">
                <span class="text-muted-foreground"> SOH </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info
                        class="size-4 text-muted-foreground hover:text-foreground"
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right"
                      >State of health</TooltipContent
                    >
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span>100%</span>
            </li>
            <li class="flex items-center justify-between font-semibold">
              <div class="flex items-center gap-2">
                <span class="text-muted-foreground"> CCL </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info
                        class="size-4 text-muted-foreground hover:text-foreground"
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      Charge current limit
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span>48A</span>
            </li>
            <li class="flex items-center justify-between font-semibold">
              <div class="flex items-center gap-2">
                <span class="text-muted-foreground"> DCL </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info
                        class="size-4 text-muted-foreground hover:text-foreground"
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      Discharge current limit
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span>50A</span>
            </li>
          </ul>
          <Separator class="my-2" />
          <ul class="grid gap-3">
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">Current</span>
              <span>6.7A</span>
            </li>
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">Voltage</span>
              <span>311.3A</span>
            </li>
            <li class="flex items-center justify-between font-semibold">
              <span class="text-muted-foreground">Power</span>
              <span>2085W</span>
            </li>
          </ul>
        </div>
        <Separator class="my-4" />
        <div class="grid gap-3">
          <div class="font-semibold">Cell Voltage</div>
          <dl class="grid gap-3">
            <div class="flex items-center justify-between">
              <dt class="text-muted-foreground">Max from C0-M3-C2</dt>
              <dd>3.302V</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="text-muted-foreground">Min from C0-M1-C1</dt>
              <dd>3.271V</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="text-muted-foreground">Voltage Difference</dt>
              <dd>31mV</dd>
            </div>
          </dl>
        </div>
        <Separator class="my-4" />
        <div class="grid gap-3">
          <div class="font-semibold">Temperature</div>
          <dl class="grid gap-3">
            <div class="flex items-center justify-between">
              <dt class="text-muted-foreground">Max from C0-M1-C2</dt>
              <dd>22°C</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="text-muted-foreground">Min from C0-M4-C1</dt>
              <dd>19°C</dd>
            </div>
          </dl>
        </div>
        <Separator class="my-4" />
        <div class="grid gap-3">
          <div class="font-semibold">Statistics</div>
          <dl class="grid gap-3">
            <div class="flex items-center justify-between">
              <dt class="flex items-center gap-1 text-muted-foreground">
                Total Charged
              </dt>
              <dd>434.6kWh</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="flex items-center gap-1 text-muted-foreground">
                Total Discharged
              </dt>
              <dd>392.4kWh</dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter
        class="flex flex-row items-center px-6 py-3 border-t bg-muted/50"
      >
        <div class="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">November 23, 2024</time>
        </div>
        <Pagination class="w-auto ml-auto mr-0">
          <PaginationList class="gap-1">
            <PaginationPrev variant="outline" class="w-6 h-6" />
            <PaginationNext variant="outline" class="w-6 h-6" />
          </PaginationList>
        </Pagination>
      </CardFooter>
    </Card>
  </div>
</template>
