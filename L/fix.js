class Person {
  name;
  age;
  salary;
}

class Manager extends Person {
  manage = [];
  managedBy;
}

class President extends Person {
  manage = [];
  secretary;
}
