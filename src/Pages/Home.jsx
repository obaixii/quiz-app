import React from 'react'
import QuizHome from '../Components/Quiz/QuizHome';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import '../App.css';

function Home() {
    return (
        <div>
            <div className="App">
                <Navbar />
                <QuizHome />
                <Footer />
            </div>
        </div>
    )
}

export default Home
