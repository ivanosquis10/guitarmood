'use client'

import { create } from 'zustand'

type MenuMobileStore = {
  menuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

export const useMenuMobileStore = create<MenuMobileStore>((set) => ({
  menuOpen: false,
  toggleMenu: () => { set((state) => ({ menuOpen: !state.menuOpen })) },
  closeMenu: () => {
    setTimeout(() => {
      set(() => ({ menuOpen: false }))
    }, 1000)
  }
}))
