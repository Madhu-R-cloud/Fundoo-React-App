import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import {createNote} from '../utils/NotesServices';
// import  updateNotesList  from '../components/NotesContainer'


function CreateNewNoteComponent({updateList}:{updateList:Function}) {

    const [state, setState] = useState(false);


    const handleCreateNote = () => {
        const noteData = {
            "title" : (document.getElementById('title') as HTMLInputElement).value,
            "description" : (document.getElementById('desc') as HTMLInputElement).value,
            "isPined":false,
            "isArchived":false,
        }
        setState(false);
        createNote(noteData)
        updateList(noteData,"create");
    }

  
    
    return (
        !state ? (
                // <div className='flex w-full h-5 ml-2.5 mr-0  mb-0'>
                    <div className='flex  w-[50%] h-[50px] ml-[350px] my-[40px] rounded-[13px] border-2 border-solid border-[rgb(178,188,190)]'>
                    <input type='text' className='ml-5 mt-1 w-[50%]' onClick={()=>setState(true)} placeholder='Title' />
                    <div className='flex w-[80%] ml-30 mr-[15px] items-center justify-end'>
                    <div className='flex w-[40%] justify-between'>

                    <CheckBoxOutlinedIcon/>
                    <BrushOutlinedIcon/>
                    <AddPhotoAlternateOutlinedIcon/>
                    </div>

                    {/* </div> */}
                </div>  
                </div>
        
        ) : (
            // <div className='flex w-full h-5 ml-2.5 mr-0 mt-2.5 mb-0'>
                <div className='flex flex-col w-[55%] h-[200px] mx-auto my-[120px] rounded-[13px] border-2 border-solid border-[rgb(178,188,190)]'>
                    <div className='flex flex-row w-full h-[30px] ml-2.5 mr-[100px] mt-2.5 mb-0'>
                        <input type='text' id='title' className='w-[90%] h-[30px] text-xl border-0' placeholder='Title' />
                        <div className='mr-5 mt-[25px]'>
                            <PushPinOutlinedIcon />
                        </div>
                    </div>
                    <div className='notecard-entry-body-ctn'>
                        <input type='text' id='desc' className='w-[85%] h-[30px] text-[17px] ml-2.5 mt-5 border-0' placeholder='Take a Note....' />
                    </div>
                    <div className='flex w-5/5 h-1/4 items-center justify-evenly mt-[60px]'>
                        <AddAlertOutlinedIcon />
                        <PersonAddAlt1OutlinedIcon />
                        <ColorLensOutlinedIcon />
                        <AddPhotoAlternateOutlinedIcon />
                        <ArchiveOutlinedIcon />
                        <MoreVertOutlinedIcon />
                        <UndoIcon />
                        <RedoOutlinedIcon />
                        <div className='flex w-[10%] ml-[100px] items-center'>
                            <Button variant="text" className='text-[rgb(43,56,56)] ml-[20px]' onClick={()=>handleCreateNote()}>Close</Button>
                        </div>
                    </div>
                </div>
            // </div>
        )
    );
}

export default CreateNewNoteComponent;
