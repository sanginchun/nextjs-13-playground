export default function Page({ params }: { params: { id: string } }) {
  return <div>User: {params.id}</div>;
}
