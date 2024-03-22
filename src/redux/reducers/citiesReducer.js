import { createReducer } from "@reduxjs/toolkit";
import { filterByName, loadCities } from "../actions/citiesActions";


const initialState = {
    citiesAll : [],
    citiesFiltered : [],
    search : ""
}

const citiesReducer = createReducer( initialState, (builder) => {
    builder.addCase( loadCities, ( state, action ) => {
        return {
            ...state,
            citiesAll: action.payload.data,
            citiesFiltered: action.payload.data
        }
    } ).addCase(filterByName, (state, action) => {
        const aux = state.citiesAll.filter((city) => 
            city.name.toLowerCase().startsWith(action.payload.toLowerCase().trim())
        );
        // console.log("Cities All before filter:", state.citiesAll);
        // console.log("Cities Filtered after filterByName:", aux);
        return {
            ...state,
            citiesFiltered: aux,
            search: action.payload
        }
    })
})

export default citiesReducer;
