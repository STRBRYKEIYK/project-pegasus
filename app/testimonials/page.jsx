import { SharedNavbar } from "@/components/SharedNavbar";
import { Header69 } from "./components/Header69";
import { Testimonial17 } from "./components/Testimonial17";
import { Testimonial17_1 } from "./components/Testimonial17_1";
import { Logo1 } from "./components/Logo1";
import { Cta31 } from "./components/Cta31";
import { Footer4 } from "./components/Footer4";

export const metadata = {
  title: "Testimonials — AI Affiliate Ecosystem Platform",
  description:
    "Hear from affiliates and businesses who have scaled their programs using our AI-powered platform. Real results, real stories.",
};

export default function TestimonialsPage() {
  return (
    <div>
      <SharedNavbar />
      <Header69 />
      <Testimonial17 />
      <Testimonial17_1 />
      <Logo1 />
      <Cta31 />
      <Footer4 />
    </div>
  );
}
