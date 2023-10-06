import { supabase } from '@/supabase'
import { type GuitarType } from '@/interfaces'

const getGuitars = async (limit?: number) => {
  try {
    if (limit !== undefined) {
      const { data: guitarras } = await supabase.from('guitarras').select('*').limit(limit)
      return guitarras
    }

    const { data: guitarras } = await supabase.from('guitarras').select('*')
    console.log(guitarras)
    return guitarras
  } catch (error) {
    console.log(error)
  }
}

const getGuitar = async (name: string): Promise<GuitarType | null> => {
  try {
    const { data } = await supabase.from('guitarras').select('*').eq('nombre', `${name}`)
    const guitarData = data?.[0]
    return guitarData as GuitarType
  } catch (error) {
    console.log(error)
    return null
  }
}

export {
  getGuitars, getGuitar
}
