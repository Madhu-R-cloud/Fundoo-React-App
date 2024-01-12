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
    }, [] )

     const fetchTrash = async () => {
        const result = await getTrashNotesList();
        setTrashList(result);
    }

    return (<>
        <div className="grid grid-cols-4 ml-[250px] mt-[100px]" >
            {trashList.map( (val:any) => {
                return (<>
                    <NoteCardComponent data={val} updatedList={()=>{}} />
                </>)
            } )}
        </div>
    </>)
}

export default TrashContainer;