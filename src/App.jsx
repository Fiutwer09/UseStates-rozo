import { Route, Routes } from "react-router-dom"
import { ExamenInputs } from "./Pages/ExamenInputs/ExamenInputs"
import { Saludo } from "./Pages/Saludo/Saludo"
import { Calculadora } from "./Pages/Calculadora/Calculadora"
import { PagesColor } from "./Pages/PagesColor/PagesColor"
import { ContactUs } from "./Pages/ContactUs/ContactUs"
import { NotFound } from "./Pages/NotFound/NotFound"
import { ListTask } from "./Pages/ListTask/ListTask"
export function App() {
  return (
    <>
    <Routes>
    <Route path = '/' element= {<ExamenInputs/>}/>
    <Route path = '/Saludo' element= {<Saludo/>}/>
    <Route path = '/Calculadora' element = {<Calculadora/>}/>
    <Route path = '/Random' element = {<PagesColor/>}/>
    <Route path = '/Form' element = {<ContactUs/>}/>
    <Route path = '/Task' element = {<ListTask/>}/>
    <Route path='*' element= {<NotFound/>}/>
    </Routes>
    </>
  )
}


