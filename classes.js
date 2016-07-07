/**
 * ES6 Classes
 */
 class Graph
 {

 	constructor(_number_of_nodes, _number_of_vertices)
 	{
 		this.number_of_nodes = _number_of_nodes;
 	}

 	get number_of_nodes(){
 		return this._number_of_nodes;
 	}

 	/**
 	 * stack overflow error demo
 	 */
 	set number_of_nodes(n){
 		if(n<0)
 			this._number_of_nodes = 0;
 		else

 			this.number_of_nodes = n;
 	}

 	traverse(){
 		document.write('Coming Soon');
 	}
 }

 // #1
 // var obj_graph = new Graph(10, 55);
 // console.log(obj_graph);

 // var obj_graph_2 = new Graph(-19, 255);
 // console.log(obj_graph_2);

 // obj_graph.traverse();

/**
 * Inheritance
 */
 class AdjacencyListGraph extends Graph
 {
 	constructor(_number_of_nodes, _number_of_vertices, _num_adjacency_lists)
 	{
 		super(_number_of_nodes, _number_of_vertices);
 		this.num_adjacency_lists = _num_adjacency_lists;
 	}

 	get num_adjacency_lists(){
 		return this._num_adjacency_lists;
 	}

 	set num_adjacency_lists(n){
 		if(n == 0)
 			alert('Validation Error');
 		else
 			this._num_adjacency_lists = n;
 	}
 }

 var obj_graph_3 = new AdjacencyListGraph(3, 3, 2);
 console.log(obj_graph_3);