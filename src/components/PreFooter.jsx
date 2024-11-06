function PreFooter(){
    return(
        <div>
                <div className="pre-footer-wrap">
                    <div className="pre-footer-left">
                        <div>
                            <h1>Stay on top of crypto. All the time, any time.</h1>
                            <p>Please keep me updated by email with the latest crypto news, research findings, reward programs, event updates, coin listings and more information from CoinMarketCap.</p>
                        </div>
                        <div>
                            <input placeholder="Enter your e-mail address" />
                            <button>Submit</button>
                        </div>
                    </div>
                    <div className="footer-img-wrap">
                        <img className="footer-img" src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=97e26c0" />
                    </div>
                </div>
            </div>
    )
}

export default PreFooter