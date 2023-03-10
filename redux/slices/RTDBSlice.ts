import { createSlice } from '@reduxjs/toolkit';
import { RTDBSliceInterface } from '../../config/interfaces';

const initialState: RTDBSliceInterface = {
  messages: [],
  memes: [],
  meditation: [],
};
const RTDBSlice = createSlice({
  name: 'RTDB',
  initialState,
  reducers: {
    setMessages(state: any, { payload }: any) {
      state.messages = [...payload];
    },
    setMemes(state, { payload }) {
      state.memes = [...state.memes, payload];
    },
    setMeditationQuotes(state, { payload }) {
      state.meditation = [state.meditation, ...payload];
    },
    updateMemes(state, { payload }) {
      state.memes = [
        ...state.memes.map((item) => {
          if (item.meme == payload.meme) {
            return {
              ...item,
              likes: payload.likes,
              dislikes: payload.dislikes,
            };
          } else return item;
        }),
      ];
    },
  },
});

export const { setMessages, setMemes, updateMemes, setMeditationQuotes } =
  RTDBSlice.actions;
export default RTDBSlice.reducer;
