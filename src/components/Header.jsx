import { useState } from "react"
import SearchModal from "./SearchModal"

function Header({showSecondaryHeader=true}){
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

    function openSearchModal(){
        setIsSearchModalOpen(true)
    }

    function closeSearchModal(){
        setIsSearchModalOpen(false)
    }

    return(
        <>
            <div className="global-nav">
                <div className="main-nav">
                    <div className="main-nav-left">
                        <div className="logo-wrap">
                            <a href="/"><svg width="168" height="29" fill="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 29"><path d="M28.442 14.445v-.056C28.414 6.466 22.032 0 14.221 0S0 6.466 0 14.445c0 7.98 6.381 14.433 14.221 14.433a13.978 13.978 0 0 0 9.66-3.866 1.309 1.309 0 0 0-1.766-1.933l-.028.028a11.5 11.5 0 0 1-16.572-.755l6.075-9.742v4.508c0 2.154.84 2.855 1.546 3.051.706.196 1.765.054 2.912-1.765l3.333-5.412c.089-.158.192-.308.306-.449v2.745c0 2.015.812 3.639 2.211 4.422a4.071 4.071 0 0 0 4.173-.167c1.616-1.049 2.484-2.886 2.371-5.098Zm-3.696 2.835a1.529 1.529 0 0 1-1.546.111c-.56-.335-.897-1.09-.897-2.126v-3.173c0-1.51-.588-2.603-1.595-2.881-1.709-.516-2.995 1.595-3.472 2.379l-3.015 4.842V10.47c-.028-1.371-.477-2.183-1.317-2.436-.56-.167-1.4-.082-2.211 1.15L3.946 19.989a11.971 11.971 0 0 1-1.371-5.544c0-6.523 5.234-11.814 11.646-11.814 6.412 0 11.646 5.291 11.646 11.814v.057c.067 1.258-.337 2.268-1.12 2.77v.008ZM48.263 9.518a1.407 1.407 0 0 1 .645 1.092 1.24 1.24 0 0 1-1.204 1.232 2.062 2.062 0 0 1-.449-.085 4.61 4.61 0 0 0-2.716-.922c-2.379 0-4.002 1.93-4.002 4.337s1.652 4.312 4.002 4.312a4.34 4.34 0 0 0 3.023-1.232c.206-.145.45-.223.701-.224a1.134 1.134 0 0 1 .99 1.709c-.097.17-.235.315-.402.42a6.647 6.647 0 1 1-4.283-11.758c1.318-.02 2.61.37 3.695 1.119ZM54.925 12.309a4.745 4.745 0 0 0-4.765 4.71 4.82 4.82 0 0 0 4.76 4.79c2.464 0 4.564-2.212 4.564-4.79 0-2.576-2.067-4.71-4.559-4.71Zm-.028 7.167c-1.175 0-2.155-1.064-2.155-2.436 0-1.427.98-2.296 2.155-2.296 1.093 0 2.015.897 2.015 2.296 0 1.4-.922 2.444-2.015 2.444v-.008ZM61.056 20.352v-6.608a1.29 1.29 0 0 1 1.289-1.314 1.306 1.306 0 0 1 1.289 1.314v6.608a1.306 1.306 0 0 1-1.289 1.315 1.328 1.328 0 0 1-1.289-1.315ZM60.86 9.938a1.505 1.505 0 0 1 1.485-1.547 1.528 1.528 0 0 1 1.51 1.547 1.497 1.497 0 0 1-2.994 0ZM68.559 16.77v3.582a1.289 1.289 0 1 1-2.578 0v-6.915a.994.994 0 1 1 1.988 0 3.738 3.738 0 0 1 2.835-1.12c2.577 0 3.724 1.932 3.724 4.144v3.891a1.289 1.289 0 1 1-2.578 0V16.77c0-1.121-.139-2.062-1.763-2.062-1.146 0-1.623.951-1.623 2.062h-.005ZM82.865 18.141a.835.835 0 0 1-.673-.338l-2.995-3.247v5.796a1.289 1.289 0 1 1-2.577 0V8.873a.546.546 0 0 1 .477-.335.9.9 0 0 1 .56.335l4.788 5.376a.624.624 0 0 0 .42.258.701.701 0 0 0 .42-.258l4.786-5.376a.843.843 0 0 1 .559-.335.49.49 0 0 1 .477.335v11.48a1.29 1.29 0 0 1-1.289 1.314 1.307 1.307 0 0 1-1.288-1.315v-5.796l-2.998 3.247a1.031 1.031 0 0 1-.67.338h.003ZM107.08 14.698h-.281c-1.623.082-1.93 1.008-1.93 2.062v3.582a1.29 1.29 0 0 1-1.289 1.289 1.29 1.29 0 0 1-1.288-1.29v-6.903a.997.997 0 0 1 .995-.995.996.996 0 0 1 .994.995c.951-.897 1.735-1.093 2.518-1.122h.258a1.207 1.207 0 0 1 1.175 1.204 1.18 1.18 0 0 1-1.147 1.178h-.005ZM117.018 19.736c.118.185.186.397.196.616a1.346 1.346 0 0 1-1.289 1.289c-.446 0-.84-.338-1.147-.73l-2.966-3.448v2.86a1.288 1.288 0 0 1-2.577 0V9.828a1.287 1.287 0 0 1 2.199-.911c.242.241.378.57.378.91v6.55l2.966-3.274c.307-.337.673-.7 1.119-.7a1.289 1.289 0 0 1 1.232 1.26 1.09 1.09 0 0 1-.168.587l-2.35 2.577 2.407 2.913v-.003ZM132.584 21.78h-.701c-1.959 0-3.108-.869-3.108-3.92v-3.162h-.67a1.19 1.19 0 1 1 0-2.382h.66V9.881a1.282 1.282 0 0 1 .789-1.214c.158-.066.328-.1.499-.1a1.311 1.311 0 0 1 1.289 1.314v2.428h1.062a1.185 1.185 0 0 1 1.149 1.203 1.222 1.222 0 0 1-1.149 1.178h-1.062v2.66c0 1.763.082 2.126.866 2.126h.366a1.152 1.152 0 0 1 1.147 1.15 1.174 1.174 0 0 1-1.147 1.147l.01.007ZM145.04 9.518a1.41 1.41 0 0 1 .644 1.092 1.239 1.239 0 0 1-1.204 1.232 2.135 2.135 0 0 1-.448-.085 4.597 4.597 0 0 0-2.714-.922c-2.381 0-4.005 1.93-4.005 4.337s1.652 4.312 4.005 4.312a4.34 4.34 0 0 0 3.023-1.232c.205-.144.449-.222.699-.224a1.143 1.143 0 0 1 .816.332 1.134 1.134 0 0 1 .176 1.378 1.184 1.184 0 0 1-.405.418 6.639 6.639 0 0 1-5.978 1.3 6.642 6.642 0 0 1-4.853-7.268 6.642 6.642 0 0 1 6.548-5.789 6.27 6.27 0 0 1 3.696 1.119ZM98.99 12.402a.982.982 0 0 0-.982 1.007l-.054.31a4.026 4.026 0 0 0-2.997-1.428c-2.518 0-4.337 2.126-4.337 4.7 0 2.575 1.79 4.789 4.198 4.789 1.008 0 2.603-.449 3.108-1.428l.057.307a.964.964 0 0 0 1.007.982 1.006 1.006 0 0 0 1.008-1.008v-7.216a1.03 1.03 0 0 0-1.008-1.015Zm-3.752 7.082c-1.147 0-2.044-1.09-2.044-2.436 0-1.345.923-2.32 2.044-2.32 1.12 0 2.129.923 2.129 2.32 0 1.397-.982 2.436-2.13 2.436ZM126.425 16.824c-.057-2.884-1.933-4.508-4.423-4.508-3.092 0-4.397 2.24-4.397 4.817 0 3.276 2.158 4.675 4.761 4.675.979 0 2.015-.141 2.798-.729a1.135 1.135 0 0 0 .56-.923 1.057 1.057 0 0 0-1.031-1.064c-.237.002-.469.07-.67.196a4.173 4.173 0 0 1-1.681.335c-.644 0-2.128-.258-2.128-1.791h5.2a1.031 1.031 0 0 0 1.011-1.008Zm-6.217-.65c0-1.09 1.15-1.453 1.848-1.453.699 0 1.848.363 1.876 1.453h-3.724ZM155.31 12.402a.984.984 0 0 0-.703.296.976.976 0 0 0-.277.711l-.056.31a4.02 4.02 0 0 0-2.995-1.428c-2.52 0-4.34 2.126-4.34 4.7 0 2.575 1.804 4.789 4.198 4.789 1.008 0 2.606-.449 3.108-1.428l.057.307a.974.974 0 0 0 .292.708.965.965 0 0 0 .716.274 1.01 1.01 0 0 0 .932-.622c.05-.122.076-.253.076-.386v-7.216a1.032 1.032 0 0 0-1.008-1.015Zm-3.753 7.082c-1.118 0-2.043-1.09-2.043-2.436 0-1.345.897-2.32 2.043-2.32 1.147 0 2.129.923 2.129 2.32 0 1.397-.974 2.436-2.123 2.436h-.006ZM163.657 12.309a4.14 4.14 0 0 0-3.023 1.232c0-.642-.42-1.119-.979-1.119a1.007 1.007 0 0 0-1.01 1.008v10.863a1.291 1.291 0 0 0 1.288 1.288 1.29 1.29 0 0 0 1.289-1.288v-3.268c.698.53 1.819.755 2.577.773 2.436 0 4.201-2.211 4.201-4.788 0-2.578-1.85-4.701-4.343-4.701Zm-.309 7.167c-1.147 0-2.126-1.03-2.126-2.435s.979-2.32 2.126-2.32c1.147 0 2.044.923 2.044 2.32 0 1.352-.894 2.443-2.044 2.443v-.008Z"></path></svg></a>
                        </div>
                        <div className="left-nav-items-wrap">
                            <div className="left-nav-item">
                                <a href="">Cryptocurrencies</a>
                            </div>
                            <div className="left-nav-item">
                                <a href="">DexScan</a>
                            </div>
                            <div className="left-nav-item">
                                <a href="">Exchanges</a>
                            </div>
                            <div className="left-nav-item">
                                <a href="">Community</a>
                            </div>
                            <div className="left-nav-item">
                                <a href="">Products</a>
                            </div>
                        </div>
                    </div>
                    <div className="main-nav-right">
                        <div className="right-nav-btns-wrap">
                            <div className="right-nav-btns">
                                <a>
                                    <svg height="1.5em" width="1.5em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#cccccc" stroke="#cccccc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M326.628,36.841C203.89-11.574,65.143,48.678,16.728,171.416s11.837,261.485,134.575,309.9s261.485-11.837,309.9-134.575 c11.012-27.916,16.665-57.658,16.665-87.668H238.965L326.628,36.841z"></path> <path d="M369.568,35.233c72.309,34.362,120.439,105.082,125.875,184.956H296.599L369.568,35.233 M360.769,13.955L273.09,236.187H512c-0.011-98.101-59.985-186.226-151.24-222.232L360.769,13.955z"></path> </g></svg>
                                    Portfolio
                                </a>
                            </div>
                            <div className="right-nav-btns">
                                <a>
                                    <svg height="1.5em" width="1.5em" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#cccccc" stroke="#cccccc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#cccccc" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"></path> </g></svg>
                                    Watchlist
                                </a>
                            </div>
                        </div>
                        <div onClick={openSearchModal} className="search-bar">
                            <div className="search-logo-text">
                                <svg height="1em" width="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                search
                            </div>
                            <div className="search-stroke-box">/</div>
                        </div>
                        <div className="login-btn">
                            Log in
                        </div>
                        <div className="user-dropdown-wrap">
                            <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" className="sc-65e7f566-0 dwXxBE c-i" loading="lazy" decode="async" priority="low"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99841 6.00348C1.99841 5.45119 2.44613 5.00348 2.99841 5.00348H21.0017C21.554 5.00348 22.0017 5.45119 22.0017 6.00348C22.0017 6.55576 21.554 7.00348 21.0017 7.00348H2.99841C2.44613 7.00348 1.99841 6.55576 1.99841 6.00348ZM1.99841 12C1.99841 11.4477 2.44613 11 2.99841 11H21.0017C21.554 11 22.0017 11.4477 22.0017 12C22.0017 12.5523 21.554 13 21.0017 13H2.99841C2.44613 13 1.99841 12.5523 1.99841 12ZM2.99841 16.9965C2.44613 16.9965 1.99841 17.4442 1.99841 17.9965C1.99841 18.5488 2.44613 18.9965 2.99841 18.9965H21.0017C21.554 18.9965 22.0017 18.5488 22.0017 17.9965C22.0017 17.4442 21.554 16.9965 21.0017 16.9965H2.99841Z" fill="currentColor"></path></svg>
                            <div>
                                <img loading="lazy" decoding="async" fetchpriority="low" src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default-avatar.png" />
                            </div>
                        </div>
                    </div>
                    <div className="mobile-right-nav">
                        <div>
                            <svg height="1.5em" width="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <div className="diamond-img-wrap">
                            <img width={'100%'} src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg" />
                        </div>
                        <div>
                            <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" className="sc-65e7f566-0 dwXxBE c-i" loading="lazy" decode="async" priority="low"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.99841 6.00348C1.99841 5.45119 2.44613 5.00348 2.99841 5.00348H21.0017C21.554 5.00348 22.0017 5.45119 22.0017 6.00348C22.0017 6.55576 21.554 7.00348 21.0017 7.00348H2.99841C2.44613 7.00348 1.99841 6.55576 1.99841 6.00348ZM1.99841 12C1.99841 11.4477 2.44613 11 2.99841 11H21.0017C21.554 11 22.0017 11.4477 22.0017 12C22.0017 12.5523 21.554 13 21.0017 13H2.99841C2.44613 13 1.99841 12.5523 1.99841 12ZM2.99841 16.9965C2.44613 16.9965 1.99841 17.4442 1.99841 17.9965C1.99841 18.5488 2.44613 18.9965 2.99841 18.9965H21.0017C21.554 18.9965 22.0017 18.5488 22.0017 17.9965C22.0017 17.4442 21.554 16.9965 21.0017 16.9965H2.99841Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="secondary-nav" style={{display: showSecondaryHeader === false && "none"}}>
                    <div className="secondary-nav-left">
                        <div className="secondary-left-items">
                            Cryptos: <span className="value-blue">2.4M+</span>
                        </div>
                        <div className="secondary-left-items">
                            Exchanges: <span className="value-blue">749</span>
                        </div>
                        <div className="secondary-left-items">
                            Market Cap: <span className="value-blue">$2.44T</span>
                        </div>
                        <div className="secondary-left-items">
                            24h Vol: <span className="value-blue">$103.74B</span>
                        </div>
                        <div className="secondary-left-items">
                            Dominance: <span className="value-blue">BTC: 58.8% ETH: 13.1%</span>
                        </div>
                        <div className="secondary-left-items">
                            Eth Gas: <span className="value-blue">11.59 Gwei</span>
                        </div>
                        <div className="secondary-left-items">
                            Fear & Greed: <span className="value-blue">67/100</span>
                        </div>
                    </div>
                    <div className="secondary-nav-right">
                        <div className="secondary-nav-right-items">
                            Get Listed
                        </div>
                        <div className="secondary-nav-right-items">
                            Api
                        </div>
                    </div>
                </div>
            </div>
            <SearchModal showModal={isSearchModalOpen} closeSearchModal={closeSearchModal} />
        </>
    )
}

export default Header