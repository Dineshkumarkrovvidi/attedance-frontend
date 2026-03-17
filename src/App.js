import './App.css';
import InsertDetails from './components/InsertDetails';
import CalculateAttedence from './components/CalculateAttedence';
import Indexs from './components/Indexs';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewStudents from './components/ViewStudents';
import TakeAttendances from './components/TakeAttendances';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          {/* Public Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Layout */}
          <Route path="/" element={<Indexs />}>
            
            <Route path="main" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />

            <Route path="addstudent" element={<PrivateRoute><InsertDetails /></PrivateRoute>} />
            <Route path="viewstudent" element={<PrivateRoute><ViewStudents /></PrivateRoute>} />
            <Route path="takeattedance" element={<PrivateRoute><TakeAttendances /></PrivateRoute>} />
            <Route path="report" element={<PrivateRoute><CalculateAttedence/></PrivateRoute>} />

          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;