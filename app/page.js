import { SharedNavbar } from "@/components/SharedNavbar";
import { Header30 } from "./components/Header30";
import { Layout363 } from "./components/Layout363";
import { Layout395 } from "./components/Layout395";
import { Layout504 } from "./components/Layout504";
import { Layout504_1 } from "./components/Layout504_1";
import { Layout491 } from "./components/Layout491";
import { Layout504_2 } from "./components/Layout504_2";
import { Testimonial17 } from "./components/Testimonial17";
import { Logo1 } from "./components/Logo1";
import { Pricing24 } from "./components/Pricing24";
import { Faq4 } from "./components/Faq4";
import { Cta31 } from "./components/Cta31";
import { Footer4 } from "./components/Footer4";

export const metadata = {
  title: "AI Affiliate Ecosystem Platform — Home",
  description:
    "Build affiliate programs that actually scale. Launch AI-generated campaigns in minutes with automated commissions and payouts.",
};

export default function HomePage() {
  return (
    <div>
      <SharedNavbar />
      <Header30 />
      <Layout363 />
      <Layout395 />
      <Layout504 />
      <Layout504_1 />
      <Layout491 />
      <Layout504_2 />
      <Testimonial17 />
      <Logo1 />
      <Pricing24 />
      <Faq4 />
      <Cta31 />
      <Footer4 />
    </div>
  );
}
