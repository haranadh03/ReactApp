import { Link,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'

function navbar(){
    return (
        <>
            <Link to="/Home">Home</Link>
            <Link to="/Contact">contact</Link>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/Contact" element={<Contact />}/>
            </Routes>
        </>
    )
}
export default navbar