function bit237(n) {
    const mask237 = 0b1000110;
    const bit2 = (n & 0b10) != 0 ? 1 : 0;
    const bit3 = (n & 0b100) != 0 ? 1 : 0;
    const bit7 = (n & 0b1000000) != 0 ? 1 : 0;
    if((bit2 + bit3 + bit7) > 1) {
        return n | mask237;
    } else {
        return n & (~mask237);
    }
}
