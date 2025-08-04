import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

// Import your Sanity client and URL builder
import { client, urlFor } from '../sanityClient'; // ADJUST THIS PATH if your sanityClient.js is elsewhere (e.g., '../../sanityClient')

const Blog = () => {
  // State to hold blog posts fetched from Sanity
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // GROQ query to fetch all posts with required fields
        const query = `*[_type == "post"]{
          _id,
          title,
          "slug": slug.current,
          excerpt,
          isFeatured, // Fetch the new featured field
          mainImage{
            asset->{
              _id,
              url
            },
            alt // Ensure you fetch alt text for accessibility
          },
          publishedAt,
          author->{name}, // Fetch author's name from referenced author document
          categories[]->{title} // Fetch titles of referenced category documents
        } | order(publishedAt desc)`; // Order by most recent posts first

        const fetchedPosts = await client.fetch(query);
        setBlogPosts(fetchedPosts);
      } catch (err) {
        console.error("Error fetching blog posts from Sanity:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this runs once on component mount

  // --- Conditional Rendering for Loading/Error States ---
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
          <p className="text-xl text-gray-700">Loading blog posts...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
          <p className="text-xl text-red-600">Error loading blog posts: {error.message}. Please check your Sanity connection and console for details.</p>
        </div>
      </Layout>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
          <p className="text-xl text-gray-700">No blog posts found. Time to create some in Sanity Studio!</p>
        </div>
      </Layout>
    );
  }

  // Filter featured and other posts
  const featuredPosts = blogPosts.filter(post => post.isFeatured);
  const otherPosts = blogPosts.filter(post => !post.isFeatured);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Latest Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest trends, best practices, and expert insights in sustainability,
              ESG reporting, and environmental responsibility.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Featured Post */}
          {featuredPosts.length > 0 && featuredPosts.map((post) => ( // Only render if there's a featured post
            <Card key={post._id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    {post.mainImage && post.mainImage.asset && (
                      <img
                        src={urlFor(post.mainImage).url()} // Use Sanity's image URL builder
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-64 lg:h-full object-cover rounded-l-lg"
                      />
                    )}
                    <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    {post.categories && post.categories.length > 0 && (
                      <Badge variant="outline" className="w-fit mb-4 border-green-200 text-green-700">
                        {post.categories[0].title} {/* Display the first category */}
                      </Badge>
                    )}
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author?.name || 'Unknown Author'}</span> {/* Safely access author name */}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span> {/* Format date */}
                      </div>
                      {/* Removed Clock/readTime as it's not in Sanity schema currently */}
                      {/* <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div> */}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card key={post._id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    {post.mainImage && post.mainImage.asset && (
                      <img
                        src={urlFor(post.mainImage).url()} // Use Sanity's image URL builder
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    )}
                    {post.categories && post.categories.length > 0 && (
                      <Badge
                        variant="outline"
                        className="absolute top-4 left-4 bg-white/90 border-green-200 text-green-700"
                      >
                        {post.categories[0].title} {/* Display the first category */}
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author?.name || 'Unknown Author'}</span> {/* Safely access author name */}
                      </div>
                      {/* Removed Clock/readTime as it's not in Sanity schema currently */}
                      {/* <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div> */}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span> {/* Format date */}
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>         
        </div>
      </div>
    </Layout>
  );
};

export default Blog;