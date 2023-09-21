import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  notes: null,
};

const NoteContext = createContext(initialState);

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(null);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  const createNote = (title, body) => {
    setNotes((prevState) => [
      ...(prevState?.length > 0 ? [...prevState] : []),
      { id: uuidv4(), title, body, currentDate },
    ]);
  };

  useEffect(() => {
    if (notes !== null) {
      localStorage.setItem("posts", JSON.stringify(notes));
    }
  }, [notes]);

  useEffect(() => {
    const localStoragePosts = localStorage.getItem("posts");
    if (localStoragePosts) {
      const parsedPost = JSON.parse(localStoragePosts);
      setNotes(parsedPost);
    }
  }, []);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const value = {
    notes,
    createNote,
    deleteNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  return context;
};
