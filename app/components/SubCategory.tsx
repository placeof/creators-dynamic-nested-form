import { useWatch } from "react-hook-form"
import { Creators } from "@/app/components/Creators"
import { SubCategories } from "@/app/components/SubCategories"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"
import { SubCategoryCreators } from "@/app/components/SubCategoryCreators"

export function SubCategory({
  categoryIndex,
  subCategoryIndex,
}: {
  categoryIndex: number
  subCategoryIndex: number
}) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContextCreators()

  const subCategoryName = useWatch({
    control,
    name: `categories.${categoryIndex}.subCategories.${subCategoryIndex}.name` as const,
  })
  return (
    <div>
      <div className="mb-1">Name</div>
      <input
        className="border-2 border-gray-600  rounded-lg px-2 bg-transparent"
        placeholder="Enter sub category name..."
        {...register(
          `categories.${categoryIndex}.subCategories.${subCategoryIndex}.name`
        )}
      />
      <div className="text-red-600">
        {
          errors.categories?.[categoryIndex]?.subCategories?.[subCategoryIndex]
            ?.name?.message
        }
      </div>
      {subCategoryName && (
        <SubCategoryCreators
          categoryIndex={categoryIndex}
          subCategoryIndex={subCategoryIndex}
        />
      )}
      <div className="text-red-600 text-sm mt-1">
        {
          errors.categories?.[categoryIndex]?.subCategories?.[subCategoryIndex]
            ?.creators?.message
        }
      </div>
    </div>
  )
}
