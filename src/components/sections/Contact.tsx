import { Button } from "../ui/button";
import { Mail, Send } from "lucide-react";
import { useToast } from "./../../hooks/use-toast";

const email = "indrakantm23@gmail.com";

const Contact = () => {
  const { toast } = useToast();

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    toast({ title: "Email copied", description: email });
  };

  return (
    <section id="contact" className="container py-20">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold">Contact</h2>
        {/* <p className="text-muted-foreground">
          Open to opportunities and collaborations.
        </p> */}
      </header>

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="hero" className="hover-scale" onClick={copy}>
          <Mail className="mr-2" /> Copy Email
        </Button>
        <a href={`mailto:${email}`}>
          <Button variant="outline" className="hover-scale">
            <Send className="mr-2" /> Send Email
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
