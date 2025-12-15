import { cities } from '@/data/cities';

export default function sitemap() {
  const baseUrl = 'https://emergencyelectricrepair.com'; // Replace with your actual domain eventually

  // 1. Define the static pages (Home, etc.)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // 2. Generate URLs for all 50 cities automatically
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. Combine them
  return [...staticPages, ...cityPages];
}
