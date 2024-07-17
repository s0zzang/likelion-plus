import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "dark-mode",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useThemeStore;
