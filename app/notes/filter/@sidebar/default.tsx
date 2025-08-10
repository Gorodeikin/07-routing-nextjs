"use client";

import css from "./SidebarNotes.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NoteTag } from "@/types/note";

const ALL_NOTES = "All Notes" as const;
type MenuTag = NoteTag | typeof ALL_NOTES;

const TAGS: NoteTag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];
const menuTags: MenuTag[] = [ALL_NOTES, ...TAGS];

export default function SidebarNotes() {
    const pathname = usePathname();
  
    const getFilter = (tag: MenuTag): string => {
        return tag === ALL_NOTES ? "/notes/filter/All" : `/notes/filter/${tag}`;
    };

    return (
        <aside className={css.sidebar}>
            <ul className={css.menuList}>
                {menuTags.map((tag) => {
                    const isActive = pathname?.startsWith(getFilter(tag));
                    return (
                        <li key={tag} className={css.menuItem}>
                            <Link
                                href={getFilter(tag)}
                                className={`${css.menuLink} ${isActive ? css.active : ""}`}
                            >
                                {tag}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}