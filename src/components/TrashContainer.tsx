import React, { useEffect, useState } from "react";
import NoteCardComponent from "./NoteCardComponent";
import { getTrashNotesList } from "../utils/NotesServices";


interface NoteObj {
    title: string,
    description: string,
    id: string,
    isPined: Boolean,
    noteIdList: string,
    isArchived: Boolean,
}

function TrashContainer () {
    const [trashList, setTrashList] = useState<NoteObj[]>([]);


    useEffect( () => {
        fetchTrash();
    },[])

     const fetchTrash = async () => {
        const result = await getTrashNotesList();
        setTrashList(result);
    }


    const updateNotesList = (noteObj: NoteObj, action: string) => {
        if (action === "remove") {
            setTrashList((prevList) => prevList.filter((ele) => ele.id !== noteObj.id));
            
        }
      };
      
      return (
        <>
          <div className="grid grid-cols-4 ml-[250px] mt-[100px]">
            {trashList.map((val: any) => (
              <NoteCardComponent
                data={val}
                key={val.id}
                updatedList={() => updateNotesList(val, "remove")}
              />
            ))}
          </div>
        </>
      );
      
}

export default TrashContainer;