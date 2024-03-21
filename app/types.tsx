import { z } from "zod"
export enum CREATORTYPE {
  SOLO_MEMBER,
  TEAM,
  TEAM_MEMBER,
  SUB_CREATOR = 3,
}

export interface MemberCreator {
  name: string
  creatorType: CREATORTYPE | undefined
  creatorRole: string
}
export interface Creator {
  name: string
  creatorType: CREATORTYPE | undefined
  creatorRole: string
  members?: MemberCreator[] | undefined
  subCreators?: SubCreator[] | undefined
}

export interface Category {
  name: string
  creators: Creator[]
  subCategories: SubCategory[]
}

export interface SubCreator {
  name: string
  creatorType: CREATORTYPE | undefined
  creatorRole: string
}

export interface SubCategory {
  name: string
  creators: Creator[]
}

export const schemaMemberCreator: z.ZodType<MemberCreator> = z.object({
  name: z.string().min(1),
  creatorType: z.nativeEnum(CREATORTYPE),
  creatorRole: z.string().min(1),
})
export const schemaCreator: z.ZodType<Creator> = z.lazy(() =>
  z.object({
    name: z.string().min(1),
    creatorType: z.nativeEnum(CREATORTYPE),
    creatorRole: z.string().min(1),
    members: z.array(schemaMemberCreator).optional(),
    subCreators: z.array(subCreatorSchema).optional(),
  })
)
const subCreatorSchema: z.ZodType<SubCreator> = z.object({
  name: z.string(),
  creatorType: z.nativeEnum(CREATORTYPE),
  creatorRole: z.string().min(1),
})

export const schemaCategory: z.ZodType<Category> = z.lazy(() =>
  z.object({
    name: z.string().min(1),
    creators: z
      .array(schemaCreator, { required_error: "Creators are required." })
      .min(1, { message: "Creator must contain at least one chapter." }),
    subCategories: z.array(subCategorySchema),
  })
)

const subCategorySchema: z.ZodType<SubCategory> = z.object({
  name: z.string(),
  creators: z.array(schemaCreator),
})

export const schemaCreators = z.object({
  categories: z.array(schemaCategory),
})

/**
 * Hooks
 */

export type FormCreator = z.infer<typeof schemaCreator>
export type FormCategory = z.infer<typeof schemaCategory>
export type FormCreators = z.infer<typeof schemaCreators>
