// SideBarComponent.tsx
import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Drawer } from "@mui/material";

import { useNavigate } from "react-router-dom";

function SideBarComponent({
  sideBarState,
  setSideBarState,
}: {
  sideBarState: boolean;
  setSideBarState: Function;
}) {
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        variant="persistent"
        open={sideBarState}
        sx={{
          '& .MuiDrawer-paper': {
            width: 200,
            marginTop: 9,
            boxSizing: 'border-box',
          },
        }}
      >
        <div className="flex items-center mt-5 ml-5 bg-gray-100 hover:bg-orange-200 p-3 rounded-md">
          <LightbulbOutlinedIcon onClick={() => navigate("/dashboard")} />
          <label className="ml-5" onClick={() => navigate("/dashboard")}>
            Notes
          </label>
        </div>
        <div className="flex items-center mt-7 ml-5 hover:bg-orange-200 p-3 rounded-md">
          <ArchiveOutlinedIcon onClick={() => navigate("/dashboard/archive")} />
          <label className="ml-5" onClick={() => navigate("/dashboard/archive")}>Archive</label>
        </div>
        <div className="flex items-center mt-7 ml-5 hover:bg-orange-200 p-3 rounded-md">
          <DeleteOutlineOutlinedIcon  onClick={() => navigate("/dashboard/trash")}/>
          <label className="ml-5" onClick={() => navigate("/dashboard/trash")}>Trash</label>
        </div>
      </Drawer>
    </>
  );
}

export default SideBarComponent;
