pokerChips2=c=>
{
    sum = 0
    len = c.length
    for(v of c) sum += v
    avg = sum / len
    sum = max = 0
    bcc = {}
    for(v of c) {
        sum += v - avg
        max = Math.max(max, bcc[sum] = -~bcc[sum])
    }
    return len - max
}
