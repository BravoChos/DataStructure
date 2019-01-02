# -*- coding: utf-8 -*-
"""
Implementation of a Graph as an Adjacency List
Using dictionaries, it is easy to implement the adjacency list in Python. 
In our implementation of the Graph abstract data type we will create two classes: 
  Graph, which holds the master list of vertices, and Vertex, which will represent each vertex in the graph.

Each Vertex uses a dictionary to keep track of the vertices to which it is connected, and the weight of each edge. 
This dictionary is called connectedTo. The constructor simply initializes the id, which will typically be a string,
 and the connectedTo dictionary. The addNeighbor method is used add a connection from this vertex to another. 
The getConnections method returns all of the vertices in the adjacency list, as represented by the connectedTo instance variable. 
The getWeight method returns the weight of the edge from this vertex to the vertex passed as a parameter.

"""

class Vertex:
  def __init__(self,key):
    self.id = key
    self.connectedTo = {}

  def addNeighbor(self,nbr,weight=0):
    self.connectedTo[nbr] = weight

  def __str__(self):
    return str(self.id) + ' connectedTo: ' + str([x.id for x in self.connectedTo])

  def getConnections(self):
    return self.connectedTo.keys()

  def getId(self):
    return self.id

  def getWeight(self,nbr):
    return self.connectedTo[nbr]

"""
In order to implement a Graph as an Adjacency List what we need to do is define the methods our Adjacency List object will have:

Graph() creates a new, empty graph.
addVertex(vert) adds an instance of Vertex to the graph.
addEdge(fromVert, toVert) Adds a new, directed edge to the graph that connects two vertices.
addEdge(fromVert, toVert, weight) Adds a new, weighted, directed edge to the graph that connects two vertices.
getVertex(vertKey) finds the vertex in the graph named vertKey.
getVertices() returns the list of all vertices in the graph.
in returns True for a statement of the form vertex in graph, if the given vertex is in the graph, False otherwise.

"""

class Graph:
  def __init__(self):
    self.vertList = {}
    self.numVertices = 0

  def addVertex(self,key):
    self.numVertices = self.numVertices + 1
    newVertex = Vertex(key)
    self.vertList[key] = newVertex
    return newVertex

  def getVertex(self,n):
    if n in self.vertList:
      return self.vertList[n]
    else:
      return None

  def __contains__(self,n):
    return n in self.vertList

  def addEdge(self,f,t,cost=0):
    if f not in self.vertList:
      nv = self.addVertex(f)
    if t not in self.vertList:
      nv = self.addVertex(t)
    self.vertList[f].addNeighbor(self.vertList[t], cost)

  def getVertices(self):
    return self.vertList.keys()

  def __iter__(self):
    return iter(self.vertList.values())


g = Graph()

for i in range(6):
  g.addVertex(i)

print g.vertList
g.addEdge(0,1,2)

for vertex in g:
  print vertex
  print vertex.getConnections()
  print '\n'

class Graph2:
  '''
  In order to implement a Graph as an Adjacency List what we need to do is define the methods our Adjacency List object will have:
  Graph() creates a new, empty graph.
  addVertex(vert) adds an instance of Vertex to the graph.
  addEdge(fromVert, toVert) Adds a new, directed edge to the graph that connects two vertices.
  addEdge(fromVert, toVert, weight) Adds a new, weighted, directed edge to the graph that connects two vertices.
  getVertex(vertKey) finds the vertex in the graph named vertKey.
  getVertices() returns the list of all vertices in the graph.
  in returns True for a statement of the form vertex in graph, if the given vertex is in the graph, False otherwise.
  '''
  def __init__(self):
#         self.nodes = set() # all the vertexes in the graph -- could be done in the edges part
    self.connections = {} # all the connections start_vertex:{end_vertex:weigth}
      
#     def add_node(self, node):
#         self.nodes.add(node)
  
  def contains(self, v):
    return v in self.connections.keys()
      
  def connect(self, start, end, weight=1):
#         v = self.get_vertex(str(from_vertex)) or Vertex(str(from_vertex))
    if start not in self.connections:
      self.connections[start] = {end:weight} 
    else:
      self.connections[start][end] = weight
        
    if end not in self.connections:
      self.connections[end] = {}

  def get_nodes(self):
    return self.connections.keys()
      
#     assume there is one and only one start node (no one points to it) in the directed graph
  def get_start_vertex(self):
    cadidates = set(self.get_nodes())
    for end in self.connections.values():
      for k in end.keys():
        if k in cadidates:
          cadidates.remove(k)
#         return set(self.get_nodes()) - set(end_nodes)
    return cadidates
      
  def paint(self):
    print(self.connections)

g = Graph2()
# v1 = Node(1)
g.connect(1, 2)

g.connect(1,3)
g.connect(1,4)
g.connect(2,4)
g.connect(2,5)
g.connect(3,5)
g.connect(5,4)

g.paint()

g.get_nodes()

g.get_start_vertex()


type(g.get_start_vertex())

s = set([1,2,3])

print s



