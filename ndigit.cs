long nDigits(long n, long a) {

    return Convert.ToInt64(Math.Truncate(n * Math.Log(a)/Math.Log(10)+1));

}
