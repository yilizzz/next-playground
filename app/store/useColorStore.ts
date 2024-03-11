import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ColorState {
    color: string
    setColor: (newColor: string) => void
}
export const useColorStore = create<ColorState>()(

    persist(
        (set) => ({
            color: "",
            setColor: (newColor) => set(() => ({ color: newColor })),
        }),
        { name: 'color-storage' },
    ),

)