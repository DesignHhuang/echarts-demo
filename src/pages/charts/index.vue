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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

import { LineChart } from "@/components/ui/chart-line";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DateRangePicker } from "@/components/date-range-picker";

import {
  Copy,
  CreditCard,
  BatteryFull,
  Heater,
  MoreVertical,
  Truck,
} from "lucide-vue-next";

import CustomChartTooltip from "./CustomChartTooltip.vue";

const data = [
  {
    year: 1970,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 1.88,
    "Import Growth Rate": 1.67,
  },
  {
    year: 1975,
    "Export Growth Rate": 1.79,
    "Import Growth Rate": 1.64,
  },
  {
    year: 1976,
    "Export Growth Rate": 1.77,
    "Import Growth Rate": 1.62,
  },
  {
    year: 1977,
    "Export Growth Rate": 1.74,
    "Import Growth Rate": 1.69,
  },
  {
    year: 1978,
    "Export Growth Rate": 1.74,
    "Import Growth Rate": 1.7,
  },
  {
    year: 1979,
    "Export Growth Rate": 1.77,
    "Import Growth Rate": 1.67,
  },
  {
    year: 1980,
    "Export Growth Rate": 1.79,
    "Import Growth Rate": 1.7,
  },
  {
    year: 1981,
    "Export Growth Rate": 1.81,
    "Import Growth Rate": 1.72,
  },
  {
    year: 1982,
    "Export Growth Rate": 1.84,
    "Import Growth Rate": 1.73,
  },
  {
    year: 1983,
    "Export Growth Rate": 1.77,
    "Import Growth Rate": 1.73,
  },
  {
    year: 1984,
    "Export Growth Rate": 1.78,
    "Import Growth Rate": 1.78,
  },
  {
    year: 1985,
    "Export Growth Rate": 1.78,
    "Import Growth Rate": 1.81,
  },
  {
    year: 1986,
    "Export Growth Rate": 1.82,
    "Import Growth Rate": 1.89,
  },
  {
    year: 1987,
    "Export Growth Rate": 1.82,
    "Import Growth Rate": 1.91,
  },
  {
    year: 1988,
    "Export Growth Rate": 1.77,
    "Import Growth Rate": 1.94,
  },
  {
    year: 1989,
    "Export Growth Rate": 1.76,
    "Import Growth Rate": 1.94,
  },
  {
    year: 1990,
    "Export Growth Rate": 1.75,
    "Import Growth Rate": 1.97,
  },
  {
    year: 1991,
    "Export Growth Rate": 1.62,
    "Import Growth Rate": 1.99,
  },
  {
    year: 1992,
    "Export Growth Rate": 1.56,
    "Import Growth Rate": 2.12,
  },
  {
    year: 1993,
    "Export Growth Rate": 1.5,
    "Import Growth Rate": 2.13,
  },
  {
    year: 1994,
    "Export Growth Rate": 1.46,
    "Import Growth Rate": 2.15,
  },
  {
    year: 1995,
    "Export Growth Rate": 1.43,
    "Import Growth Rate": 2.17,
  },
  {
    year: 1996,
    "Export Growth Rate": 1.4,
    "Import Growth Rate": 2.2,
  },
  {
    year: 1997,
    "Export Growth Rate": 1.37,
    "Import Growth Rate": 2.15,
  },
  {
    year: 1998,
    "Export Growth Rate": 1.34,
    "Import Growth Rate": 2.07,
  },
  {
    year: 1999,
    "Export Growth Rate": 1.32,
    "Import Growth Rate": 2.05,
  },
  {
    year: 2000,
    "Export Growth Rate": 1.33,
    "Import Growth Rate": 2.07,
  },
  {
    year: 2001,
    "Export Growth Rate": 1.31,
    "Import Growth Rate": 2.08,
  },
  {
    year: 2002,
    "Export Growth Rate": 1.29,
    "Import Growth Rate": 2.1,
  },
  {
    year: 2003,
    "Export Growth Rate": 1.27,
    "Import Growth Rate": 2.15,
  },
  {
    year: 2004,
    "Export Growth Rate": 1.27,
    "Import Growth Rate": 2.21,
  },
  {
    year: 2005,
    "Export Growth Rate": 1.26,
    "Import Growth Rate": 2.23,
  },
  {
    year: 2006,
    "Export Growth Rate": 1.26,
    "Import Growth Rate": 2.29,
  },
  {
    year: 2007,
    "Export Growth Rate": 1.27,
    "Import Growth Rate": 2.34,
  },
  {
    year: 2008,
    "Export Growth Rate": 1.26,
    "Import Growth Rate": 2.36,
  },
  {
    year: 2009,
    "Export Growth Rate": 1.26,
    "Import Growth Rate": 2.36,
  },
  {
    year: 2010,
    "Export Growth Rate": 1.25,
    "Import Growth Rate": 2.35,
  },
  {
    year: 2011,
    "Export Growth Rate": 1.24,
    "Import Growth Rate": 2.34,
  },
  {
    year: 2012,
    "Export Growth Rate": 1.25,
    "Import Growth Rate": 2.39,
  },
  {
    year: 2013,
    "Export Growth Rate": 1.22,
    "Import Growth Rate": 2.3,
  },
  {
    year: 2014,
    "Export Growth Rate": 1.2,
    "Import Growth Rate": 2.35,
  },
  {
    year: 2015,
    "Export Growth Rate": 1.17,
    "Import Growth Rate": 2.39,
  },
  {
    year: 2016,
    "Export Growth Rate": 1.16,
    "Import Growth Rate": 2.41,
  },
  {
    year: 2017,
    "Export Growth Rate": 1.13,
    "Import Growth Rate": 2.44,
  },
  {
    year: 2018,
    "Export Growth Rate": 1.07,
    "Import Growth Rate": 2.45,
  },
  {
    year: 2019,
    "Export Growth Rate": 1.03,
    "Import Growth Rate": 2.47,
  },
  {
    year: 2020,
    "Export Growth Rate": 0.92,
    "Import Growth Rate": 2.48,
  },
  {
    year: 2021,
    "Export Growth Rate": 0.82,
    "Import Growth Rate": 2.51,
  },
];
</script>

