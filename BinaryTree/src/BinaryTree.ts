export class TreeNode<T> {
    private _data: T;
    private _left: TreeNode<T> | null;
    private _right: TreeNode<T> | null;

    constructor(data: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
        this._data = data;
        this._left = left;
        this._right = right;
    }

    get data(): T {
        return this._data;
    }

    set data(value: T) {
        this._data = value;
    }

    get left(): TreeNode<T> | null {
        return this._left;
    }

    set left(value: TreeNode<T> | null) {
        this._left = value;
    }

    get right(): TreeNode<T> | null {
        return this._right;
    }

    set right(value: TreeNode<T> | null) {
        this._right = value;
    }

    addChild(data: T): void {
        if (data < this._data) {
            this._left ? this._left.addChild(data) : this._left = new TreeNode<T>(data);
        } else {
            this._right ? this._right.addChild(data) : this._right = new TreeNode<T>(data);
        }
    }

    printNode(distance: number = 0): void {
        const step: number = 5;
        if (this._right) {
            this._right.printNode(distance + step);
        }
        console.log(" ".repeat(distance), this._data);
        if (this._left != null) {
            this._left.printNode(distance + step);
        }
    }
}

export class BinaryTree<T> {
    private _root: TreeNode<T> | null;

    constructor(root: TreeNode<T> | null = null) {
        this._root = root;
    }

    get root(): TreeNode<T> | null {
        return this._root;
    }

    addNode(data: T): void {
        if (data) {
            if (this._root) {
                this._root.addChild(data);
            } else {
                this._root = new TreeNode<T>(data);
            }
        }
    }

    printTree(): void {
        if (this._root) {
            this._root.printNode();
        }
    }

    findNode(data: T, node: TreeNode<T> | null): TreeNode<T> | null {
        if (!node || !data) {
            console.log("No such element");
            return null;
        }
        if (node.data === data) {
            return node;
        }
        if (node.data < data) {
            return this.findNode(data, node.right);
        }
        return this.findNode(data, node.left);
    }

    deleteNode(data: T, tree: BinaryTree<T> | null): void {
        if (data) {
            if (tree) {
                this._root = this.deleting(data, tree._root);
            }
        }
    }

    private deleting(data: T, node: TreeNode<T> | null): TreeNode<T> | null {
        if (node === null) {
            console.log("No such node");
            return null;
        }
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        }
        if (node.right === null) {
            node = node.left;
            return node;
        }
        if (data < node.data) {
            node.left = this.deleting(data, node.left);
            return node;
        }
        if (data > node.data) {
            node.right = this.deleting(data, node.right);
            return node;
        }
        const nodeNew: TreeNode<T> = this.minNode(node.right);
        node.data = nodeNew.data;
        node.right = this.deleting(nodeNew.data, node.right);
        return node;
    }

    private minNode(node: TreeNode<T>): TreeNode<T> {
        if (node.left === null) {
            return node;
        }
        return this.minNode(node.left);
    }
}


