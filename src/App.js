import Home from "./routes/home/home.component";

import {Routes, Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";


function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home/>}/>
            </Route>

            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>Oups... There's nothing here !</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default App;
