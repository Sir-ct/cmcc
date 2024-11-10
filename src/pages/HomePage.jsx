import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainPageBody from "../components/MainPageBody";
import PreFooter from "../components/PreFooter";
import axios from 'axios'

const baseUrl = "https://cmcc-proxy.onrender.com"

function HomePage(){
    const [allListings, setAllListings] = useState([])
    const [fearGreed, setFearGreed] = useState(0)


    async function getAllListings(){
        try{
            let listings = await axios.get(baseUrl+"/all-listings")
            console.log(listings.data.data.data)
            setAllListings(listings.data.data.data)
        }catch(err){
            console.log(err)
        }
    }

    async function getFearAndGreed() {
        try{
            let feargreed = await axios.get(baseUrl+"/fear-greed")
            console.log("feargreed:", feargreed)
            setFearGreed(feargreed.data.data.data.value)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllListings()
        getFearAndGreed()
    }, [])
    return(
        <>
            <Header />
            <MainPageBody coinList={allListings} fearGreed={fearGreed} />
            <PreFooter />
            <Footer />
        </>
    )
}

export default HomePage
    