import { defineCollection, z } from 'astro:content';

// Shared schema for all audio post collections
const audioPostSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  audioFile: z.string(), // Path to MP3 file in /public/audio/
  excerpt: z.string().optional(), // Optional excerpt, will fallback to truncated description
});

// Valid collection names for type-safe routing
export const VALID_COLLECTIONS = [
  'found-audio',
  'answering-machine-tapes',
  'field-recordings',
] as const;

export type CollectionName = (typeof VALID_COLLECTIONS)[number];

// Define collections using the shared schema
export const collections = {
  'found-audio': defineCollection({
    type: 'content',
    schema: audioPostSchema,
  }),
  'answering-machine-tapes': defineCollection({
    type: 'content',
    schema: audioPostSchema,
  }),
  'field-recordings': defineCollection({
    type: 'content',
    schema: audioPostSchema,
  }),
};
