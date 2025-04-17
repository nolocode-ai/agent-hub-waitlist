
import { WaitlistForm } from "@/components/WaitlistForm";
import { DynamicBackground } from "@/components/DynamicBackground";
import { DashboardPreview } from "@/components/DashboardPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DynamicBackground />
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <WaitlistForm />
        <DashboardPreview />
      </div>
    </div>
  );
};

export default Index;
