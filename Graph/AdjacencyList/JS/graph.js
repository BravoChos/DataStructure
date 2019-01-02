class Graph {
  constructor() {
    this._nodes = {};
  }
  
  addNode(value) {
    this._nodes[value] = this._nodes[value] || [];
  }
  
  addEdge(v1, v2) {
    this._nodes[v1].push(v2);
    this._nodes[v2].push(v1);
  }
  
  static depthFirstSearch(vertex, fn, visited = {}) {
    if (!this._nodes[vertex] || typeof fn !== 'function' || !this) {
      throw new Error('Not valid arguments are passed');
    }
    
    fn(vertex);
    visited[vertex] = true;
    
    this._nodes[vertex]
      .forEach((v) => {
        if (visited[v]) return;
        Graph.depthFirstSearch.call(this, v, fn, visited);
      }, this);
  }
  
  static breadthFirstSearch(vertex, fn) {
    if (!this._nodes[vertex] || typeof fn !== 'function' || !this) {
      throw new Error('Not valid arguments are passed');
    }
    
    let queue = [vertex];
    const visited = {};
    
    while (queue.length) {
      const node = queue.shift();
      
      fn(node);
      visited[node] = true;
      
      const neighbors = this._nodes[node]
        .filter(v => visited[v] === undefined);
      queue = [...queue, ...neighbors];
    }
  }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
console.log('graph:\n', graph._nodes);
// Graph.depthFirstSearch.call(graph, 1, v => console.log('v', v));
// Graph.breadthFirstSearch.call(graph, 1, v => console.log('v', v));

