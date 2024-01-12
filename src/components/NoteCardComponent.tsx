import React, {useState} from 'react';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { addArchive,addDelete} from '../utils/NotesServices';
// import { useState } from 'react';


interface NoteCardProps {
        title: string;
        description: string;
        isPined: boolean;
        id:string;
        isArchived: boolean;
   
}


function NoteCardComponent({ data, updatedList }: {data:NoteCardProps, updatedList:Function}) {
    const handleArchiveNote = () => {
        
        const noteId = data.id;
        const noteData = {
            "noteIdList":[`${noteId}`],
            "isArchived":true
            }
            addArchive(noteData);
            updatedList(noteData, "archive")
            
    }

    const [menu, setMenu] = useState(null); 
    const open = Boolean(menu); 
    const handleClick = (e:any) => { 
        setMenu(e.currentTarget); 
    };

    const handleTrash =  () => {
        
        const noteId = data.id;
        const noteData = {
            "noteIdList":[`${noteId}`],
            "isDeleted":true
            }
            addDelete(noteData);
            updatedList(noteData, "Trash")
            
    }


    return (
        
<div className="flex flex-col justify-between h-[180px] min-h[103px] max-h-[385.2px] w-[240px] border-gray-400 rounded-lg border-2 relative m-[10px]">
        <div className='p-[10px]'>
        <input defaultValue={data.title} type='text' className="text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif mb-[4px] outline-none" placeholder='Title' />
        <textarea defaultValue={data.description} className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none"/>
            </div>
            <div className="flex justify-around mb-[4px]">
                <Button title='Remind me' className='!w-[35px] !min-w-0'><AddAlertOutlinedIcon /></Button>
                <Button title='Collaborator' className='!w-[35px] !min-w-0'><PersonAddAlt1OutlinedIcon/></Button>
                <Button title='Background options' className='!w-[35px] !min-w-0'><ColorLensOutlinedIcon /></Button>
                <Button title='Add image' className='!w-[35px] !min-w-0'>  <AddPhotoAlternateOutlinedIcon /></Button>
                <Button title='Archive' onClick={handleArchiveNote} className='!w-[35px] !min-w-0'> <ArchiveOutlinedIcon /></Button>
                <Button title='More' onClick={handleClick} className='!w-[35px] !min-w-0'><MoreVertOutlinedIcon/></Button>
                <Menu open={open} onClose={()=>setMenu(null)} anchorEl={menu}>
                <MenuItem onClick={handleTrash}>Delete Note</MenuItem>
                {/* <MenuItem>Delete Permanent</MenuItem> */}
              
                </Menu>
            </div>
            <button title='Pin Note' className='absolute top-2 right-2'><PushPinOutlinedIcon /></button>
            <button title='Select' className='absolute top-[-10px] left-[-10px]'><BeenhereIcon/></button>
        </div>
    )
}

export default NoteCardComponent;



