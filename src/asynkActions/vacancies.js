import { addVacanciesAction } from "../redux/searchReducer";

export const findVacancies = (regionID, cityID, text, page) => {
  return function (dispatch) {
    // if (text==''){
    //   return fetch(`https://api.hh.ru/vacancies?specialization=1`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     dispatch(addVacanciesAction(json));
    //   });
    // }
    console.log("r> ", regionID);
    console.log("c> ", cityID);
    console.log("t> ", text);
    console.log("page> ", page);

    //https://api.hh.ru/vacancies?area=1806&specialization=1

    if ((regionID != 0) & (cityID == 0)) {
      console.log("first");
      fetch(
        `https://api.hh.ru/vacancies?area=${regionID}&specialization=1&text=${text}&page=${page}`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(addVacanciesAction(json));
        }); //.then(()=>{ window.scrollTo(0, 0);});
    } else if ((regionID != 0) & (cityID != 0)) {
      console.log("second");
      fetch(
        `https://api.hh.ru/vacancies?area=${cityID}&specialization=1&text=${text}&page=${page}`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(addVacanciesAction(json));
        }); //.then(()=>{ window.scrollTo(0, 0);})
    } else {
      console.log("third");
      fetch(
        `https://api.hh.ru/vacancies?specialization=1&text=${text}&page=${page}`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(addVacanciesAction(json));
        }); //.then(()=>{ window.scrollTo(0, 0);})
    }

    // if (cityID != 0) {
    //   fetch(
    //     `https://api.hh.ru/vacancies?area=${cityID}&specialization=1&text=${text}&page=${page}`
    //   )
    //     .then((res) => res.json())
    //     .then((json) => {
    //       dispatch(addVacanciesAction(json));
    //     });
    // } else if (cityID == 0 && regionID != 0) {
    //   fetch(
    //     `https://api.hh.ru/vacancies?area=${regionID}&specialization=1&text=${text}page=${page}`
    //   )
    //     .then((res) => res.json())
    //     .then((json) => {
    //       dispatch(addVacanciesAction(json));
    //     });
    // } else if (cityID == 0 && regionID == 0) {
    //   fetch(`https://api.hh.ru/vacancies?specialization=1&text=${text}page=${page}`)
    //     .then((res) => res.json())
    //     .then((json) => {
    //       dispatch(addVacanciesAction(json));
    //     });
    // }
  };
};
