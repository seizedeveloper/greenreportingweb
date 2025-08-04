import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Target, Eye, Cog, Award, Users, Globe, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: Target,
      title: "Expert Knowledge",
      description: "Deep expertise in sustainability, ESG reporting, and environmental regulations.",
      color: "text-green-600"
    },
    {
      icon: Cog,
      title: "Advanced Technology",
      description: "Cutting-edge tools and analytics to streamline your carbon reporting process.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Proven track record of helping businesses achieve their sustainability goals.",
      color: "text-purple-600"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contributing to worldwide environmental initiatives and climate action.",
      color: "text-green-600"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Story: Empowering a Greener Tomorrow
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that every business has the power to make a positive environmental impact. 
              Our mission is to provide the tools and expertise needed to measure, manage, and reduce carbon footprints.
            </p>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Green Reporting, we are committed to empowering businesses and individuals to take actionable steps toward a sustainable future. 
                  <br></br>
                  <br></br>
                  As a trusted partner in the journey to environmental accountability, we specialize in carbon emissions measurement, reporting, and reduction strategies tailored to meet your unique goals.
                </p>
              </div>
              <div className="bg-green-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">500+</div>
                    <div className="text-gray-700">Companies Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">50M+</div>
                    <div className="text-gray-700">Tons CO2 Tracked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">25+</div>
                    <div className="text-gray-700">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">98%</div>
                    <div className="text-gray-700">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Target className="h-12 w-12 text-green-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    Our mission is to simplify carbon accounting and drive meaningful change by providing accurate, transparent, and actionable insights. We believe that understanding your environmental impact is the first step toward a greener, more sustainable tomorrow.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Eye className="h-12 w-12 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    A world where every business decision is made with environmental impact in mind, 
                    where sustainability reporting is as standard as financial reporting, and where 
                    corporate responsibility drives positive change for our planet.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive sustainability solutions that help businesses measure, 
                manage, and reduce their environmental impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Carbon Footprint Calculations</h3>
                  <p className="text-gray-600">
                    Utilizing cutting-edge tools and methodologies, we provide precise assessments of your carbon emissions across various operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Customized Reporting Solutions</h3>
                  <p className="text-gray-600">
                    Our tailored reports align with global standards such as GHG Protocol, ISO 14064, and more, ensuring compliance and credibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Actionable Recommendations</h3>
                  <p className="text-gray-600">
                    Beyond reporting, we empower you with strategies and solutions to reduce your carbon footprint effectively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our unique combination of expertise, technology, and commitment to your success 
                sets us apart in the sustainability space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;