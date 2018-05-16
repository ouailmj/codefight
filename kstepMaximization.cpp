bool _Rotate(int temp, int &x){
    x = 0;
    int cs;
    while(temp){
        cs = temp%10;
        temp/=10;
        if(cs == 3 || cs == 4 || cs == 7) return false;
        else{
            switch(cs){
                case 0: x = x*10+0; break;
                case 1: x = x*10+1; break;
                case 2: x = x*10+2; break;
                case 5: x = x*10+5; break;
                case 6: x = x*10+9; break;
                case 8: x = x*10+8; break;
                case 9: x = x*10+6; break;
            }
        }
    }
    return true;
}

int kStepMaximization(int n, int k) {
    int S, Ret = n, temp, x;
    queue <int> q;
    q.push(n);
    while(q.size() && k+1){
        S = q.size();
        for(int i = 1; i <= S; i++){
            temp = q.front();
            q.pop();
            Ret = max(Ret, temp);
            q.push(temp+1);
            q.push(temp*2);
            if(_Rotate(temp, x)){
                q.push(x);
            }
        }
        k--;
    }
    return Ret;
}
