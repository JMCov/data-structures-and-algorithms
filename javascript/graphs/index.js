'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight=0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight=0){
    const neighbor = this.adjacencyList.get(startVertex);
    neighbor.push( new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    let nodes = [];
    for (let vertex of this.adjacencyList.keys()) {
      nodes.push(vertex);
    }
    return nodes;
  }

  breadthFirst(root, callback){
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(queue.length){
      current = queue.pop();

      if (callback) {
        callback(current.value);
      }

      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors){
        if (!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }

  depthFirst(root, callback){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(stack.length){
      current = stack.pop();

      if (callback) {
        callback(current.value);
      }

      const neighbors = this.getNeighbors(current);

      for (let edge of neighbors){
        if (!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }

  size(){
    return this.adjacencyList.size;
  }
}

function businessTrip(graph, cities) {
  let cost = 0;

  for (let i = 0; i < cities.length - 1; i++) {
    let cityA = cities[i];
    let cityB = cities[i+1];
    let isCity = null;

    for (let vertex of graph.adjacencyList.keys()) {
      if (vertex.value === cityA) {
        isCity = vertex;
        break;
      }
    }
    if (!isCity) {
      return null;
    }

    let connection = false;
    let neighbors = graph.getNeighbors(isCity);
    for (let edge of neighbors) {
      if (edge.vertex.value === cityB) {
        cost += edge.weight;
        connection = true;
        break;
      }
    }
    if (!connection) {
      return null;
    }
  }

  return cost;
}

module.exports = { Graph, businessTrip };
