function UptrendComponent({trend, fontSize, fontWeight, value}){
    return(
        <span style={{
                color: trend == "up" ? "#16c784" : "#ea3943", 
                fontSize: fontSize || "14px",
                fontWeight: fontWeight || "bold",
                textWrap: 'nowrap'
            }}
        >
            {
                trend == "up" 
                ? 
                <svg direction="up" width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-8de823e4-4 EGyjH"><path d="M7.02831 4H0.971678C0.552295 4 0.342275 3.48908 0.638817 3.19028L3.66714 0.138917C3.85096 -0.0463058 4.14903 -0.0463058 4.33286 0.138917L7.36117 3.19028C7.65774 3.48908 7.44769 4 7.02831 4Z" fill="#16c784"></path></svg>
                :
                <svg direction="down" width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" class="down-arrow"><path d="M7.02831 4H0.971678C0.552295 4 0.342275 3.48908 0.638817 3.19028L3.66714 0.138917C3.85096 -0.0463058 4.14903 -0.0463058 4.33286 0.138917L7.36117 3.19028C7.65774 3.48908 7.44769 4 7.02831 4Z" fill="#ea3943"></path></svg>
            }   
            {value}% 
        </span>
    )
}

export default UptrendComponent