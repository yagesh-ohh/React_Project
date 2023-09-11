import React from "react";
import SectorMainRouting from "./SectorMainRouting";
import { Outlet } from "react-router-dom";

const SectorRootBlock = () => {
  return (
    <>
      <SectorMainRouting />
      <Outlet />
      <div>
        <button className="btn">View More</button>
      </div>
    </>
  );
};

export default SectorRootBlock;
