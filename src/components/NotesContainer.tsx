import React, { useEffect, useState } from "react";
import NoteCardComponent from "./NoteCardComponent";
import { getNotes } from "../utils/NotesServices";
import CreateNewNoteComponent from "./CreateNewNoteComponent";

interface NoteObj {
  title: string;
  description: string;
  isPined: boolean;
  isArchived: boolean;
  id: string;
  noteIdList: string;
}

function NotesContainer() {
  const [notesList, setNotesList] = useState<NoteObj[]>([]);
  // const[trashList, setTrashList] = useState<NoteObj[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    
  }, [notesList]);

  async function fetchNotes() {
    const result = await getNotes();
    const res = result.filter((ele: any) => !ele.isArchived && !ele.isDeleted);
    setNotesList(res);
  }

  const updateNotesList = (noteObj: NoteObj, action: string) => {
    if (action === "create") {
      setNotesList([...notesList, noteObj]);
    } else if (action === "archive") {
      let res = notesList.filter((ele) => ele.id !== noteObj.noteIdList[0]);
      setNotesList(res);
    } else if (action === "Trash") {
      let res = notesList.filter((ele) => ele.id !== noteObj.noteIdList[0]);
      setNotesList(res);
    }
  };

  return (
    <>
      <CreateNewNoteComponent updateList={updateNotesList} />
      <div className="grid grid-cols-4 mt-[30px] ml-[230px]">
        {notesList.map((val: any) => (
          <NoteCardComponent
            data={val}
            key={val.id}
            updatedList={updateNotesList}
          />
        ))}
      </div>
    </>
  );
}

export default NotesContainer;
