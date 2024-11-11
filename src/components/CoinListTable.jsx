import { formatTrendValue, getTrendText } from "../utilities/helperFunctions"
import CoinImgComponent from "./CoinImgComponent"
import TableSkeleton from "./Skeletons/TableSkeleton"
import UptrendComponent from "./UptrendComponent"

function CoinListTable({allCoins, listLoading}){
    console.log(allCoins)
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
                    {
                        listLoading ?
                        <TableSkeleton />
                        :
                        allCoins.length > 0 ? allCoins.map((coin, i)=>{
                            let trend1h = getTrendText(coin?.quote?.USD?.percent_change_1h)
                            let value1h = formatTrendValue(coin?.quote?.USD?.percent_change_1h)

                            let trend24h = getTrendText(coin?.quote?.USD?.percent_change_24h)
                            let value24h = formatTrendValue(coin?.quote?.USD?.percent_change_24h)

                            let trend7d = getTrendText(coin?.quote?.USD?.percent_change_7d)
                            let value7d = formatTrendValue(coin?.quote?.USD?.percent_change_7d)
                            return(
                                <tr style={{textAlign: 'right'}} onClick={()=>{window.location.assign(`/currencies/${coin.slug}`)}}>
                                    <td></td>
                                    <td>{i+1}</td>
                                    <td style={{display: "flex", gap: '15px', alignItems: 'center'}}>
                                        <CoinImgComponent coinId={coin.id} />
                                        <div>
                                            {coin.name} <span style={{color: '#616e85', marginLeft: '5px'}}>{coin.symbol}</span>
                                        </div>
                                    </td>
                                    <td>${
                                            coin.quote.USD.price >= 1
                                            ?
                                            parseFloat(coin.quote.USD.price.toFixed(2)).toLocaleString()
                                            :
                                            parseFloat(coin.quote.USD.price)
                                        }
                                    </td>
                                    <td className="hr">
                                        <UptrendComponent trend={trend1h}  value={value1h} />
                                    </td>
                                    <td>
                                        <UptrendComponent trend={trend24h} value={value24h} />
                                    </td>
                                    <td className="hr">
                                        <UptrendComponent trend={trend7d} value={value7d} />
                                    </td>
                                    <td className="hr">
                                        ${parseFloat(coin.quote.USD.market_cap.toFixed()).toLocaleString()}
                                    </td>
                                    <td className="hr">
                                        ${parseFloat(coin.quote.USD.volume_24h.toFixed()).toLocaleString()}
                                        <div style={{fontSize: '12px', color: '#58667e', marginTop: '5px'}}>{parseFloat((coin.quote.USD.volume_24h / coin.quote.USD.price).toFixed()).toLocaleString()} {coin.symbol}</div>
                                    </td>
                                    <td className="hr">
                                        {parseFloat(coin.circulating_supply.toFixed()).toLocaleString()} {coin.symbol}
                                    </td>
                                    <td className="hr">
                                        <img src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${coin.id}.svg`} alt="bitcoin-7d-price-graph" class={`sc-7b3ac367-0 jUcYyN ${getTrendText(coin.quote.USD.percent_change_7d) === "up" && "isUp"}`} loading="lazy" />
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <></>
                    }
                </tbody>
                
            </table>
        </div>
    )
}

export default CoinListTable