"use client"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"
import { useFieldArray } from "react-hook-form"
import { SubCreators } from "@/app/components/SubCreators"
import { Creator } from "@/app/components/Creator"

export function Creators({ categoryIndex }: { categoryIndex: number }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContextCreators()

  const { append, remove, fields } = useFieldArray({
    name: `categories.${categoryIndex}.creators`,
    control,
  })
  return (
    <div className="">
      {fields.map((creator, creatorIndex) => {
        return (
          <div key={creator.id}>
            <Creator
              categoryIndex={categoryIndex}
              creatorIndex={creatorIndex}
            />
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
          </div>
        )
      })}

      <button
        type="button"
        onClick={() => {
          append({
            name: "",
            creatorType: undefined,
            creatorRole: "",
            members: [],
            subCreators: [],
          })
        }}
        className="text-gray-600 text-center w-full underline underline-offset-4 py-2"
      >
        add creators
      </button>
    </div>
  )
}
