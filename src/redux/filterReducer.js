const initialState = {
  value: 0,
  regions: [],
  cities: [],
  regionID:0,
  cityID:0

};

const ADD = "ADD";
const GETREGIONS = "GETREGIONS";
const GETCITIES = "GETCITIES";
const ADDCITYID ="ADDCITYID";
const ADDREGIONID="ADDREGIONID"

export const filterReducer = (state = initialState, action) => {
  console.log('payload: ',action.payload)
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: state.value + 1,
      };
    case GETREGIONS:
      return {
        ...state,
        regions: [...state.regions, ...action.payload],
      };

    case GETCITIES:
      return {
        ...state,
        cities: [state.cities, ...action.payload],
      };
    
    case ADDREGIONID:
      return{
        ...state,
        regionID:action.payload
      }
    case ADDCITYID:
      return{
        ...state,
        cityID:action.payload
      }
    default:
      return state;
  }
};

export const addValueAction = (payload) => ({ type: ADD, payload });
export const getRegionsAction = (payload) => ({ type: GETREGIONS, payload });
export const getCitiesAction = (payload) => ({ type: GETCITIES, payload });
export const addCityID=(payload)=>({type:ADDCITYID, payload});
export const addRegionID=(payload)=>({type:ADDREGIONID,payload});