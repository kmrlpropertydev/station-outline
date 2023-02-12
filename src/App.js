import "./styles.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Maps from "./components/maps";
import Posts from "./filter";



export default function App() {
    // Setup browser routers to return different components based on the URL for Maps component and Filter component.
    return (
        <div className="App">
            <Router>
                <div className="fill">
                    <Routes>
                        {/* This shows the login UI on "/auth" route */}

                        <Route path="/maps"
                               element={
                                   <Maps/>
                               }/>
                        <Route path="/filter"
                               element={
                                   <Posts/>
                               }/>
                    </Routes>
                </div>
            </Router>
        </div>

    );


}
