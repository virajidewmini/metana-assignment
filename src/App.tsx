import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import WelcomeForm from "./pages/welcomeForm.tsx";

const App =()=>{
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/welcome" element={<WelcomeForm />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
