import Analytics from "./components/analytics";
import DevelopSection from "./components/develop";
import Features from "./components/features";
import SecondFeatures from "./components/features-2";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ReadyToDeploy from "./components/ready-to-deploy";
import ScaleSection from "./components/scale";

export default function App() {
  return (
    <div className="font-geist bg-black text-white">
      <Navbar />

      <div className="pt-12 sm:pt-24">
        <Hero />
        <DevelopSection />
        <div className="py4 container border-[0.01px] border-[#454545]">
          &nbsp;
        </div>
        <Features />
        <Analytics />
        <SecondFeatures />
        <ScaleSection />
        <div className="py4 container border-[0.01px] border-[#454545]">
          &nbsp;
        </div>
        <ReadyToDeploy />
        <Footer />
      </div>
    </div>
  );
}
