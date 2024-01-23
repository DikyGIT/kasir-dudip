import React from 'react'
import { Inter } from "next/font/google";
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';

const inter = Inter({ subsets: ["latin"] });
const Dashboard = () => {
    return (
        <main className={inter.className}>
            <SideMenu/>
            <Header/>
            <Main/>
            <Footer/>
        </main>
    )
}

export default Dashboard