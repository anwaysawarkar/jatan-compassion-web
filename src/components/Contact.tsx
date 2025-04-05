import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jawluc8",        // Your EmailJS Service ID
        "template_1sy7e4x",       // Your EmailJS Template ID
        e.currentTarget,
        "xcAPpRdHgy8afylTl"       // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Your message has been sent successfully!");
          e.currentTarget.reset();
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="section-heading">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info Panel */}
          <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Contact Information</h3>
            <div className="space-y-4 mb-8 text-sm text-gray-700">
              <div>
                <h4 className="font-medium">Address</h4>
                <p>
                  59 Ingole Layout, Mankapur Ring Rd, near Kawasaki Motorcycle, <br />
                  New Mankapur, Nagpur, Maharashtra, India 440030
                </p>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p>vp_62@rediffmail.com</p>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p>+91 93723 10109</p>
              </div>
              <div>
                <h4 className="font-medium">Hours</h4>
                <p>Monday - Sunday: 11:30 AM - 8:00 PM</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { href: "#", label: "Facebook" },
                  { href: "#", label: "Twitter" },
                  { href: "#", label: "Instagram" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-jatan-orange hover:bg-jatan-yellow text-white p-2 rounded-full transition-colors"
                  >
                    {/* Placeholder circle icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input name="name" id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input name="email" id="email" type="email" placeholder="Your email" required />
                </div>
              </div>

              

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea name="message" id="message" placeholder="Your message" rows={5} required />
              </div>

              <Button type="submit" className="bg-jatan-orange hover:bg-jatan-yellow text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
