import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardRoutes from "./dashboard.routs";

const AppRoute = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoute;
