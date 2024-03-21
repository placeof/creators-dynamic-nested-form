import { CreatorFormProvider } from "@/app/components/CreatorFormProvider"
import { Categories } from "@/app/components/Categories"
import { data } from "@/app/data"

export default function Home() {
  const defaultValues = data
  return (
    <CreatorFormProvider defaultValues={defaultValues}>
      <Categories />
    </CreatorFormProvider>
  )
}
