import { getGuitar } from '@/services'
import { GuitarShop } from '@/components'

export default async function Page({ params }: { params: { name: string } }) {
  const guitarFetch = getGuitar(params.name)
  const guitar = await guitarFetch
  return (
    <>
      {
        guitar != null && <GuitarShop guitar={guitar} />
      }
    </>
  )
}
