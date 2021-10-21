# Interface segregation principle

Trong file violation.ts: Class Dog implements interface PetAction nhưng nó không sử dụng method catchMouse(), vì thế nó vi phạm nguyên tắc Interface segregation/
Fix bằng cách chia interface PetAction ra, và class Cat implements cả 2 interface này/
