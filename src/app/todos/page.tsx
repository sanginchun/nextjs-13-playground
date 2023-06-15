import { Suspense } from 'react';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

export default function Todos({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) {
  const todoStatus =
    searchParams['completed'] === undefined
      ? 'ALL'
      : searchParams['completed'] === 'true'
      ? 'DONE'
      : 'NOT_DONE';

  return (
    <div className="px-16 py-8">
      <TodoFilter todoStatus={todoStatus} />
      <Suspense fallback={<div>Loading Todos ...</div>}>
        <TodoList todoStatus={todoStatus} />
      </Suspense>
    </div>
  );
}
