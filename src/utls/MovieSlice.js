import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movies",
    initialState :{
        nowPlayingMovies:null,
        trailervideos:null,
        popularmovies:null,
        upcomingmovies:null,
        topratedmovies:null,
    },
    reducers:{
         addNowPlayingMovies  :(state,action) =>{
            state.nowPlayingMovies = action.payload;
         },
         addTrailer:(state,action) => {
            state.trailervideos = action.payload;
         },
         addPopularMovies:(state,action)=>{
              state.popularmovies = action.payload;
         },
         addUpcomingMovies:(state,action) =>{
            state.upcomingmovies = action.payload;
         },
         addTopratedMovies:(state,action) =>{
            state.topratedmovies = action.payload;
         },

    },

});
export const{addNowPlayingMovies,addTrailer,addPopularMovies,addTopratedMovies,addUpcomingMovies} = MovieSlice.actions;
export default MovieSlice.reducer;   