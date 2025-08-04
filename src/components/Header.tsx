import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Green-Reporting</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about-us" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg">
                  Join the Waitlist
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-gray-900">Join Our Waitlist</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-gray-600">Be the first to know when we launch our sustainability platform.</p>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="border-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg px-4 py-3"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg">
                    Join Waitlist
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/about-us" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact-us" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg w-full">
                    Join the Waitlist
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-gray-900">Join Our Waitlist</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-gray-600">Be the first to know when we launch our sustainability platform.</p>
                    <div className="space-y-2">
                      <Label htmlFor="mobile-email">Email address</Label>
                      <Input 
                        id="mobile-email" 
                        type="email" 
                        placeholder="your@email.com" 
                        className="border-2 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-lg px-4 py-3"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg">
                      Join Waitlist
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;