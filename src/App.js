import './App.css';
import Main from './components/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components';
import Addstudent from './components/addstudent';
import Viewstudent from './components/viewstudent';
import Takeattendance from './components/Takeattendance';
import Generatereport from './components/Generatereport';
import Login from './components/loginpage';
import PrivateRoute from './components/privateroute';

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