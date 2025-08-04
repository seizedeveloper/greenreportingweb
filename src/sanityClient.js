// src/sanityClient.js (or adjust path)
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2024-07-23', // Use a stable date, e.g., today's date
  useCdn: true, // Set to `false` for fresh data in development, `true` for production caching
});

// Helper function for Sanity image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}