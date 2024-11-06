import CoinImgComponent from "./CoinImgComponent"
import UptrendComponent from "./UptrendComponent"

function CoinListTable(){

    return(
        <div style={{overflowX: "scroll", scrollbarWidth: 'thin'}}>
            <table>
                <thead>
                    <tr style={{textAlign: 'right'}}>
                        <th></th>
                        <th>#</th>
                        <th style={{width: "20%", textAlign: "left"}}>Name</th>
                        <th>Price</th>
                        <th className="hr">1h%</th>
                        <th>24%</th>
                        <th className="hr">7d%</th>
                        <th className="hr">Market Cap</th>
                        <th className="hr">Volume(24h)</th>
                        <th className="hr">Circulating Supply</th>
                        <th className="hr">Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{textAlign: 'right'}} onClick={()=>{window.location.assign(`/currencies/bitcoin`)}}>
                        <td></td>
                        <td>1</td>
                        <td style={{display: "flex", gap: '15px', alignItems: 'center'}}>
                            <CoinImgComponent imagesrc={"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"} />
                            <div>
                                Bitcoin <span style={{color: '#616e85', marginLeft: '5px'}}>BTC</span>
                            </div>
                        </td>
                        <td>$69,343.47</td>
                        <td className="hr">
                            <UptrendComponent trend={"up"}  value={0.15} />
                        </td>
                        <td>
                            <UptrendComponent trend={"down"} value={1.60} />
                        </td>
                        <td className="hr">
                            <UptrendComponent trend={"up"} value={0.23} />
                        </td>
                        <td className="hr">
                            $1,367,393,533,273
                        </td>
                        <td className="hr">
                            $50,640,008,565
                            <div style={{fontSize: '12px', color: '#58667e', marginTop: '5px'}}>729,780 BTC</div>
                        </td>
                        <td className="hr">
                            19,776,412 BTC
                        </td>
                        <td className="hr">
                            <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg" alt="bitcoin-7d-price-graph" class="sc-7b3ac367-0 jUcYyN" loading="lazy" />
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}

export default CoinListTable