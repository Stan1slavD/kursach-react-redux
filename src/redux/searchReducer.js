const initialState={
    vacancies:[],
}


const FINDVACANSIES="FINDVACANSIES"

export const searchReducer =(state=initialState, action)=>{
    console.log('payload: ',action.payload)

    switch(action.type){


        case FINDVACANSIES:
            return{
                ...state, vacancies:[...action.payload.items]
            }
        default:
            return state
    }
}

export const addVacanciesAction=(payload)=>({type: FINDVACANSIES, payload})
