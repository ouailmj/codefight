function meaningOfLife(n) {
	var syst = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef"
    var result = 0;
    for(var i = 0 ;i<n.length;i++){
        result += syst.indexOf(n[i])*Math.pow(42,n.length-i-1);
    }
    return result;
}
