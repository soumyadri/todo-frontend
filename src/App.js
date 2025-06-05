import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import Home from './components/Home';
import About from './components/About';
import ErrorBoundary from './components/ErrorBoundary';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <div className="flex justify-between h-screen">
          <LeftPanel />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
          <RightPanel />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
