import React from "react";
import { container, description, title } from "./Task.css";
import { useTypedDispatch } from "../../hooks/redux";
import { setModalActive } from "../../store/slices/modalSlice";

type TTaskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
};

const Task: React.FC<TTaskProps> = ({
  index,
  id,
  boardId,
  taskName,
  taskDescription,
}) => {
  const dispatch = useTypedDispatch();

  return (
    <div className={container} onClick={() => dispatch(setModalActive(true))}>
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDescription}</div>
    </div>
  );
};

export default Task;
