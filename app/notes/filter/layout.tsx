import SidebarNotes from "./@sidebar/default";
import styles from "./LayoutNotes.module.css";

type Props = {
  children: React.ReactNode;
  params: { slug?: string[] };
};

export default function NotesLayout({ children, params }: Props) {
  const tagFromUrl = params.slug?.[0] ?? "All";
  return (
    <section className={styles.container}>
      <aside className={styles.aside}>
        <SidebarNotes />
      </aside>
      <div className={styles.notesWrapper}>{children}</div>
    </section>
  );
}