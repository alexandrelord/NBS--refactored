import { Routes, Route } from 'react-router-dom';

/** Custom Components */
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Index/Projects';
import ProjectDetail from './components/Projects/Detail/ProjectDetail';
import ProjectCreate from './components/Projects/Form/ProjectCreate';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
    return (
        <Routes>
            <Route path="detail" element={<ProjectDetail />} />
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/create" element={<ProjectCreate />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

export default App;
