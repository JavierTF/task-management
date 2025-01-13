export interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface TaskFormData {
    title: string;
    completed: boolean;
  }
  
  export type TaskToggleHandler = (id: number) => void;
  export type TaskDeleteHandler = (id: number) => void;
  export type TaskAddHandler = (task: TaskFormData) => void;
  export type PageChangeHandler = (page: number) => void;