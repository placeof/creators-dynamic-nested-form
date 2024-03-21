import { useWatch } from "react-hook-form"
import { Creators } from "@/app/components/Creators"
import { SubCategories } from "@/app/components/SubCategories"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"

export function Category({ categoryIndex }: { categoryIndex: number }) {
  const {
    register,
    control,
    formState: { errors },
    getValues,
  } = useFormContextCreators()

  const categoryName = useWatch({
    control,
    name: `categories.${categoryIndex}.name` as const,
  })
  return (
    <div className="my-2 px-6 bg-gray-300 shadow-sm rounded-lg">
      <div className="text-xl mb-2 font-bold">Category</div>

      <div className="mb-1">Name</div>
      <input
        placeholder="Enter course title"
        className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
        {...register(`categories.${categoryIndex}.name`)}
      />
      <div className="text-red-600 text-sm mt-1">
        {errors.categories?.[categoryIndex]?.name?.message}
      </div>
      {categoryName && <Creators categoryIndex={categoryIndex} />}
      <div className="text-red-600 text-sm mt-1">
        {errors.categories?.[categoryIndex]?.creators?.message}
      </div>
      {categoryName && <SubCategories categoryIndex={categoryIndex} />}
    </div>
  )
}
