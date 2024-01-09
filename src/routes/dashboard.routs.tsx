import { Routes, Route } from "react-router-dom";
import { Routes as RoutesPath } from "../config/routes";
import MarketRoutes from "./market.routes";
import MainDashboard from "../components/layout/main/dashboard";

const DashboardRoutes = () => {
    return (
        <MainDashboard>
            <Routes>
                <Route path={`${RoutesPath.marketRoute}/*`} element={<MarketRoutes />} />
            </Routes>
        </MainDashboard>
    );
};

export default DashboardRoutes;
