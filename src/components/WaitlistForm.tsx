
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when we launch!",
      });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
        <div className="bg-card rounded-xl border border-border/50 p-8 max-w-md w-full mx-4 text-center space-y-4">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
          <h2 className="text-2xl font-semibold">We've added you to our waiting list!</h2>
          <p className="text-muted-foreground">We'll let you know when AgentHub is ready.</p>
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground break-all">{email}</p>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            AgentHub is coming to your inbox soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="text-center space-y-4 mb-8">
        <p className="text-sm text-muted-foreground uppercase tracking-wider">AgentHub Design System</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Join the waitlist for the{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Design System!
          </span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="pl-10 bg-card h-12 text-base"
          />
        </div>
        
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="email"
            placeholder="Email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10 bg-card h-12 text-base"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 text-base bg-card hover:bg-card/80"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-16 text-center space-y-2">
        <p className="text-muted-foreground">
          AgentHub is coming to your workspace soon.
        </p>
        <p className="text-sm text-muted-foreground">
          Designed by{" "}
          <a href="#" className="underline hover:text-foreground">@agentHub</a>
          {" "}to give you back your time.
        </p>
      </div>
    </section>
  );
}
