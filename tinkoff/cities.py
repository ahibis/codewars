cityCount, roadCount = map(int, input().split())

roads = []
for i in range(roadCount):
    road = list(map(int, input().split()))
    road[0] -= 1
    road[1] -= 1
    roads.append(road)  # city1, city2, length
roadsSortedByLengthDesc = sorted(roads, key=lambda val: val[2], reverse=True)

x = roadsSortedByLengthDesc[0][2]
cityToState = [i for i in range(cityCount)]


def mergeCity(city1, city2):
    state1 = cityToState[city1]
    state2 = cityToState[city2]

    for i in range(cityCount):
        if cityToState[i] == state2:
            cityToState[i] = state1


for road in roadsSortedByLengthDesc:
    city1, city2, length = road
    state1 = cityToState[city1]
    state2 = cityToState[city2]

    if state1 == state2:
        continue

    mergeCity(city1, city2)
    x = length - 1

print(x)
