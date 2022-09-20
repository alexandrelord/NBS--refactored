import { Routes, Route } from 'react-router-dom';

/** CSS Module */
import './App.css';

/** Custom Components */
import Layout from './components/Layout';
import Projects from './components/Projects/Index/Projects';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

export default App;
