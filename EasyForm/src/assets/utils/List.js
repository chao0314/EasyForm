let head = new WeakMap();
let length = new WeakMap();

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class List {
  constructor() {
    head.set(this, null);
    length.set(this, 0);
  }

  size() {
    return length.get(this);
  }

  isEmpty() {
    return this.size() === 0;
  }

  // getHead() {
  //     return head.get(this);
  // }

  append(element) {
    let node = new Node(element),
      current = head.get(this),
      size = this.size();
    if (this.isEmpty()) {
      head.set(this, node);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length.set(this, ++size);
    return size;
  }

  insertAt(position, element) {
    let node = new Node(element),
      current = head.get(this),
      size = this.size(),
      index = 0,
      previous;
    if (position > -1 && position < size) {

      while (index++ <= position) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.next = current;

      length.set(this, ++size);
      return size;

    }
    return false;

  }

  indexOf(element) {
    let current = head.get(this),
      index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  removeAt(position) {
    let current = head.get(this),
      size = length.get(this),
      index = 0,
      previous;
    if (position > -1 && position < size) {
      if (position === 0) {
        head.set(this, current.next);
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;

      }
      length.set(this, --size);
      return current.element;
    } else {
      return null;
    }
  }

  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  insert(prev, element) {
    return this.insertAt(this.indexOf(prev), element);
  }

  toArray() {
    let current = head.get(this),
      content = [];
    while (current) {
      content.push(current.element);
      current = current.next;
    }
    return content;
  }

  iterator(callback) {
    if (callback && typeof callback === "function") {
      let current = head.get(this);
      while (current) {
        callback(current.element, this);
        current = current.next;
      }
    }

  }

  getElement(position) {
    let current = head.get(this),
      index = 0;
    while (current) {
      if (index++ === position) {
        return current.element;
      }
      current = current.next;
    }
    return null;
  }

  // toString() {
  //
  //     let current = head.get(this),
  //         string = '';
  //
  //     while (current) {
  //         string += current.element + (current.next ? ', ' : '');
  //         current = current.next;
  //     }
  //     return string;
  //
  // }

  // print() {
  //     console.log(this.toString());
  // }
}

export default List;

