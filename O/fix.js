class Animal {
  name;
  age;
  type;
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  say() {
    if (type === "cat") {
      console.log("Meo meo");
    }
    if (type === "dog") {
      console.log("Gau gau");
    }
  }
}

class Cat extends Animal {
  say() {
    console.log("Meo meo");
  }
}
class Dog extends Animal {
  say() {
    console.log("Gau gau");
  }
}