<template>
  <div class="flex flex-1 p-4 gap-4">
    <div class="flex flex-col flex-1 gap-4">
      <div class="flex items-center justify-between">
        <div class="w-[300px]">
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
        </div>

        <Button>Add More Charts</Button>
      </div>

      <div class="flex items-center justify-between gap-4">
        <Tabs default-value="account" class="w-[200px]">
          <TabsList class="grid w-full grid-cols-2">
            <TabsTrigger value="account"> Battery </TabsTrigger>
            <TabsTrigger value="password"> Cell </TabsTrigger>
          </TabsList>
        </Tabs>

        <DateRangePicker />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>CCL/DCL/Current(A)</CardTitle>
        </CardHeader>
        <CardContent class="pl-2">
          <LineChart
            :data="data"
            index="year"
            :categories="['Export Growth Rate', 'Import Growth Rate']"
            :y-formatter="
              (tick, i) => {
                return typeof tick === 'number'
                  ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
                  : '';
              }
            "
          />
        </CardContent>
      </Card>
    </div>
    <Card class="overflow-hidden h-full flex flex-col">
      <CardHeader class="flex flex-row items-start bg-muted/50">
        <div class="grid gap-0.5">
          <CardTitle class="flex items-center gap-2 text-lg group">
            Order ID: Oe31b70H
            <Button
              size="icon"
              variant="outline"
              class="w-6 h-6 transition-opacity opacity-0 group-hover:opacity-100"
            >
              <Copy class="w-3 h-3" />
              <span class="sr-only">Copy Order ID</span>
            </Button>
          </CardTitle>
          <CardDescription>Date: November 23, 2023</CardDescription>
        </div>
        <div class="flex items-center gap-1 ml-auto">
          <Button size="sm" variant="outline" class="h-8 gap-1">
            <Truck class="h-3.5 w-3.5" />
            <span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
              Track Order
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button size="icon" variant="outline" class="w-8 h-8">
                <MoreVertical class="h-3.5 w-3.5" />
                <span class="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent class="p-6 text-sm flex-1">
        <div class="grid gap-3">
          <div class="font-semibold">Order Details</div>
          <ul class="grid gap-3">
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
                Glimmer Lamps x <span>2</span>
              </span>
              <span>$250.00</span>
            </li>
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">
                Aqua Filters x <span>1</span>
              </span>
              <span>$49.00</span>
            </li>
          </ul>
          <Separator class="my-2" />
          <ul class="grid gap-3">
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">Subtotal</span>
              <span>$299.00</span>
            </li>
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">Shipping</span>
              <span>$5.00</span>
            </li>
            <li class="flex items-center justify-between">
              <span class="text-muted-foreground">Tax</span>
              <span>$25.00</span>
            </li>
            <li class="flex items-center justify-between font-semibold">
              <span class="text-muted-foreground">Total</span>
              <span>$329.00</span>
            </li>
          </ul>
        </div>
        <Separator class="my-4" />
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-3">
            <div class="font-semibold">Shipping Information</div>
            <address class="grid gap-0.5 not-italic text-muted-foreground">
              <span>Liam Johnson</span>
              <span>1234 Main St.</span>
              <span>Anytown, CA 12345</span>
            </address>
          </div>
          <div class="grid gap-3 auto-rows-max">
            <div class="font-semibold">Billing Information</div>
            <div class="text-muted-foreground">Same as shipping address</div>
          </div>
        </div>
        <Separator class="my-4" />
        <div class="grid gap-3">
          <div class="font-semibold">Customer Information</div>
          <dl class="grid gap-3">
            <div class="flex items-center justify-between">
              <dt class="text-muted-foreground">Customer</dt>
              <dd>Liam Johnson</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="text-muted-foreground">Email</dt>
              <dd>
                <a href="mailto:">liam@acme.com</a>
              </dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="text-muted-foreground">Phone</dt>
              <dd>
                <a href="tel:">+1 234 567 890</a>
              </dd>
            </div>
          </dl>
        </div>
        <Separator class="my-4" />
        <div class="grid gap-3">
          <div class="font-semibold">Payment Information</div>
          <dl class="grid gap-3">
            <div class="flex items-center justify-between">
              <dt class="flex items-center gap-1 text-muted-foreground">
                <CreditCard class="w-4 h-4" />
                Visa
              </dt>
              <dd>**** **** **** 4532</dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter
        class="flex flex-row items-center px-6 py-3 border-t bg-muted/50"
      >
        <div class="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
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
