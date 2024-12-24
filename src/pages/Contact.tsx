import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with us to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-secondary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        123 Web Street
                        <br />
                        Wolverhampton, UK
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="text-secondary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-600">info@webwoven.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-secondary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-600">+44 123 456 7890</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;