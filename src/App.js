import './App.css';
import InsertDetails from './components/InsertDetails';
import CalculateAttedence from './components/CalculateAttedence';
import Indexs from './components/Indexs';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewStudents from './components/ViewStudents';
import TakeAttendances from './components/TakeAttendances';
import Login_Page from './components/Login_Page';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          {/* Public Route */}
          <Route path="/" element={<Login_Page />} />

          {/* Protected Layout */}
          <Route path="/dashboard" element={<Indexs />}>
            
            <Route path="main" element={
              <PrivateRoutes>
                <Home/>
              </PrivateRoutes>
            } />

            <Route path="addstudent" element={<PrivateRoutes><InsertDetails /></PrivateRoutes>} />
            <Route path="viewstudent" element={<PrivateRoutes><ViewStudents /></PrivateRoutes>} />
            <Route path="takeattedance" element={<PrivateRoutes><TakeAttendances /></PrivateRoutes>} />
            <Route path="report" element={<PrivateRoutes><CalculateAttedence/></PrivateRoutes>} />

          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;