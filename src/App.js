import './App.css';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WelcomePage from "./registeredUser/WelcomePage";
import Blog from "./registeredUser/Blog";
import Lesson1 from "./registeredUser/Lesson1";
import AllLessons from "./registeredUser/AllLessons";
import Blogs from "./registeredUser/Blogs";
import Profile from "./registeredUser/Profile";
import Questions from "./registeredUser/Questions";
import SignUp from "./login/SignUp";
import SignIn from "./login/SignIn";
import {AuthProvider} from "./context/AuthContext";
import Test from "./registeredUser/Test";
import Home from "./unregisteredUser/Home";
import HeartAttack from "./unregisteredUser/HeartAttack";
import FirstAid from "./unregisteredUser/FirstAid";
import Certifikat from "./registeredUser/Certifikat";


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


    //let user = useContext(AuthContext)
    return (
      <div className="App">
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/heartattack" element={<HeartAttack/>} />
                      <Route path="/bolest/:id" element={<FirstAid/>}/>
                      <Route path="/signUp" element={<SignUp />} />
                  </Routes>
                  <AuthProvider>
                  <Routes>
                          <Route path="/login" element={<SignIn />} />
                          <Route path="/Logo" element={<WelcomePage />} />
                          <Route path="/Profil" element={<Profile />} />
                          <Route path="/Blog" element={<Blogs/>} />
                          <Route path="/Blog/:id" element={<Blog />} />
                          <Route path="/Lekcije" element={<AllLessons />} />
                          <Route path="/Lekcija/:id" element={<Lesson1 />} />
                          <Route path="/pitanja/:id" element={<Questions />} />
                          <Route path="/Test" element={<Test/>}/>
                          <Route path="/certifikat" element={<Certifikat/>}/>

                  </Routes>
                  </AuthProvider>
              </BrowserRouter>
            </ThemeProvider>
      </div>
  );
}

export default App;
