import { Routes, Route } from 'react-router-dom';

/** Custom Components */
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Index/Projects';
import ProjectCard from './components/Projects/ProjectCard/ProjectCard';
import ProjectDetail from './components/Projects/Detail/ProjectDetail';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
    return (
        <Routes>
            <Route path="detail" element={<ProjectDetail />} />
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

export default App;
