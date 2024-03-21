"use client"
import { useFieldArray, useWatch } from "react-hook-form"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"
import { Creators } from "@/app/components/Creators"
import { SubCategories } from "@/app/components/SubCategories"
import { Category } from "@/app/components/Category"

export function Categories() {
  const {
    control,
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useFormContextCreators()
  const formData = watch()
  const { append, remove, fields } = useFieldArray({
    name: "categories",
    control,
  })
  return (
    <div>
      {fields.map((category, index) => {
        return <Category key={category.id} categoryIndex={index} />
      })}
      <button
        type="button"
        onClick={() => {
          append({ name: "", creators: [], subCategories: [] })
        }}
        className="text-gray-600 text-center w-full underline underline-offset-4 py-2"
      >
        add category
      </button>
    </div>
  )
}
