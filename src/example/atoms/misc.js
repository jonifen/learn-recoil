import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export const textSelector = selector({
  key: "textSelector",
  get: ({ get }) => {
    const value = get(textState);

    return {
      value,
      length: value.length,
    };
  },
});
