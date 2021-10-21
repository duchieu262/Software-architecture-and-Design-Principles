interface PetAction {
  eat();
  say();
}

interface CatAction {
  catchMouse();
}

class Dog implements PetAction {
  eat() {
    console.log("Eat bones");
  }
  say() {
    console.log("Gau gau");
  }
}

class Cat implements PetAction, CatAction {
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
