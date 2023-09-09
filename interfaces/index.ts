export interface GuitarType {
  created_at: string
  descripcion: string
  id: number
  image: string
  nombre: string
  precio: number
  url: string
}

export interface GuitarShop extends GuitarType {
  quantity: number
}

export interface BlogType {
  id: number
  created_at: string
  titulo: string
  descripcion: string
  image: string
  url: string
}

export type LinksNavs = {
  id: number
  path: string
  title: string
  icon?: JSX.Element
  count?: string
}
