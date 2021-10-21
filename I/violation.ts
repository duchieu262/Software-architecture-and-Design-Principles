interface PetAction {
  eat();
  say();
  catchMouse();
}

class Dog implements PetAction {
  eat() {
    console.log("Eat bones");
  }
  say() {
    console.log("Gau gau");
  }
  catchMouse() {}
}

class Cat implements PetAction {
  eat() {
    console.log("Eat fishes");
  }
  say() {
    console.log("Meo meo");
  }
  catchMouse() {
    console.log("Catch the mouse");
  }
}
