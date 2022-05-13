class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}

function treeByLevels (rootNode) {
  let deck = [rootNode]
  let deckNew = []
  let res = []
  while(deck.length){
    const {value,left,right} = deck.shift()
    if(value) res.push(value)
    if(left) deckNew.push(left)
    if(right) deckNew.push(right)
    if(!deck.length) {
      deck = deckNew
      deckNew = []
    }
  }
	return res;
}
console.log(
  treeByLevels(new Node(1,
    new Node(8,
      null,
      new Node(3)
    ),
    new Node(4,
      null,
      new Node(5,
        null,
        new Node(7)
      )
    )
  ))
)
/*
14
----42
--------38
------------44
----------------5
--------------------15
----------------37
--------------------23
------------------------50
----------------------------0
--------------------------------18
------------------------38
----------------------------31
------------20
--------16

*/