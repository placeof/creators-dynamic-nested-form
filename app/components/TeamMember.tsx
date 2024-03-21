"use client"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Creator,
  CREATORTYPE,
  MemberCreator,
  schemaCreator,
  schemaMemberCreator,
} from "@/app/types"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"

export function TeamMember({
  memberCreator,
}: {
  memberCreator: MemberCreator
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemberCreator>({
    resolver: zodResolver(schemaMemberCreator),
    defaultValues: memberCreator,
  })
  function onSubmit(data: any) {
    console.log("Member submitted: 🎉", data)
  }
  return (
    <div>
      <div
        onSubmit={(...args) => {
          console.log("onSUbmit before preventDefault")
          args[0].preventDefault()
          handleSubmit(onSubmit)(...args)
        }}
      >
        <input
          placeholder="Enter member"
          className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
          {...register(`name`)}
        />
        <div className="text-red-600">{errors.name?.message}</div>
        <input
          placeholder="Enter member role"
          className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
          {...register(`creatorRole`)}
        />
        <div className="text-red-600">{errors.creatorRole?.message}</div>

        <button
          className="px-4 py-2 bg-blue-600 rounded-lg text-white"
          type="submit"
        >
          Add Member
        </button>
      </div>
    </div>
  )
}
