import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(1),
    image: z.string(),
    speaker: z.string(),
    date:z.string(),
    url:z.string().url(),
    blurb:z.string(),
    featured: z.number().min(1).optional(),
  }),
});

export const collections = {
  showcase,
};
