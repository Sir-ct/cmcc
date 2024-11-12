function PricePerformanceComponent({low, high, current}){
    function calculateKnobPosition(l, h, c){
        let result = ((c - l)/(h - l)) * 100
        console.log("knob position", result)
        return result
    }
    return(
        <div className="pp-low-high-bar">
                            <div className="pp-dets">
                                <div>
                                    <div className="pp-dets-label">Low</div>
                                    <div>${low && low}</div>
                                </div>
                                <div>
                                    <div className="pp-dets-label txt-right">High</div>
                                    <div>${high && high}</div>
                                </div>
                            </div>
                            <div className="pp-bar">
                                <div className="pp-bar-slider" style={{width: `${calculateKnobPosition(low, high, current)}%`}}>
                                    <div className="pp-bar-knob" />
                                </div>
                            </div>
                        </div>
    )
}

export default PricePerformanceComponent