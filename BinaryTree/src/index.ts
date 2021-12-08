import { BinaryTree } from "./BinaryTree.js";
import input from "readline-sync";

const coolTree: BinaryTree<number> = new BinaryTree();

let treeSize: number = input.question("Enter number of nodes in tree: ") as unknown as number;
while (!treeSize) {
    console.log("Please enter number of nodes in tree: ");
    treeSize = input.question("Enter number of nodes in tree: ") as unknown as number;
}

for (let node = 0; node < treeSize; node++) {
    const treeNode: number = input.question("Enter node: ") as unknown as number;
    coolTree.addNode(treeNode);
    coolTree.printTree();
}

let operation: string = input.question("Enter 1-to delete node, 2-to get node, 3-to add node, 4-to print tree or 0-to exit: ");
while (operation !== "0") {
    switch (operation) {
        case "1": {
            coolTree.printTree();
            const delNode: number = input.question("Enter the value of node, that will be deleted: ") as unknown as number;
            coolTree.deleteNode(delNode, coolTree);
            coolTree.printTree();
            break;
        }
        case "2": {
            coolTree.printTree();
            const findNode: number = input.question("Enter the value of node, that will be specified: ") as unknown as number;
            console.log(coolTree.findNode(findNode, coolTree.root));
            break;
        }
        case "3": {
            const addNode: number = input.question("Enter the value of node, that will be added: ") as unknown as number;
            coolTree.addNode(addNode);
            coolTree.printTree();
            break;
        }
        case "4": {
            coolTree.printTree();
            break;
        }
        default: {
            console.log("INCORRECT INPUT");
        }
    }
    operation = input.question("Enter 1-to delete node, 2-to get node, 3-to add node, 4-to print tree or 0-to exit: ");
}
