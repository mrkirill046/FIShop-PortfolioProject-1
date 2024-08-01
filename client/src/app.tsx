import React, {Suspense} from 'react'
import BarLoader from 'react-spinners/BarLoader'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {loader_style, lazyWithDelay, loader_container_style, loader_text_style} from './tools/constants'
import './css/styles.css'

import Header from './components/header'
import Footer from './components/footer'
import MobileNavigation from './components/mobile-navigation'

const Home = lazyWithDelay(() => import('./pages/home'))
const Page404 = lazyWithDelay(() => import('./pages/errors/404'))

export default function App() {
    return (
        <Router>
            <Header/>

            <Suspense fallback={
                <main style={loader_container_style}>
                    <h4 style={loader_text_style}>Загрузка...</h4>
                    <BarLoader cssOverride={loader_style} color='#000'/>
                </main>
            }>

                <Routes>
                    <Route path='/' element={<Home/>}/>

                    <Route path='*' element={<Page404/>}/>
                </Routes>
            </Suspense>

            <Footer/>
            <MobileNavigation/>
        </Router>
    )
}
