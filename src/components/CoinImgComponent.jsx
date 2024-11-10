function  CoinImgComponent({coinId, url}){
    return(
        <div className="coin-tab-img-cont">
            <img width={"100%"} src={coinId ? `https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png` : url} />
        </div>
    )
}

export default CoinImgComponent