
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";
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

  return (
    <section id="waitlist" className="py-20 relative">
      {/* Blue glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-agent-blue/10 blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-md mx-auto bg-card rounded-xl border border-border/50 p-6 md:p-8 blue-glow">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Join the Waitlist</h2>
            <p className="text-muted-foreground">
              Be the first to access our AI Agent Management System when we launch.
            </p>
          </div>
          
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
              <p className="text-muted-foreground">
                Thank you for joining our waitlist. We'll notify you as soon as we launch!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="bg-background border-border/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="bg-background border-border/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-agent-blue hover:bg-agent-blue-light text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground pt-2">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
