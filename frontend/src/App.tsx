import { Routes, Route } from 'react-router-dom';

/** Custom Components */
import Layout from './components/Layout';
import Login from './components/Auth/Login/Login';
import Home from './components/Home/Home';
import Projects from './components/Projects/Index/Projects';
import ProjectDetail from './components/Projects/Detail/ProjectDetail';
import Test from './components/Test/Test';
import NoMatch from './components/NoMatch/NoMatch';
import LoginSuccess from './components/Auth/SuccessOrFailure/LoginSuccess';
import ProjectCreate from './components/Projects/Create/Create';

function App() {
    return (
        <Routes>
            <Route path="detail" element={<ProjectDetail />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Layout />}>
                <Route path="login" element={<Login />} />
                <Route path="test" element={<Test />} />
                <Route path="login/success" element={<LoginSuccess />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/create" element={<ProjectCreate />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

export default App;
