import type { Post } from '../../../@types';
import { Suspense } from 'react';
import UserInfo from './components/UserInfo';
import Comments from './components/Comments';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Posts() {
  const data = (await getData()) as Post[];

  return (
    <div className="px-16 py-8">
      {data.map((v) => (
        <div className="border p-2 mb-2" key={v.id}>
          <div>Title: {v.title}</div>
          <div>Body: {v.body}</div>
          <div className="border p-4 bg-gray-100">
            <Suspense fallback={<div>Loading user...</div>}>
              <UserInfo userId={v.userId} />
            </Suspense>
          </div>
          <div className="border p-4 mt-2 bg-gray-300">
            <Suspense fallback={<div>Loading comments...</div>}>
              Comments
              <Comments postId={v.id} />
            </Suspense>
          </div>
        </div>
      ))}
    </div>
  );
}
