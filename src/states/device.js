import { atom } from "recoil";

const deviceState = atom({
  key: "deviceState",
  default: "web",
});

export default deviceState;
