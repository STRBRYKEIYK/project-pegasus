"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What they've earned
          </h2>
          <p className="md:text-md">
            Merchants scaling affiliate revenue with precision
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="md:text-md">
                "The wallet transparency alone saved us from three commission
                disputes. We know exactly what's owed, when it's owed, and why."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Sarah Chen</p>
                <p>Founder, Velocity SaaS</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="md:text-md">
                "Our affiliates stopped asking questions about payouts. The
                ledger speaks for itself. Tax compliance was automatic."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Marcus Webb</p>
                <p>CEO, Digital Forge</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="md:text-md">
                "AI-generated campaigns cut our content creation time by half.
                Quality stayed high. Refund clawbacks protected our margins."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Elena Rodriguez</p>
                <p>Agency Director, Growth Labs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
