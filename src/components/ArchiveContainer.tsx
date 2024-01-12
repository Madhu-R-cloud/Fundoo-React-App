import React, { useEffect, useState } from "react";
import NoteCardComponent from "./NoteCardComponent";
import { getArchive } from "../utils/NotesServices";

interface NoteObj {
    title: string,
    description: string,
    id: string,
    isPined: Boolean,
    noteIdList: string,
    isArchived: Boolean,
    isDeleted:Boolean
}

function ArchiveContainer () {
    const [archiveList, setArchiveList] = useState<NoteObj[]>([]);
    useEffect( () => {
        fetchArchives();
    }, [] )

     const fetchArchives = async () => {
        const result = await getArchive();
        setArchiveList(result);
    }

    return (<>
        <div className="grid grid-cols-4 ml-[250px] mt-[100px]" >
            {archiveList.map( (val:any) => {
                return (<>
                    <NoteCardComponent data={val} key={val.id}  updatedList={()=>{}} />
                </>)
            } )}
        </div>
    </>)
}

export default ArchiveContainer;