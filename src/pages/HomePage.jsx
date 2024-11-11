import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainPageBody from "../components/MainPageBody";
import PreFooter from "../components/PreFooter";
import axios from 'axios'

const baseUrl = "https://cmcc-proxy.onrender.com"

function HomePage(){
    const [allListings, setAllListings] = useState([])
    const [metrics, setMetrics] = useState(null)
    const [fearGreed, setFearGreed] = useState(0)

    const [listingsLoading, setListingsLoading] = useState(false)


    async function getAllListings(){
        setListingsLoading(true)
        try{
            let listings = await axios.get(baseUrl+"/all-listings")
            console.log(listings.data.data.data)
            setAllListings(listings.data.data.data)
            setListingsLoading(false)
        }catch(err){
            console.log(err)
            setListingsLoading(false)
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

    async function getMetrics(){
        try{
            let metrics = await axios.get(baseUrl+"/metrics")
            console.log("metrics", metrics)
            setMetrics(metrics.data.data.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllListings()
        getFearAndGreed()
        getMetrics()
    }, [])
    return(
        <>
            <Header />
            <MainPageBody listLoading={listingsLoading} metrics={metrics} coinList={allListings} fearGreed={fearGreed} />
            <PreFooter />
            <Footer />
        </>
    )
}

export default HomePage
    