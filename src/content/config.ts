import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(1),
    image: z.string(),
    speaker: z.string(),
    date:z.string(),
    dateEnd:z.string().optional(),
    url:z.string().url(),
    blurb:z.string(),
  }),
});

export const collections = {
  showcase,
};
