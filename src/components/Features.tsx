
import { Bot, Braces, Cog, Command, Cpu, Database, Lock, Zap } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border/50 hover:border-agent-blue/30 transition-colors">
      <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-4 text-agent-blue">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      title: "Unified Dashboard",
      description: "Manage all your AI agents from a single, intuitive interface.",
      icon: <Command size={24} />,
    },
    {
      title: "Performance Monitoring",
      description: "Track agent performance and resource usage in real-time.",
      icon: <Zap size={24} />,
    },
    {
      title: "Secure Deployment",
      description: "Deploy agents with enterprise-grade security protocols.",
      icon: <Lock size={24} />,
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights into agent behavior and interaction patterns.",
      icon: <Database size={24} />,
    },
    {
      title: "Custom Integrations",
      description: "Connect your agents with your existing tools and workflows.",
      icon: <Braces size={24} />,
    },
    {
      title: "Behavior Configuration",
      description: "Fine-tune agent behavior with granular configuration options.",
      icon: <Cog size={24} />,
    },
    {
      title: "Multi-Agent Orchestration",
      description: "Coordinate complex workflows between multiple agents.",
      icon: <Cpu size={24} />,
    },
    {
      title: "Conversational Memory",
      description: "Enable agents to maintain context across interactions.",
      icon: <Bot size={24} />,
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools you need to deploy, manage, and scale your AI agents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
