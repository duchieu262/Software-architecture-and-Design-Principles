class Cat {
  name;
  age;
  weight;

  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  say() {
    console.log("I'm", this.name);
  }

  eat(foodWeight) {
    this.weight += foodWeight;
  }
}
