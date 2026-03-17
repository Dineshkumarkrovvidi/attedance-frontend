import './App.css';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Addstudent from './components/Addstudents';
import Viewstudent from './components/Viewstudents';
import Takeattendance from './components/Takeattendance';
import Generatereport from './components/Generatereport';
import Login from './components/Login_page';
import PrivateRoute from './components/Privateroutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          {/* Public Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Layout */}
          <Route path="/" element={<Index />}>
            
            <Route path="main" element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            } />

            <Route path="addstudent" element={<PrivateRoute><Addstudent /></PrivateRoute>} />
            <Route path="viewstudent" element={<PrivateRoute><Viewstudent /></PrivateRoute>} />
            <Route path="takeattedance" element={<PrivateRoute><Takeattendance /></PrivateRoute>} />
            <Route path="report" element={<PrivateRoute><Generatereport /></PrivateRoute>} />

          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;