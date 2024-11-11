function getTrendText(number){
    let numberToString = number?.toString()
    if(numberToString[0] === "-"){
        return "down"
    }
    return "up"
}

function formatTrendValue(number){
    let numberToString = number?.toString()
    if(numberToString[0] === "-"){
       return parseFloat(numberToString.slice(1)).toFixed(2)
    }
    return parseFloat(numberToString).toFixed(2)
}

function formatLargeNumber(number){
    if(number < 1000000){
        return number
    }
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(number);
}

export { getTrendText, formatTrendValue, formatLargeNumber }