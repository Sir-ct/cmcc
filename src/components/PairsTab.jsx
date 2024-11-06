import { Sparklines, SparklinesLine } from "react-sparklines"
import UptrendComponent from "./UptrendComponent"

function PairsTab({data, index}){
    return(
        <div className="coin-tab">
                    <div className="coin-name-img-currency">
                        <div className="coin-name-img">
                            <span>{index + 1 || 1}</span>
                            <div className="coin-tab-img-cont">
                                <img width={"100%"} src="https://s2.coinmarketcap.com/static/img/coins/64x64/32968.png" />
                            </div>
                            <p>AIC/SOL</p>
                        </div>
                        
                        <p className="ct-currency">
                            $0.1313
                        </p>
                    </div>
                    <div className="coin-chart">    
                        <div>
                            <UptrendComponent value={3.14} fontSize={"12px"} fontWeight={"600"} />
                        </div>
                    </div>
                </div>
    )
}

export default PairsTab