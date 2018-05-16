int int237(int[] z) {
    int c = 0, b, v, n = -1;
    int[] a = new int[5],
          o = new int[4];
    while (++n < 3125)
    {
        b = 5; v = n;
        while (--b >= 0) { a[b] = v % 5; v /= 5; }

        if (a.Distinct().Count() == 5)
            for(int p=0; p<256; p++) {
                b = 4; v = p;
                while (--b >= 0) { o[b] = v % 4; v /= 4; }

                var d = a.Select(k => (double)z[k]).ToArray();

                for(int i=0; i<4; i++)
                {
                    b = o[i]; v = i + 1;

                    if (b < 2) {
                        if (b < 1) d[v] *= d[i];
                        else d[v] = d[i] / d[v];
                        d[i] = 0;
                    } else if (b < 3) d[v] *= -1;
                }

                if (Math.Round(d.Sum(), 8) == 237) c++;
            }
    }
    return c;
}
