import { create } from "zustand";
import { persist } from "zustand/middleware"
const userStore = create(
  persist(
    (set) => ({
      email: "",
      setEmail: (email) => set({ email }),
      password: "",
      setPassword: (password) => set({ password }),
      name: "",
      setName: (name) => set({ name }),
      type: "user",
      setType: (type) => set({ type }),
      image: null,
      accessToken: null,
      refreshToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setImage: (image) => set({ image }),
      setField: (field, value) =>
        set((state) => ({ ...state, [field]: value })),
    }),
    {
      name: "user-storage",
      getStorage: () => sessionStorage,
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        name: state.name,
      }),
    }
  )
);


export default userStore