async function getUser(userId: string) {
  const res = await new Promise((res) => {
    setTimeout(() => {
      res(
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          cache: 'no-store',
        })
      );
    }, 1000);
  });

  return res.json();
}

export default async function UserInfo({ userId }: { userId: string }) {
  const user = await getUser(userId);

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
    </div>
  );
}
