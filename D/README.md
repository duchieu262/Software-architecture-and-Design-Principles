# Dependency Inversion principle

Trong file violation.js: Class Receipt (high level) có hàm exportReceipt() dùng để export dữ liệu, nhưng nó phụ thuộc vào class ExportToFile (low level) điều đó vi phạm Dependency Inversion principle. Dẫn đến trường hợp khi ta muốn thay đổi phương thức export thì phải sửa code trong class Receipt\
Fix bằng cách tạo thêm một thuộc tính là export_method trong class Receipt. Khi muốn thay đổi phương thức export thì ta chỉ cần tạo 1 class SaveToDB giống với class ExportToFile và sửa thuộc tính export_method trong class Receipt\
