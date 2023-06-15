import type { User } from '../../../../@types';
import delay from '@/utils/delay';

async function getUser(userId: number) {
  const res = await delay(
    1000,
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      cache: 'no-store',
    })
  );

  return res.json();
}

export default async function UserInfo({ userId }: { userId: number }) {
  const user = (await getUser(userId)) as User;

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
    </div>
  );
}
