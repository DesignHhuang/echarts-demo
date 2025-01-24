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
  DropdownMenuLabel,
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DateRangePicker } from "@/components/date-range-picker";

import {
  Copy,
  CreditCard,
  BatteryFull,
  Heater,
  File,
  ListFilter,
  MoreVertical,
  Truck,
} from "lucide-vue-next";
</script>

<template>
  <main class="flex gap-4">
    <div class="grid items-start gap-4 auto-rows-max lg:col-span-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <Select>
            <SelectTrigger
              id="model"
              class="items-start [&_[data-description]]:hidden"
            >
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
          <Tabs default-value="account" class="w-[400px]">
            <TabsList class="grid w-full grid-cols-2">
              <TabsTrigger value="account"> Battery </TabsTrigger>
              <TabsTrigger value="password"> Cell </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div class="flex items-center gap-4">
          <DateRangePicker />
          <Button>Add</Button>
        </div>
      </div>

      <div
        class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
      >
        <Card class="sm:col-span-2">
          <CardHeader class="pb-3">
            <CardTitle>Your Orders</CardTitle>
            <CardDescription class="max-w-lg leading-relaxed text-balance">
              Introducing Our Dynamic Orders Dashboard for Seamless Management
              and Insightful Analysis.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Create New Order</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader class="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle class="text-4xl"> $1329 </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-xs text-muted-foreground">+25% from last week</div>
          </CardContent>
          <CardFooter>
            <Progress :model-value="25" aria-label="25% increase" />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader class="pb-2">
            <CardDescription>This Month</CardDescription>
            <CardTitle class="text-3xl"> $5,329 </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-xs text-muted-foreground">
              +10% from last month
            </div>
          </CardContent>
          <CardFooter>
            <Progress :model-value="12" aria-label="12% increase" />
          </CardFooter>
        </Card>
      </div>
      <Tabs default-value="week">
        <div class="flex items-center">
          <TabsList>
            <TabsTrigger value="week"> Week </TabsTrigger>
            <TabsTrigger value="month"> Month </TabsTrigger>
            <TabsTrigger value="year"> Year </TabsTrigger>
          </TabsList>
          <div class="flex items-center gap-2 ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button
                  variant="outline"
                  size="sm"
                  class="gap-1 px-3 rounded-md h-7"
                >
                  <ListFilter class="h-3.5 w-3.5" />
                  <span class="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div class="flex space-x-2 items-top">
                    <Checkbox id="terms1" />
                    <label
                      for="terms2"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Fulfilled
                    </label>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div class="flex space-x-2 items-top">
                    <Checkbox id="terms1" />
                    <label
                      for="terms2"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Declined
                    </label>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div class="flex space-x-2 items-top">
                    <Checkbox id="terms1" />
                    <label
                      for="terms2"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Refunded
                    </label>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="outline"
              size="sm"
              class="gap-1 px-3 rounded-md h-7"
            >
              <File class="h-3.5 w-3.5" />
              <span class="sr-only sm:not-sr-only">Export</span>
            </Button>
          </div>
        </div>
        <TabsContent value="week">
          <Card>
            <CardHeader class="px-7">
              <CardTitle>Orders</CardTitle>
              <CardDescription>
                Recent orders from your store.
              </CardDescription>
            </CardHeader>
            <CardContent> 这边是图表位置 </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    <div>
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
  </main>
</template>
