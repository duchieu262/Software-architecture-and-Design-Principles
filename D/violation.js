class Receipt {
  name;
  price;
  date;

  constructor(name, price, date, export_method) {
    this.name = name;
    this.price = price;
    this.date = date;
    this.export_method = export_method;
  }

  exportReceipt() {
    const exportFile = new ExportToFile();
    exportFile.export(this);
  }
}

class ExportToFile {
  export(receipt) {
    //code to write receipt to file
    console.log("The receipt was written to file");
  }
}

const r = new Receipt("abc", 123, "11/2");
r.exportReceipt();
