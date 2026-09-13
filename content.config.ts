import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createButtonSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  trailingIcon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        hero: z.object({
          eyebrow: z.string().optional(),
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema())
        }),
        about: z.object({
          title: z.string(),
          description: z.string(),
          stats: z.array(z.object({
            value: z.string(),
            label: z.string()
          })).optional()
        }),
        experience: z.object({
          title: z.string(),
          description: z.string(),
          items: z.array(z.object({
            date: z.string(),
            position: z.string(),
            company: z.object({
              name: z.string(),
              url: z.string().optional(),
              logo: z.string().editor({ input: 'icon' }),
              color: z.string()
            }),
            summary: z.string().optional(),
            highlights: z.array(z.string()).optional()
          }))
        }),
        education: z.object({
          title: z.string(),
          description: z.string(),
          items: z.array(z.object({
            date: z.string(),
            degree: z.string(),
            school: z.string()
          }))
        }),
        skills: z.object({
          title: z.string(),
          description: z.string(),
          groups: z.array(z.object({
            title: z.string(),
            icon: z.string().editor({ input: 'icon' }),
            items: z.array(z.string())
          }))
        }),
        work: z.object({
          title: z.string(),
          description: z.string()
        }),
        contact: z.object({
          title: z.string(),
          description: z.string(),
          email: z.string()
        })
      })
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        image: z.string().nonempty().editor({ input: 'media' }),
        url: z.string().optional(),
        repo: z.string().optional(),
        role: z.string().nonempty(),
        status: z.string().optional(),
        featured: z.boolean().optional(),
        tags: z.array(z.string()),
        date: z.string()
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: [
        { include: 'projects.yml' }
      ],
      schema: z.object({
        links: z.array(createButtonSchema())
      })
    })
  }
})
