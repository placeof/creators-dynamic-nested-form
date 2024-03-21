"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Creator, schemaCreator } from "@/app/types"

export function Member({
  categoryIndex,
  creatorIndex,
  subCategoryIndex,
  defaultValues,
}: {
  categoryIndex: number
  creatorIndex: number
  subCategoryIndex: number
  defaultValues: Creator
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Creator>({
    resolver: zodResolver(schemaCreator),
    defaultValues: defaultValues,
  })
  function onSubmit(data: Creator) {
    console.log("Creator submitted: 🎉", data)
  }
  return (
    <div className="bg-green-200">
      <div className="mb-1">Creator</div>
      <div
        onSubmit={(...args) => {
          console.log("onSUbmit before preventDefault")
          args[0].preventDefault()
          handleSubmit(onSubmit)(...args)
        }}
      >
        <input
          placeholder="Enter note"
          className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
          {...register(`name`)}
        />
        <div className="text-red-600">{errors.name?.message}</div>
        <button
          className="px-4 py-2 bg-blue-600 rounded-lg text-white"
          type="submit"
        >
          submit
        </button>
      </div>
    </div>
  )
}
