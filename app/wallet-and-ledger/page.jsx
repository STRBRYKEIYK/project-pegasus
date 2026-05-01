import { SharedNavbar } from "@/components/SharedNavbar";
import { Header69 } from "./components/Header69";
import { Layout13 } from "./components/Layout13";
import { Layout213 } from "./components/Layout213";
import { Layout16 } from "./components/Layout16";
import { Layout207 } from "./components/Layout207";
import { Testimonial17 } from "./components/Testimonial17";
import { Logo1 } from "./components/Logo1";
import { Cta31 } from "./components/Cta31";
import { Footer4 } from "./components/Footer4";

export const metadata = {
  title: "Wallet & Ledger — AI Affiliate Ecosystem Platform",
  description:
    "Manage your affiliate earnings with our built-in wallet and ledger system. Track every transaction, balance, and payout in real time.",
};

export default function WalletAndLedgerPage() {
  return (
    <div className="page-wrapper">
      <SharedNavbar />`n      <main style={{ paddingTop: "68px" }}>
      <Header69 />
      <Layout13 />
      <Layout213 />
      <Layout16 />
      <Layout207 />
      <Testimonial17 />
      <Logo1 />
      <Cta31 />
      <Footer4 />
        </main>
    </div>
  );
}

