import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Button from "../../buttons/Button";
import { DraggableType, IColumn, ITask } from "../initialData";
import Task from "./Task";

type ColumnProps = {
  column: IColumn;
  tasks: ITask[];
  columnIndex: number;
};

const Column = ({
  column,
  tasks,
  columnIndex,
}: ColumnProps): React.ReactElement => {
  const [active, setActive] = useState(false);

  return (
    <Draggable draggableId={column.id} index={columnIndex}>
      {(provided, parentSnapshot): React.ReactElement => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            className={`column ${
              parentSnapshot.isDragging || active ? "column--hovered" : ""
            }`}
          >
            <h3
              {...provided.dragHandleProps}
              className="column__title"
              onMouseEnter={(): void => setActive(true)}
              onMouseLeave={(): void => setActive(false)}
            >
              {column.title}
            </h3>
            <Droppable
              droppableId={column.id}
              key={column.id}
              type={DraggableType.TASK}
            >
              {(provided, snapshot): React.ReactElement => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`column__tasks ${
                      snapshot.isDraggingOver ? "column__tasks--dragging" : ""
                    }`}
                  >
                    {tasks.map((task, taskIndex) => {
                      return (
                        <Task key={task.id} task={task} taskIndex={taskIndex} />
                      );
                    })}
                    {provided.placeholder}
                    <Button
                      classNames="column__add-task"
                      fullWidth
                      text="+ Add Task"
                      variant="success"
                    />
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Column;
