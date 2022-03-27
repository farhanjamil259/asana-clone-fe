import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITask } from "../initialData";

type TaskProps = {
  task: ITask;
  taskIndex: number;
};

const Task = ({ task, taskIndex }: TaskProps): React.ReactElement => {
  return (
    <Draggable draggableId={task.id} index={taskIndex}>
      {(provided, snapshot): React.ReactElement => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`task ${snapshot.isDragging ? "task--dragging" : ""}`}
          >
            {task.content}
          </div>
        );
      }}
    </Draggable>
  );
};

export default Task;
