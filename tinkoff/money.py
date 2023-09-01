def getBanknotes(desiredSum, banknotes, sum=0, take=[]):
    if sum > desiredSum:
        return []
    if sum == desiredSum:
        return take
    for index in range(len(banknotes)):
        value = banknotes[index]
        sum1 = sum + value
        arr = take + [value]
        res = getBanknotes(desiredSum, banknotes[index + 1:], sum1, arr)
        if len(res) > 0:
            return res
    return []

desiredSum, banknoteCount = map(int, input().split())
banknotes = list(map(int, input().split()))
banknotes = banknotes + banknotes
banknotes.sort()
banknotes.reverse()

res = getBanknotes(desiredSum, banknotes)
if len(res):
  print(len(res))
  print(" ".join(map(str,res)))
else:
  print(-1)