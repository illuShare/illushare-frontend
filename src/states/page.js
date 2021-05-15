import { atom } from "recoil";

const pageState = atom({
  key: "pageState",
  default: "home",
});

export default pageState;
