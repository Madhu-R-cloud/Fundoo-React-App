import axios from "axios";

const REACT_APP_BASE_URL = 'https://fundoonotes.incubation.bridgelabz.com/api/';

const configForAddNotes = {
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Token")
    }
}

const configForGetNotes = {
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Token")
    }
}

// const configForGetArchiveNotes = {
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: localStorage.getItem("Token")
//     }
// }

export const createNote = async (obj: Object) => {
    await axios.post(`${REACT_APP_BASE_URL}notes/addNotes`, obj, configForAddNotes);
}

export const getNotes = async () => {

    const res =  await axios.get(`${REACT_APP_BASE_URL}notes/getNotesList`,configForGetNotes);
    return res.data.data.data;
}

export const addArchive = async (obj:Object) => {

    await axios.post(`${REACT_APP_BASE_URL}notes/archiveNotes`, obj, configForGetNotes);
}

export const getArchive = async () => {
    const res =  await axios.get(`${REACT_APP_BASE_URL}notes/getArchiveNotesList`,configForAddNotes);
    return res.data.data.data;
}

export const addDelete = async (obj:Object) => {

    await axios.post(`${REACT_APP_BASE_URL}notes/trashNotes`, obj, configForGetNotes);
}


export const getTrashNotesList = async () => {
    const res =  await axios.get(`${REACT_APP_BASE_URL}notes/getTrashNotesList`,configForAddNotes);
    return res.data.data.data;
}
// getTrashNotesList