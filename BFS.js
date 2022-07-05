function searchBFC (list, start, end) {
    const searchQueue = [];
    searchQueue.push(start);
    start.visited = true;

    while (searchQueue.length > 0) {
        let v = searchQueue.shift();

        for (let neighbour of list[v]) {
            if (!neighbour.visited) {
                searchQueue.push(neighbour)
                neighbour.visited = true;
                if (neighbour === end) return true;
            }
        }
    }
    return false;
}

const graph = {
    you: ['alice', 'bob', 'claire'],
    claire: ['thom', 'johny'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    anuj: [],
    peggy: [],
    thom: [],
    johny: []
}

console.log(searchBFC(graph, 'you', 'vasay'))
console.log(searchBFC(graph,'you', 'bob'))
console.log(searchBFC(graph, 'you', 'alice'))