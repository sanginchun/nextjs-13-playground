export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>Posts 공통 레이아웃</div>
      {children}
    </section>
  );
}
