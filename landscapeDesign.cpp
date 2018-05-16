#define F for(auto&
long r[2], n, p, landscapeDesign(auto a, int d) {
    // calculate derivative
    F x : a) p+=x-=p, ++n;

    F q : r) {
        auto c = a;

        // add comb derivative
        F x : c) x-=d=-d;
        n&1?:d=-d;

        // integrate
        p=0; F x : c) p=x+=p;

        // sort and compute difference to median
        sort(&c[0], &c[n]);
        F x : c)
            q += abs(x - (c[n-1>>1] + c[n/2])/2);
    }

    // pick minimum
    return min(r[0],r[1]);
}
