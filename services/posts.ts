import { supabase } from '@/supabase'

interface BlogType {
  id: number
  created_at: string
  titulo: string
  descripcion: string
  image: string
  url: string
}

export const getPosts = async () => {
  const { data: posts } = await supabase.from('posts').select('*')
  return posts
}

export const getPost = async (postName: string): Promise<BlogType | null> => {
  const {data } = await supabase.from('posts').select('*').eq('url', postName)
  const postData = data?.[0]
  return postData as BlogType
}