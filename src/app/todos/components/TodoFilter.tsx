'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

export type TodoStatus = 'ALL' | 'DONE' | 'NOT_DONE';

export default function TodoFilter({ todoStatus }: { todoStatus: TodoStatus }) {
  const router = useRouter();
  const [status, setStatus] = useState<TodoStatus>(todoStatus);
  const [isPending, startTransition] = useTransition();

  const getHandleRadioButtonClick = (nextStatus: TodoStatus) => () => {
    const urlQuery =
      nextStatus === 'ALL'
        ? ''
        : `?completed=${nextStatus === 'DONE' ? 'true' : 'false'}`;

    setStatus(nextStatus);

    startTransition(() => {
      router.push(`/todos${urlQuery}`);
    });
  };

  return (
    <div className={`bg-zinc-100 p-2 mb-2 ${isPending ? 'brightness-50' : ''}`}>
      <button
        disabled={isPending}
        className={`border rounded px-2 py-1 mr-2 ${
          status === 'ALL' ? 'bg-green-300' : ''
        }`}
        onClick={getHandleRadioButtonClick('ALL')}
      >
        ALL
      </button>
      <button
        disabled={isPending}
        className={`border rounded px-2 py-1 mr-2 ${
          status === 'DONE' ? 'bg-green-300' : ''
        }`}
        onClick={getHandleRadioButtonClick('DONE')}
      >
        DONE
      </button>
      <button
        disabled={isPending}
        className={`border rounded px-2 py-1 ${
          status === 'NOT_DONE' ? 'bg-green-300' : ''
        }`}
        onClick={getHandleRadioButtonClick('NOT_DONE')}
      >
        NOT DONE
      </button>
    </div>
  );
}
