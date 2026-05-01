import { SharedNavbar } from "@/components/SharedNavbar";
import HeroSection from "./components/HeroSection";

export const metadata = {
  title: "AffiliateAI — The AI-Powered Affiliate Ecosystem Platform",
  description:
    "Build affiliate programs that actually scale. Launch AI-generated campaigns in minutes with automated commissions, multi-tier payouts, and global tax compliance.",
};

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <SharedNavbar />
      <main style={{ paddingTop: "68px" }}>
        <HeroSection />
      </main>
    </div>
  );
}
