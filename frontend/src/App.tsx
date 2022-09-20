import { Routes, Route } from 'react-router-dom';

/** CSS Module */
import './App.css';

/** Custom Components */
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Index/Projects';
import ProjectDetail from './components/Projects/Detail/ProjectDetail';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="projects/:projectId" element={<ProjectDetail />} />
        </Routes>
    );
}

export default App;
