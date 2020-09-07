//A Graph is a collection of nodes and connections between those nodes.  Vertex is a node. Edge is a connection.

//Some uses for Graphs:
//Social Netoworks, Location/Mapping, Routing Algorithms....

//Types of Graphs:
//Undirect graphs: there is no direction to the edges, can go either way.

//Directed graphs: Often represented with arrow, indicates which direction the edges go.

//Unweighted graphs: Edges do not have values associated with it between vertices.

//Weighted graphs: Edges have values associated with it betweeen vertices

//REPRESENTING A GRAPH/STORE DATA
//To store data of a graph, nodes/vertices and connections/edges are typically stored in:

//1. Adjacency Matrix- 2-d matrix that stores verteces in rows * columns and connection/edges as booleans (0 or 1) if there are connections.
//Takes up more space(in sparse graphs)
//Slow to iterate over alll edges
//Faster to lookup specific edgs

//2. Adjecency List- Using a hash-table, we store the vertices as key and an array with edges as values.
//Can take up less space(in sparce graphs)
//Faster to iterate over all edges
//Can be slower to lookup specific edges

//----UNDIRECTED GRAPH
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //method to add vertex, which accepts a name of a vertex.
  //It adds a key to the adjacency list with the name of the vertext and set it's value to be an empty array.
  //
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  //method that adds edges, which accepts two vertices
  //find in the adjacency list the key of vertex1 and push in vertex2 to the array
  //find in the adjacency list the key of vertex2 and push in vertex1 to the array
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  //method that removes edges, which accepts two vertices
  //reassign the key of vertex1 to be an array that does not contain vertex 2
  //reassign the key of vertex2 to be an array that does not contain vertex 1
  removingEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  //method that removes a vertex/node, which accepts a single vertex argument
  //loop as long as there are any other vertices in the adjacency list for that vertex
  //use removingEdge method with the vertex we are removing and any values in the adjacency list for that vertex
  //delete key in adjacency list
  removingVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjVertex = this.adjacencyList[vertex].pop();
      this.removingEdge(vertex, adjVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Hawaii");
g.addVertex("San Francisco");
g.addVertex("Colorado");
g.addVertex("Chicago");
g.addVertex("New York");
g.addVertex("Miami");
g.addEdge("Tokyo", "Hawaii");
g.addEdge("Hawaii", "San Francisco");
g.addEdge("San Francisco", "Colorado");
g.addEdge("Colorado", "Chicago");
g.addEdge("Chicago", "New York");
g.addEdge("New York", "Miami");
console.log("OLD GRAPH", g);
// g.removingEdge("Tokyo", "Hawaii");
// g.removingEdge("New York", "Miami");
// console.log("NEW GRAPH", g);
g.removingVertex("New York");
console.log(g);
