import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../Components/Header";
import Dashboard from "../Pages/Dashboard";
import RandomColors from "../Pages/RandomColors";
import Lists from "../Pages/Lists";
import Things from "../Pages/Things";

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/randomColors" element={<RandomColors />}/>
                    <Route path="/lists" element={<Lists />}/>
                    <Route path="/things" element={<Things />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Router;