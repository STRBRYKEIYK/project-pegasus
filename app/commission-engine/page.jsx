import { SharedNavbar } from "@/components/SharedNavbar";
import { Header69 } from "./components/Header69";
import { Layout504 } from "./components/Layout504";
import { Layout503 } from "./components/Layout503";
import { Layout504_1 } from "./components/Layout504_1";
import { Layout400 } from "./components/Layout400";
import { Testimonial17 } from "./components/Testimonial17";
import { Cta31 } from "./components/Cta31";
import { Footer4 } from "./components/Footer4";

export const metadata = {
  title: "Commission Engine — AI Affiliate Ecosystem Platform",
  description:
    "Power your affiliate program with a multi-tier commission engine. Configure rates, automate calculations, and ensure accurate payouts every time.",
};

export default function CommissionEnginePage() {
  return (
    <div className="page-wrapper">
      <SharedNavbar />`n      <main style={{ paddingTop: "68px" }}>
      <Header69 />
      <Layout504 />
      <Layout503 />
      <Layout504_1 />
      <Layout400 />
      <Testimonial17 />
      <Cta31 />
      <Footer4 />
        </main>
    </div>
  );
}

