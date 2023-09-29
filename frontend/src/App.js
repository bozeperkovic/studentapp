import './App.css';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PupilForm from './layouts/PupilForm';
import Pupil from './views/Pupil';
import Student from './views/Student';
import ViewPupil from './pupils/ViewPupil';
import ViewStudent from './students/ViewStudent';
 import StudentForm from './layouts/StudentForm';
import Home from "./views/Home";
import EditPupil from "./pupils/EditPupil";
import EditStudent from "./students/EditStudent";
import LoginPage from "./layouts/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route exact path = "/" element = {<Home></Home>}></Route>
            <Route exact path = "/pupilform" element = {<PupilForm></PupilForm>}></Route>
            <Route exact path = "/studentform" element = {<StudentForm></StudentForm>}></Route>
            <Route exact path = "/pupils" element = {<Pupil></Pupil>}></Route>
            <Route exact path = "/editpupil/:id" element = {<EditPupil></EditPupil>}></Route>
            <Route exact path = "/editstudent/:id" element = {<EditStudent></EditStudent>}></Route>
            <Route exact path = "/students" element = {<Student></Student>}></Route>
            <Route exact path = "/viewpupil/:id" element = {<ViewPupil></ViewPupil>}></Route>
            <Route exact path = "/viewstudent/:id" element = {<ViewStudent></ViewStudent>}></Route>
            <Route exact path = "/loginpage" element = {<LoginPage></LoginPage>}></Route>
        </Routes>
      
     </Router>

    </div>
  );
}

export default App;
