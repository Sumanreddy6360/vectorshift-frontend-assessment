from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


def is_dag(nodes, edges):
    graph = {node.id: [] for node in nodes}

    for edge in edges:
        graph[edge.source].append(edge.target)

    visited = set()
    recursion = set()

    def dfs(node):
        if node in recursion:
            return False

        if node in visited:
            return True

        visited.add(node)
        recursion.add(node)

        for neighbour in graph[node]:
            if not dfs(neighbour):
                return False

        recursion.remove(node)
        return True

    for node in graph:
        if node not in visited:
            if not dfs(node):
                return False

    return True


@app.get("/")
def root():
    return {"message": "Pipeline Parser Running"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(pipeline.nodes, pipeline.edges),
    }