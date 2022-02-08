import { v4 as uuid } from 'uuid';

export const create = (todos, todo) => {
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

export const remove = (todos, todoId) => {
  return [...todos].filter(({ id }) => id !== todoId);
};

export const update = (todos, todoId, todo) => {
  const copy = [...todos];
  const index = copy.findIndex(({ id }) => id === todoId);
  const now = new Date().getTime();

  if (index >= 0) {
    copy[index] = {
      ...copy[index],
      ...todo,
      updatedAt: now
    };
  }

  return copy;
};
