class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true;
    }
    return false
  }

  addEdge(vertex1, vertex2) {
    const v1 = this.adjacencyList[vertex1]
    const v2 = this.adjacencyList[vertex2]

    if (!v1 || !v2) {
      return false
    }

    if (v1.indexOf(vertex2) === -1) {
      v1.push(vertex2)
    }

    if (v2.indexOf(vertex1) === -1) {
      v2.push(vertex1)
    }

    return true
  }

  removeEdge(vertex1, vertex2) {
    let v1 = this.adjacencyList[vertex1]
    let v2 = this.adjacencyList[vertex2]
    if (!v1 || !v1) {
      return false
    }
    this.adjacencyList[vertex1] = v1.filter((v) => v !== vertex2)
    this.adjacencyList[vertex2] = v2.filter((v) => v !== vertex1)

    return true
  }

  removeVertex(vertex) {
    const vertexToRemove = this.adjacencyList[vertex]
    if (vertexToRemove === undefined) {
      return false
    }

    vertexToRemove.forEach((vert) => {
      this.removeEdge(vertex, vert)
    })

    delete this.adjacencyList[vertex]
    return this
  }
}


const myGraph = new Graph();

myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')
myGraph.addEdge('A', 'B')
myGraph.addEdge('B', 'C')
myGraph.addEdge('A', 'C')
myGraph.removeEdge('A', 'B')
console.log(myGraph.adjacencyList)
myGraph.removeVertex('B')

console.log(myGraph.adjacencyList)