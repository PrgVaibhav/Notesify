import { Route, Routes } from "react-router-dom";
import { Notes } from "../pages/home/Notes";
import { Create } from "../pages/create/Create";
import { Note } from "../pages/Note/Note";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/create" element={<Create />} />
      <Route path="/:id" element={<Note />} />
    </Routes>
  );
};
