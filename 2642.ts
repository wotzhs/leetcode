// ref: https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/3420672/simple-bfs-solution-very-easy-to-understand
class Graph {
    adj: [number, number][][];

    constructor(n: number, edges: number[][]) {
        this.adj = Array(n);

        for (var i = 0; i < edges.length; i++) {
            this.addEdge(edges[i]);
        }
    }

    addEdge(edge: number[]): void {
        const [source, target, weight] = edge;
        if (this.adj[source]?.length) {
            this.adj[source].push([target, weight]);
            return;
        }

        this.adj[source] = [[target, weight]];
    }

    shortestPath(node1: number, node2: number): number {
        const q: number[] = [];
        const dist: number[] = Array(this.adj.length).fill(Number.MAX_VALUE);

        dist[node1] = 0;

        q.push(node1);

        while (q.length) {
            const currentNode = q.shift();
            if (currentNode === undefined) {
                continue;
            }

            const next = this.adj[currentNode];

            for (var i = 0; i < next?.length; i++) {
                const [target, weight] = next[i];
                if (dist[target] > dist[currentNode] + weight) {
                    dist[target] = dist[currentNode] + weight;
                    q.push(target);
                }
            }
        }

        return dist[node2] === Number.MAX_VALUE ? -1 : dist[node2];
    }
}

// /**
//  * Your Graph object will be instantiated and called as such:
//  * var obj = new Graph(n, edges)
//  * obj.addEdge(edge)
//  * var param_2 = obj.shortestPath(node1,node2)
//  */
