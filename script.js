// testing data
const input1 = [4, 5, 8, 5, 1, 0, -1 , -4, 10, 2, 41];
const input2 = ['a', 'A','ab', 'AB','Aa'];
const input3 = [1,2,3,'efw', 7];
const input4 = [null, null, 77];

function Node(value){
    this.value = value;
    this.leftChild = this.rightChild = null;

    this.addChild = function(value){
        if(value < this.value){
            this.leftChild?this.leftChild.addChild(value):this.leftChild = new Node(value);
        }else{
            this.rightChild? this.rightChild.addChild(value):this.rightChild = new Node(value);
        }
    }

    this.printNode = function (space = 0){
        if(this.rightChild) {
            this.rightChild.printNode(space + 5);
        }
        console.log(" ".repeat(space), this.value);
        if(this.leftChild != null) {
            this.leftChild.printNode(space + 5);
        }
    }
}

function BinaryTree(){
    this.root = null;

    this.addNode = function(value){
        if(this.root){
            if (typeof value !== typeof this.root.value){
                console.log('ERROR - tree elements should be same type!');
                throw new Error('tree elements should be same type');
            }
            this.root.addChild(value);
        }else{
            this.root = new Node(value);
        }
    }

    this.printTree = function(space = 0){
        if(this.root){
            this.root.printNode();
        }
    }
}

let coolTree = new BinaryTree();

for (let i of input1){
    coolTree.addNode(i);
}

coolTree.printTree();
