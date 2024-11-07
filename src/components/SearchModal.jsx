import CoinImgComponent from "./CoinImgComponent"
import UptrendComponent from "./UptrendComponent"

function SearchModal({showModal=true, closeSearchModal}){
    return(
        <div onClick={()=>{closeSearchModal()}} className="search-modal-wrap" style={{display: showModal===false && "none"}}>
            <div onClick={(e)=>{e.stopPropagation()}} className="search-modal-body">
                <div className="search-head">
                    <div className="sm-li">
                        <svg height="1em" width="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <input placeholder="Search coin, pair, NFT, contract address or exchange" className="search-modal-input" />
                    </div>
                    <div onClick={closeSearchModal} className="search-modal-close">
                        X
                    </div>
                </div>
                <div className="search-modal-trending">
                    <div className="smt-head">
                        Trending Crypto
                        <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="sc-65e7f566-0 eyXrOz c-i TrendingList_trending-icon__xICiH" loading="lazy" decode="async" priority="low"><path d="M11.8802 7.40001C10.7002 5.38668 10.6668 4.00668 10.6668 4.00001C10.6668 3.70668 10.4735 3.44668 10.1935 3.36001C9.9135 3.27334 9.60683 3.38668 9.44683 3.62668L8.99349 4.30001C8.34683 2.30668 7.0935 1.47334 7.02683 1.43334C6.82016 1.30001 6.56016 1.29334 6.34683 1.40668C6.13349 1.52668 6.00016 1.74668 6.00016 1.99334C6.00016 4.57334 5.24683 5.69334 4.52016 6.77334C3.94016 7.64001 3.3335 8.53334 3.3335 9.99334C3.3335 12.5667 5.42683 14.66 8.00016 14.66C10.5735 14.66 12.6668 12.5667 12.6668 9.99334C12.6668 8.88668 12.2468 8.02668 11.8802 7.39334V7.40001ZM8.00016 13.0867C7.5735 12.6 7.3335 11.98 7.3335 11.3267C7.3335 10.6733 7.5735 10.0533 8.00016 9.56668C8.42683 10.0533 8.66683 10.6733 8.66683 11.3267C8.66683 11.98 8.42683 12.6 8.00016 13.0867ZM9.6935 12.8533C9.8935 12.3733 10.0002 11.86 10.0002 11.3333C10.0002 10.08 9.42016 8.91334 8.40683 8.14001C8.16683 7.95334 7.8335 7.95334 7.5935 8.14001C6.58016 8.92001 6.00016 10.08 6.00016 11.3333C6.00016 11.8667 6.1135 12.38 6.30683 12.8533C5.32683 12.2733 4.66683 11.2133 4.66683 10C4.66683 8.94668 5.06683 8.35334 5.62683 7.52668C6.2335 6.62001 6.96016 5.54001 7.2335 3.62001C7.5735 4.18001 7.90016 4.98001 8.00683 6.07334C8.0335 6.35334 8.2335 6.58668 8.50683 6.65334C8.78016 6.72001 9.06683 6.60668 9.22016 6.37334L9.66016 5.71334C9.86016 6.36001 10.1935 7.16668 10.7268 8.08001C11.0268 8.59334 11.3335 9.22001 11.3335 10.0067C11.3335 11.2267 10.6668 12.28 9.6935 12.86V12.8533Z" fill="#FF775F"></path></svg>
                    </div>
                    <div className="smt-body">
                        <div className="smt-body-item">
                            <div className="sid">
                                <div className="sid-name-logo">
                                    <CoinImgComponent coinId={1} />
                                    <div className="sid-name">
                                        <div>Bitcoin</div>
                                        <span>BTC</span>
                                    </div>
                                </div>
                                <div className="cdl-rank">#3</div>
                            </div>
                            <div className="smt-mv">
                                <div>
                                    Mcap: <span>$1.5T</span>
                                </div>
                                <div>
                                    Vol(24h): <span>$64.4B</span>
                                </div>
                            </div>
                            <div className="smt-price">
                                <div>$76,000</div>
                                <UptrendComponent trend={"up"} value={2.34} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal