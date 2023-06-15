import type { Todo } from '../../../../@types';
import delay from '@/utils/delay';
import { TodoStatus } from './TodoFilter';

async function getData(todoStatus: TodoStatus) {
  const res = await delay(
    2000,
    fetch(
      `https://jsonplaceholder.typicode.com/todos${
        todoStatus !== 'ALL'
          ? `?completed=${todoStatus === 'DONE' ? 'true' : 'false'}`
          : ''
      }`,
      {
        cache: 'no-store',
      }
    )
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function TodoList({
  todoStatus,
}: {
  todoStatus: TodoStatus;
}) {
  const data = (await getData(todoStatus)) as Todo[];

  return data.map((v) => (
    <div className="border p-2 mb-2 flex align-center" key={v.id}>
      <input className="mr-2" type="checkbox" checked={v.completed} readOnly />
      <div>{v.title}</div>
    </div>
  ));
}
