import { SharedNavbar } from "@/components/SharedNavbar";
import { Header69 } from "./components/Header69";
import { Faq4 } from "./components/Faq4";
import { Cta31 } from "./components/Cta31";
import { Footer4 } from "./components/Footer4";

export const metadata = {
  title: "FAQ — AI Affiliate Ecosystem Platform",
  description:
    "Got questions? Find answers to the most common questions about our AI affiliate ecosystem, commissions, payouts, and integrations.",
};

export default function FaqPage() {
  return (
    <div>
      <SharedNavbar />
      <Header69 />
      <Faq4 />
      <Cta31 />
      <Footer4 />
    </div>
  );
}
