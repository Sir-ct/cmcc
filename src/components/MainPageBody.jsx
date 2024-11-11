import CoinHighlightComponent from "./CoinHighlightComponent"
import PairsHighlightComponet from "./PairsHighlightComponent"
import UptrendComponent from "./UptrendComponent"
import MarketCapMetric from "./MarketCapMetric"
import VolumeMetric from "./VolumeMetric"
import FearGreedComponent from "./FearGreedComponent"
import DominanceMetric from "./DominanceMetric"
import LongTab from "./LongTab"
import ShortTab from "./ShortTab"
import CoinListTable from "./CoinListTable"
import TableBottomBar from "./TableBottomBar"

function MainPageBody({coinList, currentPage, listLoading, metrics, fearGreed}){
    console.log("fear-greed", fearGreed)
    return(
        <div className="body-wrap">
            <div className="caption-section">
                <h2>Today's Cryptocurrency Prices by Market Cap</h2>
                <p>The global crypto market cap is $2.43T, a <UptrendComponent value={3.16} /> increase over the last day.</p>
            </div>
            <div className="highlights-wrap">
                <div className="coin-pair-wrap">
                    <CoinHighlightComponent />
                    <PairsHighlightComponet />
                </div>
                <div className="metrics-wrap">
                    <div className="mcap-vmet">
                        <MarketCapMetric marketCap={metrics && metrics.quote.USD.total_market_cap} percentChange={metrics && metrics.quote.USD.total_market_cap_yesterday_percentage_change} />
                        <VolumeMetric volume={metrics && metrics.quote.USD.total_volume_24h} percentChange={metrics && metrics.quote.USD.total_volume_24h_yesterday_percentage_change}  />
                    </div>
                    <div className="fgd-wrap">
                        <FearGreedComponent value={fearGreed} />
                        <DominanceMetric btcDominance={metrics && metrics.btc_dominance} ethDominance={metrics && metrics.eth_dominance} />
                    </div>
                </div>
            </div>
            <div className="coin-list-wrap">
                <div className="coin-list-top-tab">
                    <LongTab />
                    <ShortTab />
                </div>
                <div className="list-table-wrap">
                    <CoinListTable listLoading={listLoading} allCoins={coinList} />
                    <TableBottomBar />
                </div>
            </div>
        </div>
    )
}

export default MainPageBody