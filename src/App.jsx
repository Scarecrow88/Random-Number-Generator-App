import { useState } from 'react'
import NavBar from './components/navBar.jsx';
import MainContent from './components/form.jsx';
import Footer from './components/footer.jsx';
function App () {
    return (
        <>
            <div className="bodybox">
                <NavBar/>
                <MainContent/>
                <Footer/>
            </div>
        </>
    )
}
export default App
