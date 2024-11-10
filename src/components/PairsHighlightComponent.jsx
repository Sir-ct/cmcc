import PairsTab from "./PairsTab"

function PairsHighlightComponet(){
    return(
        <div className="coin-highlight-wrap">
            <div className="coin-highlight-header">
                <div className="coin-header-name">
                    <div>Trending On DexScan</div> 
                    <svg width={"12px"} height={"12px"} viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#616e85" stroke="#616e85"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#616e85333]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="#616e85"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#616e85333]"> </path> </g> </g> </g> </g></svg>
                </div>
                <div className="highlight-coin-tab-wrap">
                    <div className="highlight-coin-tab-item">
                    <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 16C11.3369 13.8621 9.63793 12.1631 7.5 12C9.63793 11.8369 11.3369 10.1379 11.5 8C11.6631 10.1379 13.3621 11.8369 15.5 12C13.3621 12.1631 11.6631 13.8621 11.5 16V16Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.5 19C16.4128 18.3646 16.0239 17.1535 14.5 17C16.0239 16.8465 16.4128 15.6354 16.5 15C16.6535 16.5239 17.8646 16.9128 18.5 17C17.8646 17.0872 16.6535 17.4761 16.5 19Z" fill="#707070"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 19C16.4182 17.9311 15.5689 17.0818 14.5 17C15.5689 16.9182 16.4182 16.0689 16.5 15C16.5818 16.0689 17.4311 16.9182 18.5 17C17.4311 17.0818 16.5818 17.9311 16.5 19Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.5 5C16.6535 6.52394 17.8646 6.91282 18.5 7C17.8646 7.08719 16.6535 7.47606 16.5 9C16.4128 8.3646 16.0239 7.15348 14.5 7C16.0239 6.84652 16.4128 5.6354 16.5 5Z" fill="#707070"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 5C16.4182 6.06887 15.5689 6.91823 14.5 7C15.5689 7.08177 16.4182 7.93113 16.5 9C16.5818 7.93113 17.4311 7.08177 18.5 7C17.4311 6.91823 16.5818 6.06887 16.5 5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <div className="highlight-coin-tab-item">
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.00244 4.70455V9C2.00244 12.3137 4.68873 15 8.00244 15C8.10042 15 8.19784 14.9977 8.29467 14.993C8.55723 15.8766 8.98958 16.6872 9.5539 17.3868L7.22374 19.7156C6.93075 20.0084 6.93061 20.4833 7.22342 20.7763C7.51622 21.0692 7.99109 21.0694 8.28408 20.7766L10.6146 18.4474C11.8152 19.4154 13.3421 19.9949 15.0044 19.9949C18.8696 19.9949 22.0031 16.8615 22.0031 12.9962V7.74756C22.0031 6.78106 21.2196 5.99756 20.2531 5.99756L15.0044 5.99756C14.4209 5.99756 13.8541 6.06896 13.3123 6.2035C12.3069 4.29847 10.3063 3 8.00244 3H3.70699C2.76559 3 2.00244 3.76315 2.00244 4.70455ZM11.6835 17.3792L15.7801 13.2851C16.0731 12.9923 16.0732 12.5174 15.7804 12.2244C15.4876 11.9314 15.0128 11.9313 14.7198 12.2241L10.6226 16.3188C9.92169 15.3958 9.50569 14.2446 9.50569 12.9962C9.50569 9.9594 11.9675 7.49756 15.0044 7.49756H20.2531C20.3911 7.49756 20.5031 7.60949 20.5031 7.74756V12.9962C20.5031 16.0331 18.0412 18.4949 15.0044 18.4949C13.7567 18.4949 12.6062 18.0794 11.6835 17.3792ZM8.00244 4.5C9.65903 4.5 11.1065 5.39514 11.8877 6.72812C10.7891 7.27543 9.85464 8.10307 9.17802 9.11737L7.28032 7.21967C6.98743 6.92678 6.51255 6.92678 6.21966 7.21967C5.92677 7.51256 5.92677 7.98744 6.21966 8.28033L8.45718 10.5179C8.1654 11.2883 8.00569 12.1236 8.00569 12.9962C8.00569 13.1656 8.01171 13.3336 8.02354 13.5L8.00244 13.5C5.51716 13.5 3.50244 11.4853 3.50244 9L3.50244 4.70455C3.50244 4.59158 3.59402 4.5 3.70699 4.5L8.00244 4.5Z" fill="#212121"></path> </g></svg>
                    </div>
                    <div className="highlight-coin-tab-item">
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0002 16C6.24021 16 5.21983 10.2595 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2C13.7837 2 15.2531 2.15709 16.3771 2.34674C17.5159 2.53887 18.0852 2.63494 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7805 10.2595 17.7601 16 12.0002 16Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M19 5L19.9486 5.31621C20.9387 5.64623 21.4337 5.81124 21.7168 6.20408C22 6.59692 22 7.11873 21.9999 8.16234L21.9999 8.23487C21.9999 9.09561 21.9999 9.52598 21.7927 9.87809C21.5855 10.2302 21.2093 10.4392 20.4569 10.8572L17.5 12.5" stroke="#1C274C" stroke-width="1.5"></path> <path d="M4.99994 5L4.05132 5.31621C3.06126 5.64623 2.56623 5.81124 2.2831 6.20408C1.99996 6.59692 1.99997 7.11873 2 8.16234L2 8.23487C2.00003 9.09561 2.00004 9.52598 2.20723 9.87809C2.41441 10.2302 2.79063 10.4392 3.54305 10.8572L6.49994 12.5" stroke="#1C274C" stroke-width="1.5"></path> <path d="M12 17V19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15.5 22H8.5L8.83922 20.3039C8.93271 19.8365 9.34312 19.5 9.8198 19.5H14.1802C14.6569 19.5 15.0673 19.8365 15.1608 20.3039L15.5 22Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 22H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    </div>
                </div>
            </div>
            <div className="coin-highlight-body">
                <PairsTab 
                    data={{
                        main: 'UPONLY', 
                        quote: "SOL", 
                        price: 0.03339,
                        trend: 9999
                    }} 
                    index={0}
                />
                <PairsTab 
                    data={{
                        main: 'ROSSPEPE', 
                        quote: "SOL", 
                        price: 0.001147,
                        trend: 156
                    }}
                    index={1}
                />
                <PairsTab 
                    data={{
                        main: 'POPWIF', 
                        quote: "SOL", 
                        price: 0.0002331,
                        trend: 75.32
                    }}
                    index={2}
                />
                <PairsTab 
                    data={{
                        main: 'MONKEY', 
                        quote: "SOL", 
                        price: 0.005893,
                        trend: -24.26
                    }}
                    index={3}
                />
                
            </div>
        </div>
    )
}

export default PairsHighlightComponet