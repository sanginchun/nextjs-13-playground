async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Posts() {
  const data = await getData();

  return (
    <div className="px-16 py-8">
      {data.map((v) => (
        <div className="border p-2 mb-2" key={v.id}>
          <div>Title: {v.title}</div>
          <a className="text-orange-400" href={`/users/${v.userId}`}>
            Go to User Page
          </a>
          <div>Body: {v.body}</div>
        </div>
      ))}
    </div>
  );
}
