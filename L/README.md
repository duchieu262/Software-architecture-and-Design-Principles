Liskov substitution principle
Trong file violation.js: Class President kế thừa từ class Manager nhưng ta thấy một president thì không có người quản lí và thuộc tính ManagedBy không tồn tại, vì thế class này sai và vi phạm nguyên lí Liskov substitution
Để sửa lỗi thì ta sẽ cho class President kế thừa từ class Person