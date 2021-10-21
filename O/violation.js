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
