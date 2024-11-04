import { boardReducer } from "../slices/boardSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReduer } from "../slices/modalSlice";

const reducer = {
  logger: loggerReducer,
  modal: modalReduer,
  board: boardReducer,
};

export default reducer;
