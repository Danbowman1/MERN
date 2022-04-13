class Node {
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
    }
    
    addFront(data){
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        return this.head
    }

    removeFront() {
        if(!this.head){
            return this.head
        }
        let removedNode = this.head
        this.head = removedNode.next
        removedNode.next = null
        return this.head
    }

    front() {
        if(!this.head){
            return this.head
        } else {
            return this.head.data
        }

    }

    display() {
        let list = ''

        if(!this.head){
            return ''
        }

        list += this.head.data

        let runner = this.head.next
        while(runner != null){
            list += ", " + runner.data
            runner = runner.next
        }
        return list
        
    }
}

let mySLL = new SLL
mySLL.addFront(100)
mySLL.addFront(50)
console.log(mySLL.display())


