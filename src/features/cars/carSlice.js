import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: [],
    newCars: []
};

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        addCars: (state, action) => {
            state.newCars.push(action.payload);
        }
    }
});

export const { setCars, addCars } = carSlice.actions;

export const selectCars = state => state.car.cars;
export const selectNewCars = state => state.car.newCars;


export const applyFilter = (filters) => (dispatch, getState) => {
    const { merek, model, year: selectedYear } = filters;

    const selectedMerek = merek.filter(e => e.select);
    const selectedModel = model.filter(e => e.select);

    
    const currentCars = selectCars(getState())
    
    const newCars = selectNewCars(getState())
    const currentYear = new Date().getFullYear();
    
    let filteredCars = currentCars.concat(newCars);
    
    if (selectedMerek.length !== 0) {
        filteredCars = filteredCars.filter(x => {
            return selectedMerek.some(f => {
                return x.brand === f.brand
            })
        })
    }

    

    if (selectedModel.length !== 0) {
        filteredCars = filteredCars.filter(x => {
            return selectedModel.some(f => {
                return f.groupModel === x.groupModel
            })
        })

    }   

    if (selectedYear !== 0) {
        filteredCars = filteredCars.filter(item => {
            if (selectedYear === 5) return item.year <= currentYear && item.year > currentYear - selectedYear;
            if (selectedYear === 10) return item.year <= currentYear - 5 && item.year > currentYear - selectedYear;
            return item.year < currentYear - (selectedYear - 10);
        })
    }

    

    dispatch(setCars(filteredCars))
}




export default carSlice.reducer;