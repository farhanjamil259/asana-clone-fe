import React, { useState } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Button from "../buttons/Button";
import Column from "./components/Column";
import initialData, { IData, IColumn, DraggableType } from "./initialData";

// TODO: use optimisitc updates (send request to api after local state has been updated)

const Kanban = (): React.ReactElement => {
  const [state, setState] = useState<IData>(initialData);

  const onDragEnd = (result: DropResult): void => {
    const { draggableId, source, destination, type } = result;

    //do not do anything if there is no destination
    if (!destination) return;

    //do not do anything if the destination col is the same as source col
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    //Check if columns are being dragged
    if (type === DraggableType.HORIZONTAL) {
      //create clone of columnOrder
      const newColOrder = Array.from(state.columnOrder);

      //remove selected column from index
      newColOrder.splice(source.index, 1);

      //insert the new col id into destination index
      newColOrder.splice(destination.index, 0, draggableId);

      const newState: IData = {
        ...state,
        columnOrder: newColOrder,
      };

      setState(newState);

      return;
    }

    //get source and destination cols by col id
    const sourceColumn = state.columns[source.droppableId];
    const destColumn = state.columns[destination.droppableId];

    if (sourceColumn === destColumn) {
      // create a new clone for the task ids
      const newTaskIds: IColumn["tasks"] = Array.from(sourceColumn.tasks);

      //remove 1 item from the index position of the picked up task
      newTaskIds.splice(source.index, 1);

      //add the item at the hovered index
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn: IColumn = {
        ...sourceColumn,
        tasks: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // clone entire source col tasks array
    const sourceTaskIds = Array.from(sourceColumn.tasks);

    //remove selected item from the source col array
    sourceTaskIds.splice(source.index, 1);

    //create a new col with removed array
    const newSourceCol: IColumn = {
      ...sourceColumn,
      tasks: sourceTaskIds,
    };

    //clone entire dest col tasks array
    const destTasksIds = Array.from(destColumn.tasks);

    //add dragged object id to the new tasks array
    destTasksIds.splice(destination.index, 0, draggableId);

    const newDestCol: IColumn = {
      ...destColumn,
      tasks: destTasksIds,
    };

    const newState: IData = {
      ...state,
      columns: {
        ...state.columns,
        [newSourceCol.id]: newSourceCol,
        [newDestCol.id]: newDestCol,
      },
    };

    setState(newState);
  };

  const handleAddColumn = (): void => {
    //Deep clone columnOrder and columns
    const newColOrder: string[] = Array.from(state.columnOrder);
    const newCols: IData["columns"] = JSON.parse(JSON.stringify(state.columns));

    //create name for column
    // TODO: allow cusstom name to be added
    const newColName = "column-" + state.columnOrder.length + 1;

    //create new column object
    newCols[newColName] = {
      id: newColName,
      tasks: [],
      title: "Untitled Section" + state.columnOrder.length + 1,
    };

    //add new column object id to columnOrder
    newColOrder.push(newColName);

    const newState: IData = {
      ...state,
      columns: newCols,
      columnOrder: newColOrder,
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="asdasd"
        direction="horizontal"
        type={DraggableType.HORIZONTAL}
      >
        {(provided): React.ReactElement => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="kanban"
            >
              {state.columnOrder.map((columnId, columnIndex) => {
                const column = state.columns[columnId];
                const tasks = column.tasks?.map(
                  (taskId) => state.tasks[taskId]
                );

                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    columnIndex={columnIndex}
                  />
                );
              })}
              {provided.placeholder}
              <div>
                <a onClick={handleAddColumn} className="kanban__add-button">
                  Add Section
                </a>
              </div>
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
