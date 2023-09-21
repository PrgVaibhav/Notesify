import { useState } from "react";
import { Link } from "react-router-dom";
import { useNoteContext } from "../../context/CreateNoteContext";

import sound from "../../assets/delete.mp3";
import styles from "./noteCard.module.css";

export const NoteCard = ({ note }) => {
  const { deleteNote } = useNoteContext();
  const { id, body, title, currentDate } = note;

  const [mouseIn, setMouseIn] = useState(false);

  const deleteSound = new Audio(sound);
  const deleteHandler = (id) => {
    deleteNote?.(id);
    deleteSound.play();
  };

  const mouseEnterHandler = () => {
    setMouseIn(!mouseIn);
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.top}>
          <Link to={`/${id}`}>
            <h1>
              {title.length >= 12 ? title.substring(0, 10) + "..." : title}
            </h1>
          </Link>
          <span>{currentDate}</span>
        </div>
        <p>{body.length >= 100 ? body.substring(0, 100) + "..." : body}</p>
        <button
          onClick={() => deleteHandler(id)}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseEnterHandler}
        >
          {mouseIn ? "Delete --->" : "Delete"}
        </button>
      </div>
    </>
  );
};
