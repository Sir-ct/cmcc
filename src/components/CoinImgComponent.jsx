function  CoinImgComponent({coinId}){
    return(
        <div className="coin-tab-img-cont">
            <img width={"100%"} src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`} />
        </div>
    )
}

export default CoinImgComponent