import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const getWeatherUpdateAction = createAsyncThunk(
    'get/weather',
   async (payload, {rejectWithValue}) => {
       try {
           const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_API_KEY}`);
           return data;
           
       } catch (error) {

        if(!error?.response){
            throw error
        }
        return rejectWithValue(error?.response?.data)
   
       }

   }
);

export default getWeatherUpdateAction;
