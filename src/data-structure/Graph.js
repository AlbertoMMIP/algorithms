class Graph {
  constructor () {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex (node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge (node1, node2) {
    // Undirect graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections () {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      for (let vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

function init () {
  const newGraph = new Graph();
  newGraph.addVertex('0');
  newGraph.addVertex('1');
  newGraph.addVertex('2');
  newGraph.addVertex('3');
  newGraph.addVertex('4');
  newGraph.addVertex('5');
  newGraph.addVertex('6');
  newGraph.addEdge('3', '1');
  newGraph.addEdge('3', '4');
  newGraph.addEdge('4', '2');
  newGraph.addEdge('4', '5');
  newGraph.addEdge('1', '2');
  newGraph.addEdge('1', '0');
  newGraph.addEdge('0', '2');
  newGraph.addEdge('6', '5');

  newGraph.showConnections();
}

export {
  init,
}