import React from "react";
import Navbar from "../../navigation/top-navbar";

const MainDashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="w-full h-full ">
            <Navbar />
            <div className="pt-16 bg-[#F5F5F5]">{children}</div>
        </div>
    );
};

export default MainDashboard;
