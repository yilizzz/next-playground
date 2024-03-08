import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useColorStore = create(
    persist(
        (set, get) => ({
            color: "Teal",
            setColor: (newColor) => set({ color: newColor }),
        }),
        {
            name: 'color-storage',
        },
    ),
)