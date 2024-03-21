import { SubCreators } from "@/app/components/SubCreators"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"
import { useWatch } from "react-hook-form"

export function Creator({
  categoryIndex,
  creatorIndex,
}: {
  categoryIndex: number
  creatorIndex: number
}) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContextCreators()

  const creatorName = useWatch({
    control,
    name: `categories.${categoryIndex}.creators.${creatorIndex}` as const,
  })

  return (
    <div className="px-6 bg-gray-200 shadow-lg rounded-lg space-y-1">
      <div className="flex justify-between">
        <div className="mb-1">name</div>
        <input
          className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
          placeholder="Enter creator name..."
          {...register(
            `categories.${categoryIndex}.creators.${creatorIndex}.name`
          )}
        />
        <div className="text-red-600">
          {
            errors.categories?.[categoryIndex]?.creators?.[creatorIndex]?.name
              ?.message
          }
        </div>
        {creatorName && (
          <SubCreators
            categoryIndex={categoryIndex}
            creatorIndex={creatorIndex}
          />
        )}
        <div className="text-red-600 text-sm mt-1">
          {
            errors.categories?.[categoryIndex]?.creators?.[creatorIndex]
              ?.subCreators?.message
          }
        </div>
      </div>
    </div>
  )
}
