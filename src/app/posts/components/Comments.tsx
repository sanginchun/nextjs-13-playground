async function getComments(postId: string) {
  const res = await new Promise((res) => {
    setTimeout(() => {
      res(
        fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
          {
            cache: 'no-store',
          }
        )
      );
    }, 3000);
  });

  return res.json();
}

export default async function Comments({ postId }: { postId: string }) {
  const comments = await getComments(postId);

  return comments.map((v) => (
    <div className="p-4" key={v.id}>
      <div>Name: {v.name}</div>
      <div>Body: {v.body}</div>
    </div>
  ));
}
