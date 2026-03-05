import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
        }),
});

const projects = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            url: z.string().optional(),
            tags: z.array(z.string()).optional(),
        }),
});

const experience = defineCollection({
    loader: glob({ base: "./src/content/experience", pattern: "**/*.{md,mdx}" }),
    schema: () =>
        z.object({
            period: z.string(),
            role: z.string(),
            company: z.string(),
            location: z.string(),
            current: z.boolean().default(false),
            description: z.string(),
            tags: z.array(z.string()).optional(),
            order: z.number().optional(), // Para controlar el orden si no es por fecha
        }),
});

export const collections = { blog, projects, experience };
