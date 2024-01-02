import "./assets/css/main.css";
import AppRoute from "./routes/app.routs";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-zinc-800">
                <AppRoute />
            </div>
        </BrowserRouter>
    );
}

export default App;
