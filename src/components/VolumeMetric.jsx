import { Sparklines, SparklinesLine } from "react-sparklines"
import UptrendComponent from "./UptrendComponent"
import { formatLargeNumber, formatTrendValue, getTrendText } from "../utilities/helperFunctions"
import { useEffect, useState } from "react";

function VolumeMetric({volume, percentChange}){
    const greenColor = '#16C784'
    const redColor = "#EA3943"
    const [sparklineData, setSparklineData] = useState([])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(()=>{
        let arr = []
        for(let i = 0; i < 50; i++){
            arr.push(getRandomInt(100))
        }
        setSparklineData(arr)
    }, [])

    console.log('generated sparkline', sparklineData)
    return(
        <div className="metrics">
            <div className="metrics-header">
                <div className="metric-name">
                    <div>Volume</div>
                    <svg width={"12px"} height={"12px"} viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#616e85" stroke="#616e85"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#616e85333]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="#616e85"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#616e85333]"> </path> </g> </g> </g> </g></svg>
                </div>
            </div>
            <div className="metrics-body">
                <div className="metrics-money">${formatLargeNumber(volume)}</div>
                <div className="metrics-trend">
                    <UptrendComponent trend={percentChange && getTrendText(percentChange)} value={percentChange && formatTrendValue(percentChange)} fontSize="12px" />
                </div>
                <Sparklines data={sparklineData} svgWidth={120} svgHeight={39}>
                    <SparklinesLine color={percentChange && getTrendText(percentChange) === "up" ? greenColor : redColor} style={{fill: "none", strokeWidth: "4px"}} />
                </Sparklines>
            </div>
        </div>
    )
}

export default VolumeMetric