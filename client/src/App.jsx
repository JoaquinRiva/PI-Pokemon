import Detail from './components/Detail';
import Form from './components/Form';
import Home from './components/Home';
import Landing from './components/Landing';
import {Routes, Route} from "react-router-dom";

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
