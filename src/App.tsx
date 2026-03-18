

// import Package from "./package";
// import Essaie from "./test1";

// function App() {
//   return (
//     <>
//       <Essaie />
//       <Package/>
//     </>
//   );
// }

// export default App;
 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';   
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Form from "./form";
// import Inscription from "./inscription";
// import Success from "./success";
// import Effect from './useEffect';
// import Contact from './contact';
// import Asynchronne from './fonction';  
// import Insertion from './insertion'; 
//  import Admin from './control';     


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/form" element={<Form />} />
//         <Route path="/quoi" element={<Inscription />} />
//         <Route path="/success" element={<Success />} />
//         <Route path="/useEffect" element={<Effect />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/asynchronne" element={<Asynchronne />} />
//         <Route path="/insertion" element={<Insertion />} />
//         {/* <Route path="/control" element={<Admin />} */}
//         <Route path="*" element={<h1 className="text-center mt-5">Inscription reussie!</h1>} />  
//       </Routes>
//     </BrowserRouter>
//   );      
// }

// export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';   
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./form";
import Inscription from "./inscription";
// import Success from "./success";
import Effect from './useEffect';
import Contact from './contact';
import Asynchronne from './fonction';  
import Insertion from './insertion'; 
import Admin from './control';    


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/quoi" element={<Inscription />} />
        {/* <Route path="/success" element={<Success />} /> */}
        <Route path="/useEffect" element={<Effect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/asynchronne" element={<Asynchronne />} />
        <Route path="/insertion" element={<Insertion />} />
        <Route path="/authentification" element={<privateRoute><Admin /></privateRoute>} />
        <Route path="*" element={<h1 className="text-center mt-5">Inscription reussie!</h1>} />  
      </Routes>
    </BrowserRouter>
  );      
}

export default App;