//A Binary Heap are Trees are very similar to binary search tree, but with some different rules
//In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smallther than child nodes
//Each parent has at most two child nodes
//The value of each parent node is always greater than its child nodes
//In a max Binary Heap the parent is great than the children, but there are no guarantees between sibling nodes
//A binary heap is as compact as possible. All the children of each node are as full as they can be and left chidldren are filled out first

//FORMULA TO STORE DATA
//We can store data of Binary Heap in an Array
//For any index of an array n...
    //The left child is stored at 2n+1
    //The right child is stored at 2n+2
//To find parent of child node...
    //it's parent is at index Math.floor((n-1)/2)

class MaxBinaryHeap{
    constructor(){
        values = []
    }
    
    //insert a node into binary heap
    insert(val){
        
    }
}