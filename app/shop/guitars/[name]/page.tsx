/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getGuitar } from '@/services'
import { GuitarShop } from '@/components'

export default async function Page({ params }: { params: { name: string } }) {
  const guitar = await getGuitar(params.name)
  return (
    <GuitarShop guitar={guitar!} />
  )
}
