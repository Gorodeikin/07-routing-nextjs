import { fetchNotes, NotesPageData } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function FilteredNotesPage({ params }: Props) {

  const awaitedParams = await params;
  const { slug = [] } = awaitedParams; 
  const tag = slug[0] ?? "All";
  const filterTag = tag === "All" ? undefined : tag;

  const data: NotesPageData = await fetchNotes({ tag: filterTag, page: 1, perPage: 12 });
  
  return <NotesClient initialNotes={data.notes} totalPages={data.totalPages} tag={filterTag} />; 
}