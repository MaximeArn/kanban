export interface TaskModalProps {
  listId: string;
  createTask: Function;
  editTask: Function;
  closeModal: Function;
  action: string;
}

export interface ListModalProps {
  createList: Function;
  closeModal: Function;
}
