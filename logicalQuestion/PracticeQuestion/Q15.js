// Q 15.
// 4, 5, 6, 7, 8, 9
// 11, 12, 13, 6, 7, 8, 9
// These two are linkedList, Find point of common element?
// Logic for above problem?
// What will be the complexity for it?
// Any better solution for the above problem?

// Time Complexity is O(n^2)
class Node1{
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class List extends Node1{
    head = null;
    count = 0
    constructor(data) {
        super(data);
        let newNode = new Node1(data);
        if (this.head === null) {
            this.head = newNode;
        }else{
            newNode.next = head;
            this.head = newNode;
        }
    }
    push(data){
        let newNode = new Node1(data);
        if (this.head === null) {
            this.head = newNode;
            this.count++;
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.count++;
        }
    }

    display(){
       if (this.head === null) {
         console.log('list is empty.');
       }else{
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
       }
    }

    static checkPoint(l1 , l2){
        let position = [];
        let l1postion = 1 ;
        let l2position = 1;
        let list1Node = l1.head;
        let list2Node = l2.head;

        while(list1Node !== null){
            let data1 = list1Node.data;
            list2Node = l2.head;
            // console.log(data1);
            while (list2Node !== null) {
                let data2 = list2Node.data;
                if (data1 === data2) {
                    position.push([l1postion,l2position]);
                }
                list2Node = list2Node.next;
                l2position++;
            }
            list1Node = list1Node.next;
            l1postion++;
            l2position = 1;
        }

        console.log(position);
    }

}

let list1 = new List(9);
list1.push(8);
list1.push(7);
list1.push(5);
list1.push(6);
list1.push(4);
list1.push(11);
list1.display();
console.log('---------------------------------');
let list2 = new List(9);
list2.push(8);
list2.push(7);
list2.push(6);
list2.push(13);
list2.push(12);
list2.push(11);
list2.display();

List.checkPoint(list1 , list2);

