import { Sparklines, SparklinesLine } from "react-sparklines"
import UptrendComponent from "./UptrendComponent"

function CoinTab({data, index}){
    return(
        <div className="coin-tab">
                    <div className="coin-name-img-currency">
                        <div className="coin-name-img">
                            <span>{index + 1 || 1}</span>
                            <div className="coin-tab-img-cont">
                                <img width={"100%"} src="https://s2.coinmarketcap.com/static/img/coins/64x64/32968.png" />
                            </div>
                            <p>AIC</p>
                        </div>
                        
                        <p className="ct-currency">
                            $0.1313
                        </p>
                    </div>
                    <div className="coin-chart">
                        <div>
                            <Sparklines data={[5, 10, 5, 20, 25, 22, 10, 5, 8, 12, 30, 1]} svgWidth={60} svgHeight={17} >
                                <SparklinesLine color="green" style={{fill: "none", strokeWidth: "5px"}} />
                            </Sparklines>
                            <div>
                                <UptrendComponent value={3.14} fontSize={"12px"} fontWeight={"600"} />
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default CoinTab