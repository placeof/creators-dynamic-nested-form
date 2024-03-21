"use client"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Creator, CREATORTYPE, schemaCreator } from "@/app/types"
import { useFormContextCreators } from "@/app/components/CreatorFormProvider"
import { TeamMember } from "@/app/components/TeamMember"

export function TeamMembers({
  categoryIndex,
  subCategoryIndex,
  creatorIndex,
}: {
  categoryIndex: number
  subCategoryIndex: number
  creatorIndex: number
}) {
  const { control, getValues } = useFormContextCreators()
  const { append, remove, fields } = useFieldArray({
    name: `categories.${categoryIndex}.subCategories.${subCategoryIndex}.creators.${creatorIndex}.members`,
    control,
  })

  return (
    <div>
      <div>Member</div>
      {fields.map((member, memberIndex) => {
        return (
          <div
            key={member.id}
            className="py-1 bg-blue-100 rounded-lg shadow-xl"
          >
            <div>
              <div className="flex justify-between">
                <TeamMember
                  memberCreator={getValues(
                    `categories.${categoryIndex}.subCategories.${subCategoryIndex}.creators.${creatorIndex}.members.${memberIndex}`
                  )}
                />
                <button
                  type="button"
                  onClick={() => {
                    // Remove: notes index
                    remove(memberIndex)
                  }}
                  className="text-red-400 text-xs underline underline-offset-4"
                >
                  Remove member
                </button>
              </div>
            </div>
          </div>
        )
      })}

      <button
        type="button"
        onClick={() => {
          // Append: Notes content
          append({
            name: "",
            creatorType: CREATORTYPE.TEAM_MEMBER,
            creatorRole: "",
          })
        }}
        className="text-gray-600 text-center w-full underline underline-offset-4 py-2"
      >
        submit member
      </button>
    </div>
  )
}
