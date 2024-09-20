import { z, defineCollection, reference } from 'astro:content';

const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        results: reference('results').optional()
    }),
});

const resultsCollection = defineCollection({
    type: 'data'
});

export const collections = {
    'posts': postCollection,
    'results': resultsCollection
};