import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movies",
    initialState :{
        nowPlayingMovies:null,
        trailervideos:null,
    },
    reducers:{
         addNowPlayingMovies  :(state,action) =>{
            state.nowPlayingMovies = action.payload;
         },
         addTrailer:(state,action) => {
            state.trailervideos = action.payload;
         }
    },

});
export const{addNowPlayingMovies,addTrailer} = MovieSlice.actions;
export default MovieSlice.reducer;   