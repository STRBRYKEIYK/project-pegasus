"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout395() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Process</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Three steps to launch
          </h1>
          <p className="md:text-md">
            From signup to first affiliate campaign in under an hour
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Step one</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Connect your product and set commission rates
                </h2>
                <p>
                  Define your payout structure, recurring commissions, and MLM
                  tiers
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Next"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Step two</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Invite affiliates and let AI build their campaigns
                </h2>
                <p>
                  Our system generates email sequences, landing pages, and
                  social content
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Next"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Step three</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Monitor performance and automate payouts
                </h2>
                <p>
                  Track conversions, handle refund clawbacks, and pay affiliates
                  on schedule
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Start now"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Start now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
