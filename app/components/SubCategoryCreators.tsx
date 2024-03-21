"use client"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"
import { useFieldArray } from "react-hook-form"
import { SubCreators } from "@/app/components/SubCreators"
import { CREATORTYPE } from "@/app/types"
import { Member } from "@/app/components/Member"
import { Team } from "@/app/components/Team"
import { SubCategorySubCreators } from "@/app/components/SubCategorySubCreators"

export function SubCategoryCreators({
  categoryIndex,
  subCategoryIndex,
}: {
  categoryIndex: number
  subCategoryIndex: number
}) {
  const {
    control,
    formState: { errors },
    getValues,
  } = useFormContextCreators()

  const { append, remove, fields } = useFieldArray({
    name: `categories.${categoryIndex}.subCategories.${subCategoryIndex}.creators`,
    control,
  })
  return (
    <div className="">
      {fields.map((creator, creatorIndex) => {
        return (
          <div
            className="my-1 px-6 bg-green-50 shadow-lg rounded-lg"
            key={creator.id}
          >
            <div className="flex justify-between">
              <div className="text-lg font-semibold">Creators</div>{" "}
              <button
                type="button"
                onClick={() => {
                  remove(creatorIndex)
                }}
                className="text-red-400 text-xs underline underline-offset-4"
              >
                Remove creator
              </button>
            </div>
            <div>
              {getValues(
                `categories.${categoryIndex}.subCategories.${subCategoryIndex}.creators.${creatorIndex}.creatorType`
              ) === CREATORTYPE.TEAM ? (
                <Team
                  categoryIndex={categoryIndex}
                  subCategoryIndex={subCategoryIndex}
                  creatorIndex={creatorIndex}
                  defaultValues={getValues(
                    `categories.${categoryIndex}.subCategories.${subCategoryIndex}.creators.${creatorIndex}`
                  )}
                />
              ) : (
                <Member
                  categoryIndex={categoryIndex}
                  subCategoryIndex={subCategoryIndex}
                  creatorIndex={creatorIndex}
                  defaultValues={getValues(
                    `categories.${categoryIndex}.subCategories.${subCategoryIndex}.creators.${creatorIndex}`
                  )}
                />
              )}
            </div>
            <SubCategorySubCreators
              categoryIndex={categoryIndex}
              subCategoryIndex={subCategoryIndex}
              creatorIndex={creatorIndex}
            />
            <div className="text-red-600 text-sm mt-1">
              {
                errors.categories?.[categoryIndex]?.creators?.[creatorIndex]
                  ?.subCreators?.message
              }
            </div>
          </div>
        )
      })}

      <button
        type="button"
        onClick={() => {
          append({
            name: "",
            creatorType: CREATORTYPE.TEAM,
            creatorRole: "",
            members: [],
            subCreators: [],
          })
        }}
        className="text-gray-600 text-center w-full underline underline-offset-4 py-1"
      >
        add team
      </button>
      <button
        type="button"
        onClick={() => {
          append({
            name: "",
            creatorType: CREATORTYPE.SOLO_MEMBER,
            creatorRole: "",
            members: [],
            subCreators: [],
          })
        }}
        className="text-gray-600 text-center w-full underline underline-offset-4 py-1"
      >
        add creator
      </button>
    </div>
  )
}
