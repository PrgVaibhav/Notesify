import { useState } from "react";
import { useNoteContext } from "../../context/CreateNoteContext";
import { useTitle } from "../../hooks/useTitle";
import sound from "../../assets/success.mp3";

import styles from "./create.module.css";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  useTitle("Create");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { createNote } = useNoteContext();
  const successAudio = new Audio(sound);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || body === "" || title === null || body === null) {
      return alert("Fill in the data first");
    }

    createNote(title, body);

    successAudio.play();

    navigate("/");
    setTitle("");
    setBody("");
  };

  return (
    <main>
      <section className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Good title for your note"
            name="title"
            id="title"
            autoComplete="off"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            placeholder="Fill your thoughts here"
            name="body"
            id="body"
            autoComplete="off"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Create</button>
        </form>
      </section>
    </main>
  );
};
