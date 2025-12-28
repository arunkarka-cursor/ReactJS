import { Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import Dashboard from './Dashboard.tsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
