const initialState={
    vacancies:[],
    text:""
}


const FINDVACANSIES="FINDVACANSIES"
const ADDTEXT="ADDTEXT"

export const searchReducer =(state=initialState, action)=>{
    console.log('payload: ',action.payload)

    switch(action.type){

        case ADDTEXT:
            return{
                ...state, text:action.payload
            }

        case FINDVACANSIES:
            return{
                ...state, vacancies:[...action.payload.items]
            }
        default:
            return state
    }
}

export const addTextAction=(payload)=>({type:ADDTEXT, payload})
export const addVacanciesAction=(payload)=>({type: FINDVACANSIES, payload})
