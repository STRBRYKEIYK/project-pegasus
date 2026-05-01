"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout503() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Control</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Quality checks that matter
            </h1>
            <p className="md:text-md">
              Every campaign runs through plagiarism detection and brand voice
              matching before it reaches your affiliates. You set the standards,
              the system enforces them.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Review" variant="secondary">
                Review
              </Button>
              <Button
                title="→"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                →
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="tab-one" className="flex flex-col items-center">
          <TabsList className="no-scrollbar relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            <TabsTrigger
              value="tab-one"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Plagiarism check
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Brand voice match
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Approval workflow
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Detect</p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Plagiarism scanning across web sources
                </h2>
                <p>
                  Every generated campaign is scanned against billions of web
                  pages and your own content library. Duplicate text is flagged
                  before publication. No affiliate can claim they didn't know
                  the content was original.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Scan" variant="secondary">
                    Scan
                  </Button>
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    →
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Detect</p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Plagiarism scanning across web sources
                </h2>
                <p>
                  Every generated campaign is scanned against billions of web
                  pages and your own content library. Duplicate text is flagged
                  before publication. No affiliate can claim they didn't know
                  the content was original.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Scan" variant="secondary">
                    Scan
                  </Button>
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    →
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-3 font-semibold md:mb-4">Detect</p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Plagiarism scanning across web sources
                </h2>
                <p>
                  Every generated campaign is scanned against billions of web
                  pages and your own content library. Duplicate text is flagged
                  before publication. No affiliate can claim they didn't know
                  the content was original.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Scan" variant="secondary">
                    Scan
                  </Button>
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    →
                  </Button>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
