import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {bedService} from "../services/bed.service";

export const getAllBeds = createAsyncThunk(
    "carSlice/getAllCars",
    async (_, {rejectWithValue}) => {
        try {
            return await bedService.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    });

const bedSlice = createSlice({
    name: "bedSlice",
    initialState: {
        beds: [],
        carForUpdate: {Name: '', model: '', price: '', year: ''},
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
        },
        removeCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
        updateCarState: (state, action) => {
            state.cars = state.cars.map(car => (car.id === action.payload.id ? action.payload : car));
        }
    },
    extraReducers: builder => { 
        builder.addCase(getAllBeds.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(getAllBeds.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.beds = action.payload;
        });
        builder.addCase(getAllBeds.rejected, (state, action) => {
            state.status = "error";
            state.error = action.payload;
        });
    }
});

const bedReducer = bedSlice.reducer;
export const {addCar, removeCar, setCarForUpdate, updateCarState} = bedSlice.actions;
export default bedReducer;