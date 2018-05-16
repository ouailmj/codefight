import collections as c
import datetime as d

def T(t):
    return d.datetime(1, 1, 1, *(int(x) for x in t.split(':')))

with open('proc.log') as h:
    P = c.defaultdict(dict)
    next(h)
    for line in h:
        p, H, k = line.split('|')
        P[int(p)][k[0]] = T(H)

with open('system.log') as h:
    S, E = list(h)
    c = T(S)
    e = T(E)

l = [0] * 3
a = [.920043902, .983471344, .994459811]

while c < e:
    n = 0
    for p in P.values():
        if p['S'] <= c< p['F']:
            n += 1
    l = [l[i] * a[i] + (1-a[i]) * n for i in (0,1,2)]
    print("%s %.2f %.2f %.2f" % (c.strftime('%H:%M:%S'), *l))
    c += d.timedelta(seconds=5)
