import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  selectedMail: null,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { setSelectedMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
