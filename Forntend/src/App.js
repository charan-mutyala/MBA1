import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';
import Content from './components/Content';
import Create from './components/Create';
import ViewAllTutorials from './components/ViewAllTutorials';
import UpdateTutorial from './components/UpdateTutorial';
import AddStudent from './components/AddStudent';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHome from './components/AdminHome';
import ViewAllStudents from './components/ViewAllStudents';
import Home from './components/Home';
import AddAdmin from './components/AddAdmin';
import ViewAdmins from './components/ViewAdmins';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar/>

      <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/admin' element={<AdminLogin/>}/>
<Route path="/student" element={<StudentLogin/>} />
<Route path="/tutorials" element={<Content/>} />
<Route path="/create" element={<Create/>} />
<Route path='/AdminHome' element={<AdminHome/>}/>
<Route path='/view-all' element={<ViewAllTutorials/>}/>
<Route path="/update-tutorial/:id" element={<UpdateTutorial />} />
<Route path='/add-students' element={<AddStudent/>}/>
<Route path='/view-students' element={<ViewAllStudents/>}/>
<Route path='/add-admin' element={<AddAdmin/>}/>
<Route path='/view-admins' element={<ViewAdmins/>}/>





      </Routes>


<ToastContainer/>

      </Router>
      
    </div>
  );
}

export default App;
