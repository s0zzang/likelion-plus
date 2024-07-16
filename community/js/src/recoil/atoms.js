import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "user",
  storage: localStorage,
});

export const userState = atom({
  key: "userState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const themeState = atom({
  key: "themeState",
  default: window.matchMedia("(prefers-color-scheme: dark)").matches,
});
