import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

import EmailForm from "./pages/EmailForm.tsx";
import WelcomeForm from "./pages/WelcomeForm.tsx";

const App =()=>{
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/welcome" element={<WelcomeForm />} />
                    <Route path="/email" element={<EmailForm />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
