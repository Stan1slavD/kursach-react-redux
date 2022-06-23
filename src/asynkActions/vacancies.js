import { addVacanciesAction } from "../redux/searchReducer";

export const findVacancies = (regionID, cityID, text, page) => {
  return function (dispatch) {
    console.log("r> ", regionID);
    console.log("c> ", cityID);
    console.log("t> ", text);
    console.log("page> ", page);

    if ((regionID != 0) & (cityID == 0)) {
      console.log("first");
      fetch(
        `https://api.hh.ru/vacancies?area=${regionID}&specialization=1&text=${text}&page=${page}`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(addVacanciesAction(json));
        });
    } else if ((regionID != 0) & (cityID != 0)) {
      console.log("second");
      fetch(
        `https://api.hh.ru/vacancies?area=${cityID}&specialization=1&text=${text}&page=${page}`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(addVacanciesAction(json));
        });
    } else {
      console.log("third");
      fetch(
        `https://api.hh.ru/vacancies?specialization=1&text=${text}&page=${page}`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(addVacanciesAction(json));
        });
    }
  };
};
