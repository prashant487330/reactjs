import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Insert from "./insert";
import Display from "./display";
import Search from "./search";
import Update from "./update";
import Contact from "./contact";
const App=()=>{
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route path="Home" element={<Home/>}/>
          <Route path="Insert" element={<Insert/>}/>
          <Route path="Contact" element={<Contact/>}/>   
          <Route path="Display" element={<Display/>}/>
          <Route path="Search" element={<Search/>}/>
          <Route path="Update" element={<Update/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;