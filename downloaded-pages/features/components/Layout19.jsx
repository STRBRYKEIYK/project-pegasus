"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Compliance</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Payout and tax compliance
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Automated payouts hit bank accounts on schedule. W-9 and W-8 forms
              collect automatically. Tax records sync to your accounting system.
              International affiliates get localized documentation.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Automated payout scheduling</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>W-9 and W-8 form collection</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Tax record integration and reporting</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
