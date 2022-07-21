import {Routes,Route} from "react-router-dom"
import { Gettrial } from "../Components/Gettrial"
import Navbar from "../Components/Navbar"
export default function AllRoutes(){

    return<Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/gettrial" element={<Gettrial/>}/>
    </Routes>
}