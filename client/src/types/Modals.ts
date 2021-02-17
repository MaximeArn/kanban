export interface TaskModalProps {
  listId: string;
  taskId?: string;
  createTask: Function;
  editTask: Function;
  closeModal: Function;
  action: string;
  defaultColor?: string;
  defaultInfo?: string;
  defaultTitle?: string;
}

export interface ListModalProps {
  id?: string;
  createList: Function;
  editList: Function;
  closeModal: Function;
  action: string;
  defaultColor?: string;
  defaultTitle?: string;
}
