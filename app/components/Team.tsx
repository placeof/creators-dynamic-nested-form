"use client"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Creator, CREATORTYPE, schemaCreator } from "@/app/types"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"
import { TeamMembers } from "@/app/components/TeamMembers"

export function Team({
  categoryIndex,
  subCategoryIndex,
  creatorIndex,
  defaultValues,
}: {
  categoryIndex: number
  subCategoryIndex: number
  creatorIndex: number
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
    console.log("Team submitted:", data)
  }
  return (
    <div className="bg-blue-300">
      <div className="mb-1">Team</div>
      <div
        onSubmit={(...args) => {
          console.log("onSUbmit before preventDefault")
          args[0].preventDefault()
          handleSubmit(onSubmit)(...args)
        }}
      >
        <input
          placeholder="Enter team"
          className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
          {...register(`name`)}
        />
        <div className="text-red-600">{errors.name?.message}</div>
      </div>
      <TeamMembers
        categoryIndex={categoryIndex}
        subCategoryIndex={subCategoryIndex}
        creatorIndex={creatorIndex}
      />
    </div>
  )
}
