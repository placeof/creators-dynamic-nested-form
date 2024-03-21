"use client"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"
import { useFieldArray } from "react-hook-form"
import { CREATORTYPE } from "@/app/types"

export function SubCategorySubCreators({
  categoryIndex,
  subCategoryIndex,
  creatorIndex,
}: {
  categoryIndex: number
  subCategoryIndex: number
  creatorIndex: number
}) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContextCreators()

  const { append, remove, fields } = useFieldArray({
    name: `categories.${categoryIndex}.subCategories.${subCategoryIndex}.creators.${creatorIndex}.subCreators`,
    control,
  })
  return (
    <div className="mt-1">
      {fields.map((subCreator, subCreatorIndex) => {
        return (
          <div
            className="px-6 bg-gray-400 shadow-lg rounded-lg mt-2"
            key={subCreator.id}
          >
            <div className="flex justify-between">
              <div className="text-lg mb-2 font-semibold">Sub Creators</div>{" "}
              <button
                type="button"
                onClick={() => {
                  remove(subCreatorIndex)
                }}
                className="text-red-400 text-xs underline underline-offset-4"
              >
                Remove sub creator
              </button>
            </div>

            <div className="mb-1">name</div>
            <input
              className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
              placeholder="Enter subcreator name..."
              {...register(
                `categories.${categoryIndex}.subCategories.${subCategoryIndex}.creators.${creatorIndex}.subCreators.${subCreatorIndex}.name`
              )}
            />
            <div className="text-red-600">
              {
                errors.categories?.[categoryIndex]?.subCategories?.[
                  subCategoryIndex
                ]?.creators?.[subCreatorIndex]?.subCreators?.[subCreatorIndex]
                  ?.name?.message
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
            creatorType: CREATORTYPE.SUB_CREATOR,
            creatorRole: "",
          })
        }}
        className="text-gray-600 text-center w-full underline underline-offset-4 py-2"
      >
        add sub creator
      </button>
    </div>
  )
}
