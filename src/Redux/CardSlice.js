import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    input: "",
    tasks: [],
    isEditing: false,
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    addTask: (state) => {
      const input = state.input.trim();

      if (input !== "") {
        if (state.isEditing === false) {
          state.tasks = [...state.tasks, input];
        } else {
          state.tasks[state.isEditing] = input;
          state.isEditing = false;
        }
        state.input = "";
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task, index) => index !== action.payload);
    },
  },
});

export const { setInput, addTask, deleteTask } = cardSlice.actions;

export default cardSlice.reducer;
