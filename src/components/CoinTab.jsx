import { Sparklines, SparklinesLine } from "react-sparklines"
import UptrendComponent from "./UptrendComponent"
import { formatTrendValue, getTrendText } from "../utilities/helperFunctions"

function CoinTab({data, index}){
    console.log("data", data)
    return(
        <div className="coin-tab">
                    <div className="coin-name-img-currency">
                        <div className="coin-name-img">
                            <span>{index + 1 || 1}</span>
                            <div className="coin-tab-img-cont">
                                <img width={"100%"} src={data.logo} />
                            </div>
                            <p>{data.name}</p>
                        </div>
                        
                        <p className="ct-currency">
                            ${data.price}
                        </p>
                    </div>
                    <div className="coin-chart">
                        <div>
                            <Sparklines data={[5, 10, 5, 20, 25, 22, 10, 5, 8, 12, 30, 1]} svgWidth={60} svgHeight={17} >
                                <SparklinesLine color="green" style={{fill: "none", strokeWidth: "5px"}} />
                            </Sparklines>
                            <div>
                                <UptrendComponent trend={getTrendText(data.trend)} value={formatTrendValue(data.trend)} fontSize={"12px"} fontWeight={"600"} />
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default CoinTab