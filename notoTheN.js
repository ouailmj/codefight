p = 100000
function f(n, m) {
  if (m == 0) return 1
  a = f(n, m % 2 ? m - 1 : m / 2)
  c = m % 2 ? n : a
  b = a / p | 0
  a = a % p
  d = c / p | 0
  c = c % p
  return (a * d + b * c) % p * p + a * c % (p * p)
}
function NToTheN(n, k) {
  return ("000000000" + f(n, n, k)).slice(-k)
}
