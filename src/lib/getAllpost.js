export default async function getAllPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
