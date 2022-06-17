import { getRegionsAction } from "../redux/filterReducer";

export const fetchRegions = () => {
  return function (dispatch) {
    fetch("https://api.hh.ru/areas")
      .then((res) => res.json())
      .then((data) => dispatch(getRegionsAction(Object.values(data)[0].areas)));
  };
};
