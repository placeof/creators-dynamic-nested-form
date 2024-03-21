"use client"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"
import { useFieldArray } from "react-hook-form"
import { SubCreators } from "@/app/components/SubCreators"
import { SubCategoryCreators } from "@/app/components/SubCategoryCreators"
import { SubCategory } from "@/app/components/SubCategory"

export function SubCategories({ categoryIndex }: { categoryIndex: number }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContextCreators()

  const { append, remove, fields } = useFieldArray({
    name: `categories.${categoryIndex}.subCategories`,
    control,
  })
  return (
    <div className="">
      {fields.map((subCategory, subCategoryIndex) => {
        return (
          <div
            key={subCategory.id}
            className="px-6 bg-green-100 shadow-lg rounded-lg space-y-3"
          >
            <SubCategory
              categoryIndex={categoryIndex}
              subCategoryIndex={subCategoryIndex}
            />
            <div className="flex justify-between">
              <div className="text-lg font-semibold">Sub Category</div>{" "}
              <button
                type="button"
                onClick={() => {
                  remove(subCategoryIndex)
                }}
                className="text-red-400 text-xs underline underline-offset-4"
              >
                Remove sub category
              </button>
            </div>
          </div>
        )
      })}
      <button
        type="button"
        onClick={() => {
          append({
            name: "",
            creators: [],
          })
        }}
        className="text-gray-600 text-center w-full underline underline-offset-4 py-2"
      >
        add sub category
      </button>
    </div>
  )
}
