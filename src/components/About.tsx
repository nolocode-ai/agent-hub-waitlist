
import { GitBranch, GitMerge, Server, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-agent-blue/5 blur-[150px] z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Revolutionize Your AI Workflow</h2>
            <p className="text-lg text-muted-foreground mb-6">
              AgentHub is a powerful management system designed for businesses and developers working with multiple AI agents. Our platform provides the tools you need to orchestrate, monitor, and optimize your AI ecosystem.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're building complex agent networks or simply need to manage a few specialized AIs, our system makes it easy to deploy, connect, and control your agents from a single interface.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-secondary rounded-lg flex items-center justify-center text-agent-blue mt-1">
                  <Server size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Centralized Control</h3>
                  <p className="text-sm text-muted-foreground">Manage all agents from one dashboard</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-secondary rounded-lg flex items-center justify-center text-agent-blue mt-1">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Team Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Work together seamlessly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-secondary rounded-lg flex items-center justify-center text-agent-blue mt-1">
                  <GitBranch size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Version Control</h3>
                  <p className="text-sm text-muted-foreground">Track changes across deployments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 bg-secondary rounded-lg flex items-center justify-center text-agent-blue mt-1">
                  <GitMerge size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Workflow Automation</h3>
                  <p className="text-sm text-muted-foreground">Connect agents in powerful pipelines</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Terminal-like UI display */}
              <div className="absolute inset-0 rounded-xl bg-black/80 border border-agent-blue/30 overflow-hidden backdrop-blur-sm blue-glow">
                <div className="h-8 bg-gray-900 flex items-center px-4 border-b border-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400">agent_manager.sh</div>
                </div>
                <div className="p-4 font-mono text-xs text-gray-300 h-full overflow-hidden">
                  <div className="text-green-400">$ AgentHub init</div>
                  <div className="text-gray-400 mt-1">Initializing agent network...</div>
                  <div className="text-gray-400 mt-1">Loading configuration from cloud...</div>
                  <div className="text-green-400 mt-2">[SUCCESS] Connected to AgentHub</div>
                  <div className="text-blue-400 mt-1">» Orchestrator ready</div>
                  <div className="text-blue-400">» Analytics module loaded</div>
                  <div className="text-blue-400">» Security protocols active</div>
                  <div className="text-green-400 mt-2">$ AgentHub deploy --agent="assistant-v1"</div>
                  <div className="text-gray-400 mt-1">Deploying agent: assistant-v1</div>
                  <div className="text-gray-400 mt-1">Configuring resources...</div>
                  <div className="text-green-400 mt-2">[SUCCESS] Agent deployed</div>
                  <div className="text-gray-400 mt-2">Agent Status:</div>
                  <div className="text-blue-400">» CPU: 12%</div>
                  <div className="text-blue-400">» Memory: 256MB</div>
                  <div className="text-blue-400">» Response time: 42ms</div>
                  <div className="text-green-400 mt-2">$ AgentHub connect --agent="assistant-v1" --to="knowledge-base"</div>
                  <div className="mt-1 text-green-400">[SUCCESS] Connection established</div>
                  <div className="text-gray-200 mt-2 animate-pulse">_</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
