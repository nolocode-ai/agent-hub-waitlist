
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { DynamicBackground } from "@/components/DynamicBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DynamicBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
