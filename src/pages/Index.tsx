import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  TrendingUp, 
  Shield, 
  Globe, 
  Users, 
  Award,
  BarChart3,
  ArrowRight,
  Calendar,
  Clock,
  User,
  CheckCircle,
  Target,
  Database,
  TrendingDown,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Carbon Footprint Tracking",
      description: "Comprehensive carbon emission monitoring and reporting tools that meet international standards.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: BarChart3,
      title: "ESG Analytics",
      description: "Advanced analytics and insights to help you understand and improve your ESG performance.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Award,
      title: "Compliance Management",
      description: "Stay compliant with evolving environmental regulations and reporting requirements.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Globe,
      title: "Supply Chain Impact",
      description: "Track and optimize sustainability across your entire supply chain network.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify and mitigate climate-related risks to protect your business operations.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      title: "Expert Consulting",
      description: "Access to sustainability experts who guide you through every step of your journey.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  const blogPosts = [
    {
      title: "10 Proven Strategies to Reduce Your Company's Carbon Footprint",
      excerpt: "Discover actionable strategies that leading companies are using to significantly reduce their environmental impact.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1573160813959-df39c1c87db8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "carbon-footprint-reduction-strategies"
    },
    {
      title: "ESG Reporting Best Practices for Small and Medium Businesses",
      excerpt: "A comprehensive guide to ESG reporting that helps SMBs navigate complex requirements.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "esg-reporting-best-practices"
    },
    {
      title: "Complete Guide to Renewable Energy Transition for Businesses",
      excerpt: "Learn how to plan and execute a successful transition to renewable energy sources.",
      author: "Emma Rodriguez",
      date: "December 10, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      slug: "renewable-energy-transition-guide"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Served" },
    { number: "50M+", label: "Tons CO2 Tracked" },
    { number: "25+", label: "Countries" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Sustainability,<br />
              <span className="text-green-600">One Report at a Time</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Green Reporting App is your gateway to a greener future.<br />
              Track, report, and analyze environmental impacts effortlessly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Guiding Your Business towards a Greener Footprint
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Measure, Manage, and Minimize your carbon footprint
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                    Get Started Now
                  </Button>
                  <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl p-8 relative overflow-hidden">
                <div className="flex items-center justify-center h-80">
                  <div className="relative">
                    <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center">
                      <Leaf className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Measure. Manage. Minimize
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools to track, analyze, and reduce your environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Measure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Utilize our powerful software to measure and manage carbon emissions effectively</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Empower your organization to make a positive impact on the environment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Gain insights for improvement and implement strategies to reduce emissions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Manage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Take control of your carbon data like never before</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Centralized platform for organizing and storing emission data</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Seamlessly integrate data from multiple sources</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Minimize</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Drive meaningful emission reductions and demonstrate commitment to sustainability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Go beyond measurement with actionable strategies that build for the future</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Optimize resource management and adopt energy-efficient practices</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        {/* Blog Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Insights</h2>
              <p className="text-xl text-gray-600">
                Stay informed with the latest sustainability trends and best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1"
                        >
                          <span>Read more</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/blog">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 font-medium py-3 px-8 rounded-lg">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Sustainability Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already reducing their carbon footprint and building a more sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg">
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-700 font-medium py-3 px-8 rounded-lg"
              >
                Contact Our Experts
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
