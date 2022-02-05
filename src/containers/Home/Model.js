import { v4 as uuid } from 'uuid';

export const createTodo = (todos, todo) => {
  const now = new Date().getTime();

  return [
    ...todos,
    {
      id: uuid(),
      isMarked: false,
      createdAt: now,
      updatedAt: now,
      ...todo
    }
  ];
};

export const deleteTodo = (todos, todoId) => {
  return [...todos].filter(({ id }) => id !== todoId);
};

export const updateTodo = (todos, todoId, todo) => {
  const index = todos.findIndex(({ id }) => id === todoId);
  const now = new Date().getTime();

  if (index >= 0) {
    todos[index] = {
      ...todos[index],
      ...todo,
      updatedAt: now
    };
  }

  return todos;
};
