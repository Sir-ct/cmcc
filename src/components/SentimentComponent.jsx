function SentimentComponent(){
    const greenColor = '#16C784'
    const redColor = "#EA3943"
    return(
        <div>
            <div style={{display: "flex", fontSize: 14, fontWeight: '600', width: '100%', alignItems: "center", padding: '5px 0 0 0'}}>
                <div style={{display: "flex", alignItems: 'center', color: '#16C784'}}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#16C784"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 17L9 11L13 15L21 7M21 7V12M21 7H16" stroke="#16C784" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    83%
                </div>
                <div style={{height: 12, borderRadius: 12, backgroundColor: "#EA3943", width: '80%'}}>
                    <div style={{
                        backgroundColor: greenColor, 
                        position: 'relative', 
                        height: 12,
                        borderTopLeftRadius: 6,
                        borderBottomLeftRadius: 6,
                        borderRight: '2px solid white',
                        width: '50%'
                    }}>
                        <div />
                    </div>
                </div>
                <div style={{display: "flex", alignItems: 'center', color: redColor}}>
                    12%
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#EA3943"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 7L9 13L13 9L21 17M21 17V12M21 17H16" stroke="#EA3943" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
            </div>
            <div style={{display: "flex", gap: 10, padding: '10px 0 10px 0'}}>
                <div 
                    style={{
                        width: '45%',
                        fontSize: 14, 
                        fontWeight:'600',
                        color: greenColor,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        padding: 5,
                        borderRadius: 5,
                        justifyContent: 'center',
                        border: `2px solid ${greenColor}`
                    }}
                >
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#16C784"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 17L9 11L13 15L21 7M21 7V12M21 7H16" stroke="#16C784" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    Bullish
                </div>
                <div 
                    style={{
                        width: '45%',
                        fontSize: 14, 
                        fontWeight:'600',
                        color: redColor,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        padding: 5,
                        borderRadius: 5,
                        justifyContent: 'center',
                        border: `2px solid ${redColor}`
                    }}
                >
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#EA3943"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 7L9 13L13 9L21 17M21 17V12M21 17H16" stroke="#EA3943" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    Bearish
                </div>
            </div>
        </div>
    )
}

export default SentimentComponent