import { SharedNavbar } from "@/components/SharedNavbar";
import { Header69 } from "./components/Header69";
import { Pricing24 } from "./components/Pricing24";
import { Pricing21 } from "./components/Pricing21";
import { Faq4 } from "./components/Faq4";
import { Cta31 } from "./components/Cta31";
import { Footer4 } from "./components/Footer4";

export const metadata = {
  title: "Pricing — AI Affiliate Ecosystem Platform",
  description:
    "Simple, transparent pricing for every team size. Scale your affiliate program from startup to enterprise with no hidden fees.",
};

export default function PricingPage() {
  return (
    <div>
      <SharedNavbar />
      <Header69 />
      <Pricing24 />
      <Pricing21 />
      <Faq4 />
      <Cta31 />
      <Footer4 />
    </div>
  );
}
