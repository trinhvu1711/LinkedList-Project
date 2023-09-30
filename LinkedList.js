class Node {
  constructor(value){
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value){
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  size(){
    return this.size;
  }

  head(){
    return this.head;
  }

  tail(){
    return this.tail;
  }

  at(index){
    if(index < 0 || index >= this.size) return null;
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.nextNode;
      count ++;
    }
    return current;
  }

  pop(){
    if (!this.head) return null;
    if (this.size ==1) {
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return poppedNode;
    }
    let current = this.head;
    while (current.nextNode !== this.tail) {
      current = current.nextNode;
    }
    const poppedNode = this.tail;
    current.nextNode = null;
    this.tail = current;
    this.size--;
    return this.poppedNode;
  }

  contains(value){
    let current = this.head;
    while (current !== null) {
      if (current.value == value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value){
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString(){
    let result = "";
    let current = this.head;
    while(current !== null){
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result  += "null";
    return result;
  }

  insertAt(value, index){
    if (index < 0 || index> this.size) return;
    if (index == 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size){
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    let count = 0;
    while (count <index -1) {
      current = current.nextNode;
      count ++;
      newNode.nextNode = current.nextNode;
      current.nextNode = newnode;
      this.size++;
    }
  }

  removeAt(index){
    if (index < 0 || index >= this.size) return;
    if (index ===0) {
      this.head = this.head.nextNode;
      this.size--;
      return;
    }
    let current = this.head;
    let count = 0;
    while (count < index -1) {
      current = current.nextNode;
      count++;
    }
    current.nextNode = current.nextNode.nextNode;
    if (index === this.size -1){
      this.tail = current;
    }
    this.size--;
  }
}

// Tạo một danh sách liên kết mới
const myList = new LinkedList();

// Thêm các node vào danh sách
myList.append(10);
myList.append(20);
myList.prepend(5);

// In danh sách liên kết
console.log(myList.toString()); // Kết quả: (5) -> (10) -> (20) -> null

// Kiểm tra kích thước của danh sách
console.log(myList.size); // Kết quả: 3

// Truy cập các phần tử trong danh sách
console.log(myList.at(0).value); // Kết quả: 5
console.log(myList.at(2).value); // Kết quả: 20

// Loại bỏ phần tử cuối cùng
myList.pop();
console.log(myList.toString()); // Kết quả: (5) -> (10) -> null

// Kiểm tra nếu một giá trị tồn tại trong danh sách
console.log(myList.contains(10)); // Kết quả: true
console.log(myList.contains(15)); // Kết quả: false

// Tìm vị trí của một giá trị trong danh sách
console.log(myList.find(10)); // Kết quả: 1
console.log(myList.find(15)); // Kết quả: null

// Chèn một giá trị vào danh sách tại vị trí cụ thể
myList.insertAt(15, 1);
console.log(myList.toString()); // Kết quả: (5) -> (15) -> (10) -> null

// Loại bỏ một phần tử từ danh sách tại vị trí cụ thể
myList.removeAt(1);
console.log(myList.toString()); // Kết quả: (5) -> (10) -> null