"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./TagsMenu.module.css";
import type { NoteTag } from "@/types/note";

const TAGS: NoteTag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menuContainer}>
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Notes ▾
      </button>
      {isOpen && (
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link
              href="/notes/filters/All"
              className={styles.menuLink}
              onClick={() => setIsOpen(false)}
            >
              All
            </Link>
          </li>
          {TAGS.map((tag) => {
            const href = `/notes/filters/${tag}`;
            return (
              <li key={tag} className={styles.menuItem}>
                <Link
                  href={href}  
                  className={styles.menuLink}
                  onClick={() => setIsOpen(false)}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
