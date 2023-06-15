export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>Posts Common Layout</div>
      {children}
    </section>
  );
}
