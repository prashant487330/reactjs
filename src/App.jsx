import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Insert from "./insert";
import Display from "./display";
import Search from "./search";
import Update from "./update";
import Contact from "./contact";
import MyEdit from "./MyEdit";

const App=()=>{
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path="home" element={<Home/>}/>
          <Route path="insert" element={<Insert/>}/>
          <Route path="contact" element={<Contact/>}/>   
          <Route path="display" element={<Display/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="update" element={<Update/>}/>
          <Route path="myedit/:id" element={<MyEdit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;