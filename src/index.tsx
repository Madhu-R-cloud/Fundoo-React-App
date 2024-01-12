import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import SignUpComponent from './components/SignUpComponent';
import LoginComponent from './components/LoginComponent';
import CreateNewNoteComponent from './components/CreateNewNoteComponent';
import NoteCardComponent from './components/NoteCardComponent';
import DashboardHeader from './components/DashboardHeader';
import SideBarComponent from './components/SideBarComponent';
import NotesContainer from './components/NotesContainer';
import ArchiveContainer from './components/ArchiveContainer';
import TrashContainer from './components/TrashContainer';
import { Outlet } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const Dashboard = () => {
  const [sideState, setSideState] = useState(true);

  

  return (
    <>
      <DashboardHeader sideBarState={sideState} setSideBarState={setSideState} />
      <SideBarComponent sideBarState={sideState} setSideBarState={setSideState} />
      {/* <CreateNewNoteComponent /> */}
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginComponent />,
  },
  {
    path: '/signup',
    element: <SignUpComponent />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <NotesContainer />,
      },
      {
        path: 'archive',
        element: <ArchiveContainer />,
      },
      {
        path: 'trash',
        element: <TrashContainer />,
      },
    
    ],
  },
]);

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
