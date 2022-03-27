// TODO: Find better interface names
export interface ITask {
  id: string;
  content: string;
}

export interface IColumn {
  id: string;
  title: string;
  tasks: string[];
}

export interface IData {
  tasks: {
    [key: string]: ITask;
  };
  columns: {
    [key: string]: IColumn;
  };
  columnOrder: string[];
}

export enum DraggableType {
  HORIZONTAL = "horizontal",
  TASK = "task-vertical",
}

const initialData: IData = {
  tasks: {
    "task-1": { id: "task-1", content: "This is the first task" },
    "task-2": { id: "task-2", content: "This is the second task" },
    "task-3": { id: "task-3", content: "This is the third task" },
    "task-4": { id: "task-4", content: "This is the fourth task" },
  },
  columns: {
    "col-1": {
      id: "col-1",
      title: "TODO",
      tasks: ["task-1", "task-2"],
    },
    "col-2": {
      id: "col-2",
      title: "In Progress",
      tasks: ["task-3", "task-4"],
    },
    "col-3": {
      id: "col-3",
      title: "In Progress",
      tasks: [],
    },
    "col-4": {
      id: "col-4",
      title: "In Progress",
      tasks: [],
    },
  },

  // TODO: ability to change column orders
  columnOrder: ["col-1", "col-2", "col-3", "col-4"],
};

export default initialData;
