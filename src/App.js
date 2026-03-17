import './App.css';
import InsertDetails from './components/InsertDetails';
import CalculateAttedence from './components/CalculateAttedence';
import Indexs from './components/Indexs';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetStudents from './components/GetStudents';
import TakeAttendances from './components/TakeAttendances';
import Login from './components/Login';
import Private from './components/Private';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          {/* Public Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Layout */}
          <Route path="/dashboard" element={<Indexs />}>
            
            <Route path="main" element={
              <Private>
                <Home/>
              </Private>
            } />

            <Route path="addstudent" element={<Private><InsertDetails /></Private>} />
            <Route path="viewstudent" element={<Private><GetStudents /></Private>} />
            <Route path="takeattedance" element={<Private><TakeAttendances /></Private>} />
            <Route path="report" element={<Private><CalculateAttedence/></Private>} />

          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;