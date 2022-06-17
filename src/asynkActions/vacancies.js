import { addVacanciesAction } from "../redux/searchReducer";

export const findVacancies = (regionID, cityID, text ) => {
  return function (dispatch) {
    if (text==''){
      return fetch(`https://api.hh.ru/vacancies?specialization=1`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addVacanciesAction(json));
      });
    }
    console.log("r> ", regionID);
    console.log("c> ", cityID);
    console.log("t> ", text);
    //https://api.hh.ru/vacancies?area=1806&specialization=1

    if (cityID != 0) {
      fetch(
        `https://api.hh.ru/vacancies?area=${cityID}&specialization=1&text=${text}`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(addVacanciesAction(json));
        });
    } else if (cityID == 0 && regionID != 0) {
      fetch(
        `https://api.hh.ru/vacancies?area=${regionID}&specialization=1&text=${text}`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(addVacanciesAction(json));
        });
    } else if (cityID == 0 && regionID == 0) {
      fetch(`https://api.hh.ru/vacancies?specialization=1&text=${text}`)
        .then((res) => res.json())
        .then((json) => {
          dispatch(addVacanciesAction(json));
        });
    }
    else{
     
    }
  }
};
