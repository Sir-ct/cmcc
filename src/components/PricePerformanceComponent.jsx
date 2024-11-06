function PricePerformanceComponent(){
    return(
        <div className="pp-low-high-bar">
                            <div className="pp-dets">
                                <div>
                                    <div className="pp-dets-label">Low</div>
                                    <div>$0.068715</div>
                                </div>
                                <div>
                                    <div className="pp-dets-label txt-right">High</div>
                                    <div>$0.00001718</div>
                                </div>
                            </div>
                            <div className="pp-bar">
                                <div className="pp-bar-slider">
                                    <div className="pp-bar-knob" />
                                </div>
                            </div>
                        </div>
    )
}

export default PricePerformanceComponent