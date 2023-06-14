async function getUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
    </div>
  );
}
