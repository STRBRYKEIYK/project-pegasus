"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout210() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Automation</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Automation and webhooks
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Real-time webhooks fire on conversions, payouts, and disputes.
              Zapier and native API integrations connect to your stack. Build
              custom workflows without touching code.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Real-time event webhooks</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Zapier and native API integrations</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Programmable triggers for custom workflows</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Learn"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
