import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteForever from'@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { addArchive,addDelete, deleteForeverNotes} from '../utils/NotesServices';
import { UnarchiveOutlined } from '@mui/icons-material';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';

interface NoteCardProps {
        title: string;
        description: string;
        isPined: boolean;
        id:string;
        isArchived: boolean;
   
}


function NoteCardComponent({ data, updatedList }: {data:NoteCardProps, updatedList:Function}) {
    
    const route = useLocation().pathname;
    
    const handleArchiveNote = () => {
        
        const noteId = data.id;
        const noteData = {
            "noteIdList":[`${noteId}`],
            "isArchived":true
            }
            addArchive(noteData);
            updatedList(noteData, "archive")
            
    }

    const handleUnArchiveNote = () => {
        
        const noteId = data.id;
        const noteData = {
            "noteIdList":[`${noteId}`],
            "isArchived": false
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

    const deletePermanetly = ()=>{
        const noteId = data.id;
        const noteData = {
            "noteIdList":[`${noteId}`]
            }
            deleteForeverNotes(noteData);
            updatedList(noteData, "remove")
    }

    return (
        
<div className="!flex flex-col justify-between h-[180px] min-h[103px] max-h-[385.2px] w-[240px] border-gray-400 rounded-lg border-2 relative m-[10px] group">
        <div className='p-[10px]'>
        <input defaultValue={data.title} type='text' className="text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif mb-[4px] outline-none" placeholder='Title' />
        <textarea defaultValue={data.description} className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none"/>
            </div>
            <div className="flex mb-[4px] flex group-hover justify-around">

        {
            route==="/dashboard/trash" ? <> <IconButton onClick={deletePermanetly} title='deletePermanetly'><DeleteForever/></IconButton> <IconButton><RestoreFromTrashOutlinedIcon/></IconButton></> :
            <>   
            <IconButton title='Remind me' className='!w-[35px] !min-w-0'><AddAlertOutlinedIcon /></IconButton>
                <IconButton title='Collaborator' className='!w-[35px] !min-w-0'><PersonAddAlt1OutlinedIcon/></IconButton>
                <IconButton title='Background options' className='!w-[35px] !min-w-0'><ColorLensOutlinedIcon /></IconButton>
                <IconButton title='Add image' className='!w-[35px] !min-w-0'>  <AddPhotoAlternateOutlinedIcon /></IconButton>
      
              {route==="/dashboard/archive" ? 
                        <IconButton title='UnArchive' onClick={handleUnArchiveNote} className='!w-[35px] !min-w-0'> <UnarchiveOutlined /></IconButton>
                        :  <IconButton title='Archive' onClick={handleArchiveNote} className='!w-[35px] !min-w-0'> <ArchiveOutlinedIcon /></IconButton>
                }
                <IconButton title='More' onClick={handleClick} className='!w-[35px] !min-w-0'>
                    <MoreVertOutlinedIcon/>
                    </IconButton>
            </>
            }
                <Menu open={open} onClose={()=>setMenu(null)} anchorEl={menu}>
                <MenuItem onClick={handleTrash}>Delete Note</MenuItem>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Add Label</MenuItem>
                {/* <MenuItem>Delete Permanent</MenuItem> */}
              
                </Menu>
            </div>
            <IconButton title='Pin Note' className='!absolute top-2 right-2'><PushPinOutlinedIcon /></IconButton>
            <IconButton title='Select' className='!absolute top-[-15px] left-[-25px] color-black'><BeenhereIcon/></IconButton>
        </div>
    )
}

export default NoteCardComponent;



