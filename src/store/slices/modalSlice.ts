import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../types";

type TModalState = {
  boardId: string;
  listId: string;
  task: ITask;
  modalActive: boolean;
};

type TSetModalDataAction = {
  boardId: string;
  listId: string;
  task: ITask;
};

const initialState: TModalState = {
  boardId: "board-0",
  listId: "list-0",
  modalActive: false,
  task: {
    taskId: "task-0",
    taskName: "task 0",
    taskDescription: "task description",
    taskOwner: "Dong",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (state, { payload }: PayloadAction<TSetModalDataAction>) => {
      state.boardId = payload.boardId;
      state.listId = payload.listId;
      state.task = payload.task;
    },
    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },
  },
});

export const { setModalData, setModalActive } = modalSlice.actions;
export const modalReduer = modalSlice.reducer;
