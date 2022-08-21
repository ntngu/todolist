const Todo = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const changeTitle = (newTitle) => {
    title = newTitle;
  }
  const changeDescription = (newDescription) => {
    description = newDescription;
  }
  const changeDueDate = (newDueDate) => {
    dueDate = newDueDate;
  }
  const changePriority = (newPriority) => {
    priority = newPriority;
  }

  return { getTitle, getDescription, getDueDate, getPriority, changeTitle, changeDescription, changeDueDate, changePriority };
}

export { Todo };