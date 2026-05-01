"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing24() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Simple</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Clear pricing
          </h1>
          <p className="md:text-md">
            No hidden fees. Pay for what you use. Scale as you grow.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $19
                </h3>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Up to 10 affiliates</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>AI campaign generation</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Real-time ledger access</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Launch your program" className="w-full">
                  Launch your program
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $49
                </h3>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Up to 50 affiliates</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Recurring commissions</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Automated payouts</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Tax form collection</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Launch your program" className="w-full">
                  Launch your program
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $99
                </h3>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Unlimited affiliates</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>MLM tier structures</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Webhook integrations</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Refund clawback logic</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Priority support</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Launch your program" className="w-full">
                  Launch your program
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $180
                </h3>
                <p className="mt-2 font-medium">Save 20%</p>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Up to 10 affiliates</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>AI campaign generation</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Real-time ledger access</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Launch your program" className="w-full">
                  Launch your program
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $480
                </h3>
                <p className="mt-2 font-medium">Save 20%</p>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Up to 50 affiliates</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Recurring commissions</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Automated payouts</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Tax form collection</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Launch your program" className="w-full">
                  Launch your program
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $960
                </h3>
                <p className="mt-2 font-medium">Save 20%</p>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Unlimited affiliates</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>MLM tier structures</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Webhook integrations</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Refund clawback logic</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Priority support</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Launch your program" className="w-full">
                  Launch your program
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
