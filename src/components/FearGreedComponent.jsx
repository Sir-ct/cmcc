function FearGreedComponent({value}){
    console.log("value in fear greed component", value)
    let normalizedAngle = normalizeAngle(value)

    function normalizeAngle(value){
        const maxValue = 100;
        const maxAngle = 180
        const result = (maxAngle * value) / maxValue
        return result
    }

    function getFGText(val){
        if(val > 59) return "Greed"
        if(val < 50) return "Fear"
        return "Neutral"
    }
    return(
        <div className="metrics">
            <div className="metrics-header">
                <div className="metric-name">
                    <div>Fear & Greed</div>
                    <span><svg width={"12px"} height={"12px"} viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#616e85" stroke="#616e85"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#616e85333]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="#616e85"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#616e85333]"> </path> </g> </g> </g> </g></svg></span>
                </div>
            </div>
            <div className="metrics-body">
                <div className="fg-bar-wrap">
                    <div style={{position: "relative"}}>
                        <div 
                            style={{
                                transform: `rotate(${normalizedAngle}deg)`,
                                transformOrigin: "67.5px 5px"
                            }}
                            className="fg-cursor" 
                        />
                        <div className="fg-text-display">
                            <div style={{fontSize: "20px", fontWeight: 'bold'}}>{value}</div>
                            <div style={{fontSize: '11px', color: "#616E85"}}>{getFGText(value)}</div>
                        </div>
                        <svg width="130" height="80" viewBox="0 0 177 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.32557 89C1.87842 89 -0.116956 87.0063 0.00533754 84.5517C0.699657 70.6157 4.64771 57.0372 11.5298 44.9158C12.7419 42.7809 15.492 42.1788 17.5547 43.5013C19.6173 44.8239 20.2101 47.5697 19.0098 49.7114C13.0232 60.393 9.55721 72.3137 8.87958 84.5522C8.74371 87.006 6.77273 89 4.32557 89Z" fill="#EA3943"/>
                            <path d="M21.6901 37.5722C19.7476 36.0773 19.3713 33.2759 20.955 31.4022C29.8889 20.833 41.1595 12.505 53.8654 7.08455C56.1178 6.12366 58.6688 7.31812 59.5119 9.62535C60.3549 11.9326 59.1699 14.4778 56.9229 15.4512C45.7896 20.2743 35.8966 27.5843 27.9986 36.8236C26.4046 38.6883 23.6325 39.067 21.6901 37.5722Z" fill="#EA8C01"/>
                            <path d="M65.6152 7.63766C64.9496 5.27265 66.3172 2.80197 68.7024 2.25252C82.1656 -0.848809 96.166 -0.74632 109.583 2.55178C111.96 3.13609 113.291 5.62653 112.591 7.98154C111.892 10.3366 109.425 11.6631 107.045 11.092C95.2451 8.26099 82.9557 8.17102 71.1157 10.829C68.7275 11.3651 66.2808 10.0027 65.6152 7.63766Z" fill="#F3D42F"/>
                            <path d="M119.49 10.3811C120.39 8.09582 122.971 6.96602 125.198 7.98336C137.835 13.7542 148.946 22.427 157.633 33.3005C159.165 35.2174 158.711 38.0073 156.729 39.4477C154.746 40.8881 151.985 40.4325 150.443 38.5242C142.759 29.0152 133.005 21.4015 121.933 16.2703C119.711 15.2406 118.59 12.6663 119.49 10.3811Z" fill="#93D900"/>
                            <path d="M159.373 43.3433C161.432 42.0162 164.184 42.6121 165.401 44.7444C172.249 56.7444 176.219 70.1842 176.993 83.9936C177.131 86.4473 175.148 88.4536 172.701 88.4691C170.254 88.4845 168.27 86.503 168.119 84.05C167.372 71.9256 163.888 60.1293 157.931 49.5566C156.726 47.4176 157.313 44.6704 159.373 43.3433Z" fill="#14C784"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FearGreedComponent