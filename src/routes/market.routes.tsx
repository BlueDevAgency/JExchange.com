import { Routes, Route } from "react-router-dom";
import { Routes as RoutesPath } from "../config/routes";
import MarketCoinsView from "../view/market/coins";

const MarketRoutes = () => {
    return (
        <Routes>
            <Route path={RoutesPath.market.coins} element={<MarketCoinsView />} />
        </Routes>
    );
};

export default MarketRoutes;
