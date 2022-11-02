import { createSlice } from '@reduxjs/toolkit';
export const dataSlice = createSlice({
  name: 'chatdata',
  initialState: {
    room: false,
    chatside: false,
    user: {},
    baseUrl: 'http://localhost:5000',
    roomuser: {},
    chats: [],
    chatid: '',
  },
  reducers: {
    chatroom: (state) => {
      state.room = true;
    },
    Chatside: (state) => {
      state.chatside = !state.chatside;
    },
    Userdetails: (state, action) => {
      state.user = action.payload;
    },
    roomUser: (state, action) => {
      state.roomuser = action.payload;
    },
    getChats: (state, action) => {
      state.chats = action.payload;
    },
    getChatid: (state, action) => {
      state.chatid = action.payload;
    },
  },
});
export const { chatroom, Chatside, Userdetails, roomUser, getChats, getChatid } = dataSlice.actions;
export default dataSlice.reducer;
