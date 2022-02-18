import { createSlice,  } from '@reduxjs/toolkit';
import getWeatherUpdateAction from '../actions/weatherAction';


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(getWeatherUpdateAction.pending,(state, action) => {
            state.loading = true;
        });

        builder.addCase(getWeatherUpdateAction.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.weather = undefined;
        });

        builder.addCase(getWeatherUpdateAction.fulfilled, (state, action)=> {
            state.loading = false;
            state.error = undefined;
            state.weather = action.payload;
        });
    }

});


export default weatherSlice.reducer;
