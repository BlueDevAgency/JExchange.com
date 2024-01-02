import { Routes, Route } from "react-router-dom";
import { Routes as RoutesPath } from "../config/routes";
import MarketRoutes from "./market.routes";

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path={`${RoutesPath.marketRoute}/*`} element={<MarketRoutes />} />
        </Routes>
    );
};

export default DashboardRoutes;
