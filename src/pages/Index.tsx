
import { WaitlistForm } from "@/components/WaitlistForm";
import { DynamicBackground } from "@/components/DynamicBackground";
import { DashboardPreview } from "@/components/DashboardPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DynamicBackground />
      <DashboardPreview />
      <WaitlistForm />
    </div>
  );
};

export default Index;
