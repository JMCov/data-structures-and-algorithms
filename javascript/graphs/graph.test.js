const Graph = require('.');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe('addVertex', () => {
    it('can add a node to the graph', () => {
      const node = graph.addVertex('test');
      expect(node.value).toEqual('test');
      expect(graph.size()).toEqual(1);
    });
  });

  describe('addDirectedEdge', () => {
    it('can add an edge to the graph', () => {
      const node1 = graph.addVertex('node1');
      const node2 = graph.addVertex('node2');
      graph.addDirectedEdge(node1, node2, 5);
      const neighbors = graph.getNeighbors(node1);
      expect(neighbors.length).toEqual(1);
      expect(neighbors[0].vertex).toEqual(node2);
      expect(neighbors[0].weight).toEqual(5);
    });
  });

  describe('getNodes', () => {
    it('should return all nodes in the graph', () => {
      const nodeA = graph.addVertex('A');
      const nodeB = graph.addVertex('B');
      const nodeC = graph.addVertex('C');

      const allNodes = graph.getNodes();
      expect(allNodes).toEqual([nodeA, nodeB, nodeC]);
    });
  });

  describe('getNeighbors', () => {
    it('should return all neighbors of a node', () => {
      const nodeA = graph.addVertex('A');
      const nodeB = graph.addVertex('B');
      const nodeC = graph.addVertex('C');

      graph.addDirectedEdge(nodeA, nodeB, 1);
      graph.addDirectedEdge(nodeA, nodeC, 2);

      const neighbors = graph.getNeighbors(nodeA);

      expect(neighbors.length).toBe(2);
      expect(neighbors[0].vertex).toBe(nodeB);
      expect(neighbors[0].weight).toBe(1);
      expect(neighbors[1].vertex).toBe(nodeC);
      expect(neighbors[1].weight).toBe(2);
    });
  });

  describe('size', () => {
    it('returns the number of nodes in the graph', () => {
      expect(graph.size()).toEqual(0);
      graph.addVertex('node1');
      expect(graph.size()).toEqual(1);
      graph.addVertex('node2');
      expect(graph.size()).toEqual(2);
    });
  });

  describe('breadth first', () => {
    it('should perform breadth first traversal', () => {
      const graph = new Graph();

      const vertexA = graph.addVertex('A');
      const vertexB = graph.addVertex('B');
      const vertexC = graph.addVertex('C');
      const vertexD = graph.addVertex('D');
      const vertexE = graph.addVertex('E');

      graph.addDirectedEdge(vertexA, vertexB);
      graph.addDirectedEdge(vertexA, vertexD);
      graph.addDirectedEdge(vertexB, vertexC);
      graph.addDirectedEdge(vertexD, vertexE);

      const nodes = [];
      const callback = (value) => nodes.push(value);

      const root = vertexA;
      const result = graph.breadthFirst(root, callback);

      expect(result).toEqual(new Set([vertexA, vertexB, vertexD, vertexC, vertexE]));
      expect(nodes).toEqual(['A', 'B', 'D', 'C', 'E']);
    });
  });
});
