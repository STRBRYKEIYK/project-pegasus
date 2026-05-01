"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout359() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Compliance</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Forms filed before January
            </h2>
            <p className="md:text-md">W9</p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 border border-border-primary md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div>
              <p className="mb-2 text-sm font-semibold">
                Tax forms collected once
              </p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Affiliates submit their W9 or W8-BEN once during onboarding. We
                store it securely, validate it, and use it to generate compliant
                1099s automatically. No chasing, no spreadsheets, no January
                scramble.
              </h3>
              <p>Explore</p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
