import { supabase } from '@/supabase'
import { GuitarType } from '@/interfaces'

const getGuitars = async ( limit?: number ) => {

  if(limit !== undefined){
    const { data: guitarras } = await supabase.from('guitarras').select('*').limit(limit)
    return guitarras
  }

  const { data: guitarras } = await supabase.from('guitarras').select('*')
  return guitarras
}


const getGuitar = async (name: string): Promise<GuitarType | null> => {
    const { data } = await supabase.from('guitarras').select('*').eq('nombre', `${name}`)
    const guitarData = data?.[0]
    return guitarData as GuitarType
}

export {
  getGuitars, getGuitar
}