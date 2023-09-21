export function createPost({ title, body }) {
  let notes = [];
  notes.push(...notes, { id: Math.floor(Math.random() * 1000), title, body });
  return localStorage.setItem("posts", JSON.stringify(notes));
}
