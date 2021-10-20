class Cat {
  name;
  age;
  weight;

  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
}

class Action {
  say(cat) {
    console.log("I'm", cat.name);
  }
  eat(cat, foodWeight) {
    cat.weight += foodWeight;
  }
}
