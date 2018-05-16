def letterPath(m):
    b = (0, '')
    h = len(m) + 1

    def u(o, t=0, s=''):
        nonlocal b
        try:
            e = m[o % h][o // h]
            c = 2**o
            t += c
            if c & t and e != s[-1:]:
                s += e
                b = max((len(s), s), b)
                for d in (-1, 1, -h, h):
                    u(o + d, t, s)
        except:
            o
    if h > 1:
        for i in range(h * len(m[0])):
            u(i)
    return b[1]
