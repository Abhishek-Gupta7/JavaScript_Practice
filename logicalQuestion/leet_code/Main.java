import java.lang.reflect.Method;
import java.util.*;

/**
 * Main
 */
public class Main {
    Node head;
    int size = 0;
    /**
     * Node
     */
    public class Node {
        int data;
        Node next;
        Node(int data){
            this.data = data;
            this.next = null;
        }
        
    }

    public void addFirst(int data) {
        Node newNode =  new Node(data);
        if (head == null) {
            head = newNode;
            size++;
            return;
        }
        newNode.next = head;
        head = newNode;
        size++;
    }

    public void addLast(int data) {
        Node newNode = new Node(data);
        if (head != null) {
            Node currentNode = head;
            while (currentNode.next != null ) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            size++;
            return;
        }
        head = newNode;
        size++;

    }

    public void displayList() {
        if (head != null) {
            Node currentNode = head;
            while (currentNode != null) {
                System.out.print(currentNode.data + " -> ");
                currentNode = currentNode.next;
            }
            System.out.print("Null\n");
        }else{
            System.out.println("List is Empty..");
        }

    }

    public void deleteItem(int data) {
        Node previousNode = head , currentNode = head;
        if (head != null) {
           if (head.data == data) {
                head = currentNode.next;
                size--;
                return;            
           }else{
             while (currentNode != null) {
                if (currentNode.data == data) {
                    previousNode.next = currentNode.next;
                    size--;
                    return;
                } else {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
           }
        }else{
            System.out.println("List is Empty");
        }
    }

    public void reverse() {
        Node newHead = null;
        Node previousNode , currentNode;

        while (head.next != null) {
            previousNode = currentNode = head;
            while (currentNode.next != null) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if (newHead == null) {
                newHead = currentNode;
            }
            currentNode.next = previousNode;
            previousNode.next = null;
        }
        head = newHead;
    }
    public void printMiddle() {
        Node currentNode = head;
            int iterator = size / 2;
            for (int i = 1; i <= iterator; i++) {
                     if (iterator % 2 == 0) {
                        Node previousNode;
                        currentNode
                     }
            }
            
        
    }
    public static void main(String[] args) {
        Main mainObj = new Main();
        mainObj.addFirst(4); 
        mainObj.addFirst(2); 
        mainObj.addFirst(2);
        mainObj.addFirst(2);
        mainObj.displayList();
        mainObj.deleteItem(2);
        mainObj.addLast(3);
        mainObj.displayList(); 
        mainObj.reverse();
        mainObj.displayList(); 
        mainObj.printMiddle();   
    }

}