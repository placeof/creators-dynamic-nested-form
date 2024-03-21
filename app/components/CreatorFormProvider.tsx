"use client"
import { ReactNode } from "react"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormCreators, schemaCreators } from "@/app/types"

export const useFormCreateCreators = (defaultValue: FormCreators) =>
  useForm<FormCreators>({
    resolver: zodResolver(schemaCreators),
    defaultValues: defaultValue,
  })
export const useFormContextCreators = () => useFormContext<FormCreators>()

export const CreatorFormProvider = ({
  children,
  defaultValues,
}: {
  children: ReactNode
  defaultValues: FormCreators
}) => {
  const methods = useFormCreateCreators(defaultValues)
  return <FormProvider {...methods}>{children}</FormProvider>
}
