import { Sparklines, SparklinesLine } from "react-sparklines"
import UptrendComponent from "./UptrendComponent"
import { formatTrendValue, getTrendText } from "../utilities/helperFunctions"

function PairsTab({data, index}){
    return(
        <div className="coin-tab">
                    <div className="coin-name-img-currency">
                        <div className="coin-name-img">
                            <span>{index + 1 || 1}</span>
                            <div className="coin-tab-img-cont">
                                <img width={"100%"} src="https://s2.coinmarketcap.com/static/cloud/img/dex/default-icon-day-v3.svg?_=3632236" />
                            </div>
                            <p>{data.main}/{data.quote}</p>
                        </div>
                        
                        <p className="ct-currency">
                            ${data.price}
                        </p>
                    </div>
                    <div className="coin-chart">    
                        <div>
                            <UptrendComponent trend={getTrendText(data.trend)} value={formatTrendValue(data.trend)} fontSize={"12px"} fontWeight={"600"} />
                        </div>
                    </div>
                </div>
    )
}

export default PairsTab