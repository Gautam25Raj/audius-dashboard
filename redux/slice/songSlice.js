import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",

  initialState: {
    currentSong: null,
    isPlaying: false,
    progress: 0,
    playlist: [],
    currentIndex: -1,
    loading: false,
  },

  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
      state.progress = 0;
      state.loading = false;
    },

    clearCurrentSong: (state) => {
      state.currentSong = null;
      state.isPlaying = false;
      state.progress = 0;
    },

    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    setProgress: (state, action) => {
      state.progress = action.payload;
    },

    setPlaylist: (state, action) => {
      state.playlist = action.payload;
      state.currentIndex = 0;
      state.currentSong = state.playlist[0] || null;
    },

    nextSong: (state) => {
      if (state.currentIndex < state.playlist.length - 1) {
        state.currentIndex += 1;
        state.currentSong = state.playlist[state.currentIndex];
        state.isPlaying = true;
        state.progress = 0;
      }
    },

    previousSong: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        state.currentSong = state.playlist[state.currentIndex];
        state.isPlaying = true;
        state.progress = 0;
      }
    },

    setLoading: (state) => {
      state.loading = true;
    },

    clearLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  setCurrentSong,
  clearCurrentSong,
  togglePlayPause,
  setProgress,
  setPlaylist,
  nextSong,
  previousSong,
  setLoading,
  clearLoading,
} = songSlice.actions;

export default songSlice.reducer;
