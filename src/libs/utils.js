import { mbtiTypes } from "constants/type";

export const filterTypes = (types) => {
  return types.map((type) => {
    const keys = Object.keys(type);
    return type[keys[0]] > type[keys[1]] ? keys[0] : keys[1];
  });
};

export const getMbtiResult = (result) => {
  return mbtiTypes.find(
    (type) => type.split("").sort().join("") === result.sort().join(""),
  );
};

export default null;
