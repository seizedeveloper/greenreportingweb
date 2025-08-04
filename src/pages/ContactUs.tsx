import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in Touch with Green-Reporting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your sustainability journey? We're here to help you every step of the way. 
              Reach out to us and let's build a greener future together.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John"
                        className="border-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg px-4 py-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe"
                        className="border-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg px-4 py-3"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com"
                      className="border-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg px-4 py-3"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company Name"
                      className="border-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg px-4 py-3"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?"
                      className="border-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg px-4 py-3"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your sustainability goals and how we can help..."
                      rows={6}
                      className="border-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg px-4 py-3"
                    />
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Email</h3>
                        <p className="text-gray-600">info@greenreporting.com</p>
                        <p className="text-gray-500 text-sm">We typically respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                        <p className="text-gray-600">+91 98765 43210</p>
                        <p className="text-gray-500 text-sm">Monday to Friday, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Address</h3>
                        <p className="text-gray-600">123 Green Way<br />Eco City, Earth 12345</p>
                        <p className="text-gray-500 text-sm">Visit us for in-person consultations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">How quickly can we get started?</h3>
                      <p className="text-gray-600 text-sm">Most clients can begin their sustainability reporting within 1-2 weeks of initial consultation.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer custom solutions?</h3>
                      <p className="text-gray-600 text-sm">Yes, we tailor our platform and services to meet your specific industry requirements and reporting needs.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">What's included in the consultation?</h3>
                      <p className="text-gray-600 text-sm">A comprehensive review of your current sustainability practices and a customized roadmap for improvement.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <Card className="border-0 shadow-lg mt-12">
            <CardContent className="p-0">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-gray-500 text-sm">123 Green Way, Eco City, Earth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;