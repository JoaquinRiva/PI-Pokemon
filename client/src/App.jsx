import Detail from './views/Detail';
import Form from './views/Form';
import Home from './views/Home';
import Landing from './views/Landing';
import {Routes, Route} from "react-router-dom";
import "./index.css"

function App() {

  return (
   <main>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<Home />} />
    <Route path="/detail" element={<Detail />} />
    <Route path="/form" element={<Form />} />



    </Routes>
  </main>
  )
}

export default App
