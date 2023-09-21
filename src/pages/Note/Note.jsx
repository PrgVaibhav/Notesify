import { useLocation, useNavigate } from "react-router-dom";
import { useNoteContext } from "../../context/CreateNoteContext";
import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";

import sound from "../../assets/delete.mp3";

import styles from "./note.module.css";

export const Note = () => {
  const [foundNote, setFoundNote] = useState(null);
  const { notes, deleteNote } = useNoteContext();

  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const slicedPathId = pathname.slice(1);

  const deleteSound = new Audio(sound);
  const deleteHandler = (id) => {
    deleteNote?.(id);
    deleteSound.play();
    navigate("/");
  };
  useTitle(`${foundNote?.title}`);

  useEffect(() => {
    const foundNote = notes?.find((note) => note.id === slicedPathId);
    setFoundNote(foundNote);
  }, [notes, slicedPathId]);

  return (
    <main>
      <section>
        {foundNote ? (
          <div key={foundNote.id} className={styles.container}>
            <div className={styles.top}>
              <h1>{foundNote.title}</h1>
              <button onClick={() => deleteHandler(foundNote.id)}>
                Delete
              </button>
            </div>
            <p>{foundNote.body}</p>
          </div>
        ) : (
          <p>No Note Found</p>
        )}
      </section>
    </main>
  );
};
