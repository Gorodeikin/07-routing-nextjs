"use client";

import { useRouter, useParams } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";


export default function PreviewClient() {
  const router = useRouter();
  const { id } = useParams();
  const noteId = Array.isArray(id) ? id[0] : id;

  const { data: note, isLoading } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId!),
    enabled: !!noteId,
    refetchOnMount: false,
  });

  const closeModal = () => {
    router.back();
  };

  if (!id) return <p>Note ID is missing</p>;

  return (
    <Modal isOpen onClose={closeModal}>
      {isLoading && <p>Loading...</p>}
      {note && (
        <div>
          <h2>{note.title}</h2>
          <p><b>Tag:</b> {note.tag}</p>
          <p>{note.content}</p>
          <p>Created at: {new Date(note.createdAt).toLocaleString()}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </Modal>
  );
}
