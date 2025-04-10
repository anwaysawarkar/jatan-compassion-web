import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
  type?: string;
}

const BASE_URL = 'https://jatan-sanstha.onrender.com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    type: "message"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE_URL}/api/contact/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      toast({
        title: "Success!",
        description: data.message,
        variant: "default",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        type: "message"
      });

    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <h2 className="section-heading">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-10 items-start"> {/* Changed to items-start */}
            {/* Left Info Panel */}
            <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner h-full flex flex-col">
                <h3 className="text-2xl font-semibold mb-6 text-jatan-darkBlue">Contact Information</h3>
                <div className="space-y-5 flex-grow">
                  <div className="flex items-start">
                    <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-jatan-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">vp_62@reddifmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-jatan-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 93723 10109</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-jatan-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        JATAN Sanstha<br />
                        59 Ingole Layout, Mankapur Ring Rd<br />
                        near Kawasaki Motorcycle, New Mankapur, Nagpur, Maharashtra 440030
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jatan-orange/20 p-2 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-jatan-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Working Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 11:30AM - 8PM<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white p-6 rounded-lg shadow-inner h-full"> {/* Added wrapper div */}
                <h3 className="text-2xl font-semibold mb-4 text-jatan-darkBlue">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                          name="email"
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                    />
                  </div>

                  <Button
                      type="submit"
                      className="bg-jatan-orange hover:bg-jatan-yellow text-white"
                      disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;