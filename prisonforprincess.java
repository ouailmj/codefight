int[] prisonForPrincesses(int[] prisons, int[] princesses, int entrance) {
    if (princesses.length == 0) return new int[0];
    int[] result = new int[princesses.length];
    Arrays.fill(result, -1);
    int cell;
    for (int raid=0; raid<princesses.length; raid++) {
        cell = exactMatch(princesses[raid], prisons)+1;
        if (cell > 0) {
            result[raid] = cell;
            prisons[cell-1] = -1;
        } else {
          cell = bestMatch(princesses[raid], prisons, entrance);
          if (cell == -1) result[raid] = -1;
          else {
            result[raid] = cell +1;
            prisons[cell] = -1;
        }
        }

    }

    return result;
}
int exactMatch(int count, int [] currentPrisons) {
    for (int cell=0; cell<currentPrisons.length; cell++) {
        if (count == currentPrisons[cell]) return cell;
    }
    return -1;
}
int bestMatch(int count, int[] currentPrisons, int entrance) {
    int offset = 1, cell = entrance;
    while ((cell-offset)>=0 || (cell+offset-1) < currentPrisons.length) {
        if ((cell-offset)>=0 && currentPrisons[cell-offset]>=count)
            return cell-offset;
        if ((cell+offset-1)<currentPrisons.length && currentPrisons[cell+offset-1]>=count)
            return cell+offset-1;
        offset++;
    }
    return -1;
}
