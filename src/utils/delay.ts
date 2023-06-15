export default function delay<T>(
  miliseconds = 1000,
  prom: Promise<T>
): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => res(prom), miliseconds);
  });
}
