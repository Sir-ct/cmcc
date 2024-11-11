import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";
import Header from "../components/Header";
import PricePerformanceComponent from "../components/PricePerformanceComponent";
import UptrendComponent from "../components/UptrendComponent";
import CoinImgComponent from "../components/CoinImgComponent";
import SentimentComponent from "../components/SentimentComponent";
import axios from "axios"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { formatLargeNumber, formatTrendValue, getTrendText } from "../utilities/helperFunctions";

const baseUrl = "https://cmcc-proxy.onrender.com"

function CurrencyDetailsPage(){
   const {currency} = useParams()
   const [coinDets, setCoinDets] = useState("")

   const differenceArr = [
    {
        cmc: 'binance',
        gecko: 'binanceCoin'
    },
    {
        cmc: 'toncoin',
        gecko: 'the-open-network'
    },
    {
        cmc: 'quant',
        gecko: 'quant-network'
    }
   ]

   async function getCoinDets(){
        try{
            let details = await axios.get(`${baseUrl}/coins/${currency}`)
            console.log(details)
            setCoinDets(details.data.data)
        }catch(err){
            console.log(err)
        }
    }

    async function copyText(text){
        await window.navigator.clipboard.writeText(text)
        console.log('text copied', text)
    }

console.log("coin details", coinDets)
   useEffect(()=>{
        getCoinDets()
   }, [])
    
    return(
        <>
            <Header showSecondaryHeader={false} />
            <div className="currency-details-wrap">
                <div className="currency-details-left">
                    <div className="cdl-head">
                        <div className="cdl-title">
                            <CoinImgComponent url={coinDets?.image?.small} />
                            {coinDets?.name}
                            <span>{coinDets?.symbol}</span>
                            <div className="cdl-rank">#{coinDets?.market_cap_rank}</div>
                        </div>
                        <div className="cdl-head-btns">
                            <div>
                                <svg width={'1em'} height={'1em'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#808A9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                {coinDets && coinDets?.developer_data.stars}
                            </div>
                            <div>
                                <svg width={'1em'} height={'1em'} fill="#808A9D" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#808A9D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M27 22c-1.646 0-3.103 0.8-4.013 2.028l-13.168-6.71c0.114-0.421 0.181-0.86 0.181-1.317 0-0.572-0.101-1.119-0.277-1.63l13.242-6.426c0.909 1.244 2.375 2.056 4.035 2.056 2.762 0 5-2.239 5-5s-2.238-5-5-5-5 2.239-5 5c0 0.388 0.049 0.764 0.133 1.127l-13.432 6.518c-0.915-1.009-2.231-1.646-3.7-1.646-2.761 0-5 2.239-5 5s2.239 5 5 5c1.59 0 3.004-0.744 3.92-1.902l13.222 6.739c-0.090 0.374-0.142 0.762-0.142 1.163 0 2.761 2.238 5 5 5s5-2.239 5-5-2.238-5-5-5zM27 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM5 19c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.344 3 3s-1.343 3-3 3zM27 30c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path> </g></svg>
                            </div>
                        </div>
                    </div>
                    <div className="cdl-price">
                        <div>${coinDets && coinDets?.market_data?.current_price?.usd.toLocaleString()}</div> 
                        <UptrendComponent trend={coinDets && getTrendText(coinDets?.market_data?.price_change_percentage_24h)} value={coinDets && formatTrendValue(coinDets?.market_data?.price_change_percentage_24h)} />
                    </div>
                    <div className="cdl-stats">
                        <div className="cdl-stat-card">
                            <div className="csc-head">Market cap</div>
                            <div className="csc-dets">
                                ${coinDets && coinDets?.market_data?.market_cap.usd === 0 ? formatLargeNumber(90702675) : formatLargeNumber(coinDets?.market_data?.market_cap?.usd)} <UptrendComponent trend={coinDets && getTrendText(coinDets?.market_data.market_cap_change_percentage_24h)} value={coinDets && formatTrendValue(coinDets?.market_data?.market_cap_change_percentage_24h)} />
                            </div>
                        </div>
                        <div className="cdl-stat-card">
                            <div className="csc-head">Volume(24h)</div>
                            <div className="csc-dets">
                                $54.84B <UptrendComponent trend={"up"} value={27.83} />
                            </div>
                        </div>
                        <div className="cdl-stat-card">
                            <div className="csc-head">FDV</div>
                            <div className="csc-dets">
                                $122.26B
                            </div>
                        </div>
                        <div className="cdl-stat-card">
                            <div className="csc-head">Vol/Mkt Cap(24h)</div>
                            <div className="csc-dets">
                                45.33%
                            </div>
                        </div>
                        <div className="cdl-stat-card">
                            <div className="csc-head">Total Supply</div>
                            <div className="csc-dets">
                                $122.34B
                            </div>
                        </div>
                        <div className="cdl-stat-card">
                            <div className="csc-head">Max. supply</div>
                            <div className="csc-dets">
                                &infin;
                            </div>
                        </div>
                        <div className="cdl-stat-card">
                            <div className="csc-head">Circulating supply</div>
                            <div className="csc-dets">
                                $120.58B USDT
                            </div>
                        </div>
                    </div>

                    <div className="cdl-metadata">
                        <div className="cdl-metadata-tab">
                            <div className="cdlm-key">Website</div>
                            <div className="cdlm-body">
                                {coinDets && coinDets?.links?.homepage &&
                                    <a href={coinDets?.links?.homepage[0]} className="cdlm-body-item btn-bg">
                                        <svg width={"1em"} height={'1em'} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#808A9D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="96" cy="96" r="74" stroke="#808A9D" stroke-width="12"></circle><ellipse cx="96" cy="96" stroke="#808A9D" stroke-width="12" rx="30" ry="74"></ellipse><path stroke="#808A9D" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M28 72h136M28 120h136"></path></g></svg>
                                        Website
                                    </a>
                                }
                                {
                                    coinDets && coinDets?.links?.whitepaper &&
                                    <a href={coinDets?.links?.whitepaper} className="cdlm-body-item btn-bg">
                                        <svg width={'1em'} height={'1em'} viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#808A9D" stroke="#808A9D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M719.8 651.8m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#808A9D808A9DE73B37"></path><path d="M512.1 64H172v896h680V385.6L512.1 64z m278.8 324.3h-280v-265l280 265zM808 916H216V108h278.6l0.2 0.2v296.2h312.9l0.2 0.2V916z" fill="#808A9D808A9D"></path><path d="M280.5 530h325.9v16H280.5z" fill="#808A9D808A9D"></path><path d="M639.5 530h90.2v16h-90.2z" fill="#808A9D808A9DE73B37"></path><path d="M403.5 641.8h277v16h-277z" fill="#808A9D808A9D"></path><path d="M280.6 641.8h91.2v16h-91.2z" fill="#808A9D808A9DE73B37"></path><path d="M279.9 753.7h326.5v16H279.9z" fill="#808A9D808A9D"></path><path d="M655.8 753.7h73.9v16h-73.9z" fill="#808A9D808A9DE73B37"></path></g></svg>
                                        WhitePaper
                                    </a>
                                }
                                </div>
                            </div>
                        <div className="cdl-metadata-tab">
                            <div className="cdlm-key">Socials</div>
                            <div className="cdlm-body">
                                <div className="cdlm-body-item btn-bg">
                                    <svg width={"1em"} height={'1em'} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#808A9D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="96" cy="96" r="74" stroke="#808A9D" stroke-width="12"></circle><ellipse cx="96" cy="96" stroke="#808A9D" stroke-width="12" rx="30" ry="74"></ellipse><path stroke="#808A9D" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M28 72h136M28 120h136"></path></g></svg>
                                </div>
                            </div>
                        </div>
                        {
                            coinDets && coinDets?.contract_address &&
                            <div className="cdl-metadata-tab">
                                <div className="cdlm-key">Contracts</div>
                                <div className="cdlm-body">
                                    <div className="cdlm-body-item btn-bg">
                                        <svg width={"1em"} height={'1em'} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#808A9D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="96" cy="96" r="74" stroke="#808A9D" stroke-width="12"></circle><ellipse cx="96" cy="96" stroke="#808A9D" stroke-width="12" rx="30" ry="74"></ellipse><path stroke="#808A9D" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M28 72h136M28 120h136"></path></g></svg>
                                        {coinDets && coinDets?.contract_address?.substring(0, 6)} ... {coinDets && coinDets?.contract_address?.substring(coinDets?.contract_address.length - 6)}
                                        <div onClick={()=>{copyText(coinDets?.contract_address)}}>
                                            <svg width={'1em'} height={'1em'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#808A9D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#808A9D" stroke-width="1.5"></path> <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#808A9D" stroke-width="1.5"></path> </g></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="usd-converter-wrap btn-bg">
                        <div>
                            <span>PEPE</span> <input />
                        </div>
                        <div>
                            <span>USD</span> <input />
                        </div>
                    </div>
                    <div className="price-performance-wrap">
                        <div className="pp-head">
                            <div>Price performance</div>
                            <select className="btn-bg">
                                <option value={"24h"}>24h</option>
                                <option value={"30d"}>30d</option>
                                <option value={"52w"}>52w</option>
                            </select>
                        </div>
                        <PricePerformanceComponent />
                        <div className="pp-at">
                            <div>
                                All-time high
                                <span>$0.5701</span>
                            </div>
                            <div>
                                Sep 16, 2021(3 years ago)
                                <span><UptrendComponent fontSize={'11px'} trend={'down'} value={92.52} /></span>
                            </div>
                        </div>
                        <div className="pp-at">
                            <div>
                                All-time low
                                <span>$0.5701</span>
                            </div>
                            <div>
                                Sep 16, 2021(3 years ago)
                                <span><UptrendComponent fontSize={'11px'} trend={'up'} value={325.52} /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="currency-details-middle">
                    <div className="cdm-header">
                        <ul>
                            <li><a href="#chart">Chart</a></li>
                            <li><a href="#market">Markets</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#similar">Similar coins</a></li>
                            <li><a href="#yields">Yields</a></li>
                        </ul>
                    </div>
                    <div id="chart">
                        <div className="chart-top-tab">
                            <div className="ctt-left">
                                <div className="btn-bg">
                                    <span>Price</span>
                                    <span>Market Cap</span>
                                </div>
                                <div className="btn-bg">
                                    <span>
                                        <svg width={'11px'} height={'11px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#808A9D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 16.5L9 10L13 16L21 6.5" stroke="#808A9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    </span>
                                    <span>
                                        <svg width={'11px'} height={'11px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#808A9D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 22V15" stroke="#808A9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.5 5V2" stroke="#808A9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.5 22V19" stroke="#808A9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.5 9V2" stroke="#808A9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.5 7V13C9.5 14.1 9 15 7.5 15H5.5C4 15 3.5 14.1 3.5 13V7C3.5 5.9 4 5 5.5 5H7.5C9 5 9.5 5.9 9.5 7Z" stroke="#808A9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.5 11V17C20.5 18.1 20 19 18.5 19H16.5C15 19 14.5 18.1 14.5 17V11C14.5 9.9 15 9 16.5 9H18.5C20 9 20.5 9.9 20.5 11Z" stroke="#808A9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="ctt-right">
                                <div className="btn-bg">
                                    <span>1D</span>
                                    <span>7D</span>
                                    <span>1M</span>
                                    <span>1Y</span>
                                    <span>All</span>
                                </div>
                            </div>
                        </div>
                        <div className="chart-wrap">
                            <Sparklines data={coinDets && coinDets?.market_data?.sparkline_7d.price}>
                                <SparklinesLine color='#16C784' />
                            </Sparklines>
                        </div>
                    </div>
                </div>
                <div className="currency-details-right">
                    <div className="cdr-header">
                        <div className="cdr-main">
                            <CoinImgComponent />
                            <div className="cdr-main-name">
                                Usd
                                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z" fill="#3861FB"></path> </g></svg>
                            </div>
                            <div className="cdr-main-followers">
                                542.4k Followers
                            </div>
                        </div>
                        <div className="login-btn">
                            + Follow
                        </div>
                    </div>
                    <div className="community-sentiment">
                        <div className="comm-sent-head">
                            <div>
                                <svg width={18} height={18} xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (5da689c313, 2019-01-14)" sodipodi:docname="speed.svg" fill="#808A9D" stroke="#808A9D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"></defs> <sodipodi:namedview id="base" pagecolor="#808A9Dffffff" bordercolor="#808A9D" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="17.866667" inkscape:cx="15" inkscape:cy="15" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="705" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:lockguides="true"> <inkscape:grid type="xygrid" id="grid816"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title></dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path d="m 14.703125,5.5722656 a 12,12 0 0 0 -12,12.0000004 12,12 0 0 0 0.6894531,3.964843 A 10.746539,10.746539 0 0 1 3.0976562,19.09375 10.746539,10.746539 0 0 1 13.84375,8.3476562 10.746539,10.746539 0 0 1 19.826172,10.173828 L 21.966797,8.0332031 A 12,12 0 0 0 14.703125,5.5722656 Z m 9.148437,3.6035156 c -0.25173,0.00423 -0.507325,0.1022801 -0.71875,0.28125 l -9.193359,7.7812498 c -0.422789,0.35795 -1.416166,1.411952 -0.002,2.826172 1.414471,1.41445 2.468093,0.418804 2.826172,-0.0039 l 7.783203,-9.189453 c 0.358051,-0.42275 0.391737,-1.0223328 0,-1.4140628 -0.195869,-0.19587 -0.443582,-0.285475 -0.695313,-0.28125 z m 1.84961,3.6074218 -2.021484,2.021485 A 10.746539,10.746539 0 0 1 24.585938,19 h 2.015624 a 12,12 0 0 0 0.101563,-1.427734 12,12 0 0 0 -1.001953,-4.789063 z" transform="translate(0,289.0625)" id="path4625" inkscape:connector-curvature="0"></path> </g> </g></svg>
                            </div>
                            <div className="csh-name">
                                Community sentiment
                            </div>
                            <div className="csh-votes">
                                5816 votes
                            </div>
                        </div>
                        <SentimentComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrencyDetailsPage