ghostCount, commandCount = map(int, input().split())

ghostToGroupId = [i for i in range(ghostCount)]
ghostToVisitedGroupCount = [1] * ghostCount

def groupMergeByGhost(ghost1, ghost2):
    groupId1 = ghostToGroupId[ghost1]
    groupId2 = ghostToGroupId[ghost2]

    for i in range(ghostCount):
        if ghostToGroupId[i] == groupId2:
            ghostToGroupId[i] = groupId1
        if ghostToGroupId[i] == groupId1:
            ghostToVisitedGroupCount[i] += 1

def checkGhostInSameGroup(ghost1, ghost2):
    if ghostToGroupId[ghost1] == ghostToGroupId[ghost2]:
        return "YES"
    else:
        return "NO"

def ghostVisitedGroupCount(ghost):
    return ghostToVisitedGroupCount[ghost]

commands = []
for i in range(commandCount):
    commands.append(list(map(int, input().split()))) 

for command in commands:
    commandNumber = command[0]
    if commandNumber == 1:
        groupMergeByGhost(command[1] - 1, command[2] - 1)
    if commandNumber == 2:
        print(checkGhostInSameGroup(command[1] - 1, command[2] - 1))
    if commandNumber == 3:
        print(ghostVisitedGroupCount(command[1] - 1))

