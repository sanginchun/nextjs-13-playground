import type { Comment } from '../../../../@types';
import delay from '@/utils/delay';

async function getComments(postId: number) {
  const res = await delay(
    3000,
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
      cache: 'no-store',
    })
  );

  return res.json();
}

export default async function Comments({ postId }: { postId: number }) {
  const comments = (await getComments(postId)) as Comment[];

  return comments.map((v) => (
    <div className="p-4" key={v.id}>
      <div>Name: {v.name}</div>
      <div>Body: {v.body}</div>
    </div>
  ));
}
