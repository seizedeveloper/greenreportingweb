import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, BookOpen } from "lucide-react";
import {
  PortableText,
  PortableTextComponents, // Import this type
  PortableTextMarkComponentProps, // Import this type for marks (like 'link')
  PortableTextTypeComponentProps // Import this type for custom types (like 'image')
} from "@portabletext/react";

// Import your Sanity client and URL builder
import { client, urlFor } from '../sanityClient'; // ADJUST THIS PATH if your sanityClient.js is elsewhere

// Define how your Portable Text blocks should be rendered
// This ensures that headings, lists, and internal images are styled correctly within the article content.
// Apply the PortableTextComponents type here
const portableTextComponents: PortableTextComponents = {
  types: {
    // Custom rendering for images within the Portable Text body
    // Correctly type the 'value' prop for custom image type
    image: ({ value }: PortableTextTypeComponentProps<any>) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(800).url()} // Adjust width as needed
          className="my-8 rounded-lg shadow-md"
        />
      )
    },
    // Add other custom types if you have them (e.g., 'code' block if you use @sanity/code-input)
  },
  block: {
    h1: ({children}) => <h2 className="text-3xl font-bold mb-4">{children}</h2>, // Adjust to h2 for subheadings within article
    h2: ({children}) => <h3 className="text-2xl font-bold mb-3">{children}</h3>,
    h3: ({children}) => <h4 className="text-xl font-bold mb-2">{children}</h4>,
    h4: ({children}) => <h5 className="text-lg font-bold mb-1">{children}</h5>,
    blockquote: ({children}) => <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 my-4">{children}</blockquote>,
    normal: ({children}) => <p className="mb-4">{children}</p>, // Default paragraph
  },
  list: {
    bullet: ({children}) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({children}) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li>{children}</li>,
    number: ({children}) => <li>{children}</li>,
  },
  marks: {
    // Explicitly type `value` for the 'link' mark
    link: ({ value, children }: PortableTextMarkComponentProps) => {
      // It's good practice to ensure value exists, although for 'link' it almost always will.
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : undefined} className="text-green-600 hover:underline">
          {children}
        </a>
      )
    },
    strong: ({children}) => <strong className="font-semibold">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
    code: ({children}) => <code className="bg-gray-100 text-purple-700 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) { // Ensure slug exists before trying to fetch
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        // GROQ query to fetch a single post by its slug
        // It fetches all necessary fields including the 'body' (Portable Text)
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          excerpt,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          publishedAt,
          body, // This is your rich text content from Sanity
          author->{name}, // Fetch author's name
          categories[]->{title} // Fetch titles of categories
        }`;

        // Fetch the post, passing the slug as a parameter
        const fetchedPost = await client.fetch(query, { slug });
        setPost(fetchedPost);
      } catch (err) {
        console.error("Error fetching single blog post from Sanity:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]); // Re-run effect if the slug changes

  // --- Conditional Rendering for Loading/Error/Not Found States ---
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <p className="text-xl text-gray-700">Loading article...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <p className="text-xl text-red-600">Error loading article: {error.message}.</p>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
          <p className="text-xl text-gray-700 mb-4">Article not found.</p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog List</span>
          </Link>
        </div>
      </Layout>
    );
  }

  // Related Posts (still hardcoded for now, for dynamic related posts,
  // another Sanity query would be needed, e.g., by matching categories)
  const relatedPosts = [
    {
      title: "ESG Reporting Best Practices for Small and Medium Businesses",
      slug: "esg-reporting-best-practices",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Complete Guide to Renewable Energy Transition for Businesses",
      slug: "renewable-energy-transition-guide",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];


  // Helper for estimated read time calculation (simple word count)
  // This is a basic estimation and might not match professional 'read time' calculations.
  // If you need more accuracy, consider storing readTime in Sanity or using a more robust library.
  const calculateReadTime = (blocks) => {
    if (!blocks) return 'N/A';
    let totalWords = 0;
    blocks.forEach(block => {
      if (block._type === 'block' && block.children) {
        block.children.forEach(span => {
          if (span._type === 'span' && typeof span.text === 'string') {
            totalWords += span.text.split(/\s+/).filter(Boolean).length;
          }
        });
      }
    });
    const wordsPerMinute = 200; // Average reading speed
    const minutes = Math.ceil(totalWords / wordsPerMinute);
    return `${minutes} min read`;
  };

  const estimatedReadTime = calculateReadTime(post.body);


  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Back to Blog Link */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              {post.categories && post.categories.length > 0 && (
                <Badge variant="outline" className="border-green-200 text-green-700 mb-4">
                  {post.categories[0].title} {/* Display the first category */}
                </Badge>
              )}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author?.name || 'Unknown Author'}</span> {/* Safely access author name */}
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span> {/* Format date */}
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{estimatedReadTime}</span> {/* Use calculated read time */}
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            {post.mainImage && post.mainImage.asset && (
              <img
                src={urlFor(post.mainImage).url()} // Use Sanity's image URL builder
                alt={post.mainImage.alt || post.title}
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* Use PortableText to render the rich text 'body' from Sanity */}
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Share this article:</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                  <Button variant="outline" size="sm">Facebook</Button>
                </div>
              </div>
              <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                <BookOpen className="h-4 w-4 mr-2" />
                Save for Later
              </Button>
            </div>
          </footer>
        </article>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Sustainability Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get expert guidance and tools to measure, manage, and reduce your carbon footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 font-medium py-3 px-8 rounded-lg">
                Learn More About Our Platform
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPost;