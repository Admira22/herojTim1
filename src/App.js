import './App.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WelcomePage from "./registeredUser/WelcomePage";
import Blog from "./registeredUser/Blog";
import Lesson1 from "./registeredUser/Lesson1";
import ListOfLessons from "./registeredUser/ListOfLessons";
import Header from "./registeredUser/Header";
import AllLessons from "./registeredUser/AllLessons";
import Blogs from "./registeredUser/Blogs";
import Profile from "./registeredUser/Profile";

function App() {

  const theme = createTheme({
      palette:{
          primary:{
              main: "#f44336",
              light: "#e57373",
              dark: "#b71c1c",
              contrastText: "#ffebee"
          },
          secondary:{
              main: "#3f51b5",
              light: "#7986cb",
              dark: "#1a237e",
              contrastText: "#e8eaf6"
          }
      },

  });

  // function callPostMethod(){
  //     axios.post("http://127.0.0.1:8000/", {
  //         firstName: 'Ime',
  //         lastName: 'Prezime'
  //     }).then(
  //         (response) =>{
  //         console.log(response)
  //     },
  //         (error) => {
  //             console.log(error)
  //         }
  //         )
  // }
  // function getListaPitanja(){
  //     axios.get('http://127.0.0.1:8000/pitanja/')
  //         .then(r =>{
  //             console.log(r)
  //         })
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<WelcomePage/>}/>
              <Route path="/Logo" element={<WelcomePage/>}/>
              <Route path="/Profil" element={<Profile/>}/>
              <Route path="/Blog" element={<Blogs/>}/>
              <Route path="/Lekcije" element={<AllLessons/>}/>
              <Route path="/Lekcija/1" element={<Lesson1/>}/>
          </Routes>
      </BrowserRouter>
      {/*  <button onClick={callPostMethod}>post metod</button>*/}
      {/*  <button onClick={getListaPitanja}>get method</button>*/}
    </ThemeProvider>
  );
}

export default App;
