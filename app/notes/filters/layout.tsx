import styles from "./LayoutNotes.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal?: React.ReactNode;
};

export default function NotesLayout({ children, sidebar, modal }: Props) {
  return (
    <section className={styles.container}>
      <aside className={styles.aside}>{sidebar}</aside>
      <div className={styles.notesWrapper}>{children}</div>
      {modal && <div className={styles.modalWrapper}>{modal}</div>}
    </section>
  );
}