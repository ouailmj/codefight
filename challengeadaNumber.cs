bool adaNumber(string line) {
  bool atLeastOneDigit = false;
  if (line[line.Length - 1] == '#') {
    int i = 0;
    int baseChar = 0;
    while (line[i] != '#' && baseChar <= 16) {
      if (line[i] != '_') {
        if ('0' <= line[i] && line[i] <= '9') {
          baseChar = baseChar * 10 + (line[i] - '0');
        } else {
          return false;
        }
      }
      i++;
    }
    if (baseChar < 2 || baseChar > 16) {
      return false;
    }
    i++;
    while (i < line.Length - 1) {
      if (line[i] != '_') {
        var digit = -1;
        if ('a' <= line[i] && line[i] <= 'f') {
          digit = line[i] - 'a' + 10;
        }
        if ('A' <= line[i] && line[i] <= 'F') {
          digit = line[i] - 'A' + 10;
        }
        if ('0' <= line[i] && line[i] <= '9') {
          digit = line[i] - '0';
        }
        if (0 <= digit && digit < baseChar) {
          atLeastOneDigit = true;
        } else {
          return false;
        }
      }
      i++;
    }
  } else {
    foreach (char i in line) {
      if (i != '_') {
        if ('0' <= i && i <= '9') {
          atLeastOneDigit = true;
        } else
          return false;
      }
    }
  }
  return atLeastOneDigit;
}
