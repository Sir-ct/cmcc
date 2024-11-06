import CoinTab from "./CoinTab"
function CoinHighlightComponent(){
    return(
        <div className="coin-highlight-wrap">
            <div className="coin-highlight-header">
                <div className="coin-header-name">
                    <div>Trending Coins</div> 
                    <svg width={"12px"} height={"12px"} viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#616e85" stroke="#616e85"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#616e85333]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="#616e85"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#616e85333]"> </path> </g> </g> </g> </g></svg>
                </div>
                <div className="highlight-coin-tab-wrap">
                    <div className="highlight-coin-tab-item">
                        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" class="sc-65e7f566-0 eyXrOz c-i" loading="lazy" decode="async" priority="low"><path d="M17.82 11.1016C16.05 8.08157 16 6.01157 16 6.00157C16 5.56157 15.71 5.17157 15.29 5.04157C14.87 4.91157 14.41 5.08157 14.17 5.44157L13.49 6.45157C12.52 3.46157 10.64 2.21157 10.54 2.15157C10.23 1.95157 9.84 1.94157 9.52 2.11157C9.2 2.29157 9 2.62157 9 2.99157C9 6.86157 7.87 8.54157 6.78 10.1616C5.91 11.4616 5 12.8016 5 14.9916C5 18.8516 8.14 21.9916 12 21.9916C15.86 21.9916 19 18.8516 19 14.9916C19 13.3316 18.37 12.0416 17.82 11.0916V11.1016ZM12 19.6316C11.36 18.9016 11 17.9716 11 16.9916C11 16.0116 11.36 15.0816 12 14.3516C12.64 15.0816 13 16.0116 13 16.9916C13 17.9716 12.64 18.9016 12 19.6316ZM14.54 19.2816C14.84 18.5616 15 17.7916 15 17.0016C15 15.1216 14.13 13.3716 12.61 12.2116C12.25 11.9316 11.75 11.9316 11.39 12.2116C9.87 13.3816 9 15.1216 9 17.0016C9 17.8016 9.17 18.5716 9.46 19.2816C7.99 18.4116 7 16.8216 7 15.0016C7 13.4216 7.6 12.5316 8.44 11.2916C9.35 9.93157 10.44 8.31157 10.85 5.43157C11.36 6.27157 11.85 7.47157 12.01 9.11157C12.05 9.53157 12.35 9.88157 12.76 9.98157C13.17 10.0816 13.6 9.91157 13.83 9.56157L14.49 8.57157C14.79 9.54157 15.29 10.7516 16.09 12.1216C16.54 12.8916 17 13.8316 17 15.0116C17 16.8416 16 18.4216 14.54 19.2916V19.2816Z" fill="currentColor"></path></svg>
                    </div>
                    <div className="highlight-coin-tab-item">
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.8284 6.75736C12.3807 6.75736 12.8284 7.20507 12.8284 7.75736V12.7245L16.3553 14.0653C16.8716 14.2615 17.131 14.8391 16.9347 15.3553C16.7385 15.8716 16.1609 16.131 15.6447 15.9347L11.4731 14.349C11.085 14.2014 10.8284 13.8294 10.8284 13.4142V7.75736C10.8284 7.20507 11.2761 6.75736 11.8284 6.75736Z" fill="#0F1729"></path> </g></svg>
                    </div>
                    <div className="highlight-coin-tab-item">
                        <svg width="16px" height="16px" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"></path> </g></svg>
                    </div>
                </div>
            </div>
            <div className="coin-highlight-body">
                <CoinTab index={0} />
                <CoinTab index={1} />
                <CoinTab index={2} />
                <CoinTab index={3} />
            </div>
        </div>
    )
}

export default CoinHighlightComponent