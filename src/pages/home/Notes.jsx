import { useQuery } from "@tanstack/react-query";
import { NoteCard } from "../../components";
import styles from "./notes.module.css";
import { EmptyPage } from "./EmptyPage";
import { useTitle } from "../../hooks/useTitle";

export const Notes = () => {
  useTitle("Home");
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return JSON.parse(localStorage.getItem("posts"));
    },
    refetchInterval: 500,
  });

  if (postQuery.isLoading) return <h1>Loading ...</h1>;
  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;

  return (
    <main>
      {postQuery.data?.length === 0 || postQuery.data?.length === undefined ? (
        <EmptyPage />
      ) : (
        <section className={styles.cards}>
          {postQuery?.data?.map((note) => {
            return <NoteCard note={note} key={note.id} />;
          })}
        </section>
      )}
    </main>
  );
};
