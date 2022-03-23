/* 
name: Evan Gertis
date: 03/23/2022
program: js graphs
*/

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Officce", "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop", "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop", "Marketplace-Town Hall", "Shop-Town Hall",
];

// construct a graph that can
// traverse the house edges
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if(graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r=>r.split("-"))){
        addEdge(from, to);
    }
    return graph;
}

const roadGraph = buildGraph(roads)
// use this to print out 
// the graph object
console.table(roadGraph)