"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing21() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Compare</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What's included
          </h1>
          <p className="md:text-md">See exactly what each plan delivers</p>
        </div>
        <div className="w-full">
          <div className="sticky top-0 grid grid-cols-3 border-b border-border-primary bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="hidden md:block" />
            <div className="flex h-full flex-col justify-between border-0 border-border-primary px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Starter
                </h2>
                <div className="my-3 md:my-4">
                  <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                    $19
                  </p>
                  <p className="font-bold">Per month</p>
                </div>
                <p>Best for testing</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Launch your AI affiliate program"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Launch your AI affiliate program
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Growth
                </h2>
                <div className="my-3 md:my-4">
                  <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                    $49
                  </p>
                  <p className="font-bold">Per month</p>
                </div>
                <p>Most popular choice</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Launch your AI affiliate program"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Launch your AI affiliate program
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
              <div>
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Enterprise
                </h2>
                <div className="my-3 md:my-4">
                  <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                    $99
                  </p>
                  <p className="font-bold">Per month</p>
                </div>
                <p>Scale without limits</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Launch your AI affiliate program"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Launch your AI affiliate program
                </Button>
              </div>
            </div>
          </div>
          <div className="border-b border-border-primary py-5">
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              AI campaign builder
            </h3>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              AI-generated campaign templates
            </p>
            <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
              Yes
            </div>
            <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
              Yes
            </div>
            <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
              Yes
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Email and social templates
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Custom brand voice training
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Multi-channel campaign orchestration
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              A/B testing and performance analytics
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="border-b border-border-primary py-5">
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Wallet and ledger
            </h3>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Real-time balance visibility
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Yes
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Yes
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Yes
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Audit-ready transaction logs
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Refund clawback automation
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Dispute resolution tools
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Commission reconciliation reports
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="border-b border-border-primary py-5">
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Compliance and payouts
            </h3>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Tax form generation
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Add-on
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Yes
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              Yes
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              1099 automation and filing
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              MLM and sub-affiliate payouts
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Webhook automation and API access
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Dedicated compliance support
            </p>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
              <BiCheck className="size-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
