class Receipt {
  name;
  price;
  date;
  export_method;

  constructor(name, price, date, export_method) {
    this.name = name;
    this.price = price;
    this.date = date;
    this.export_method = export_method;
  }

  exportReceipt() {
    this.export_method.export(this);
  }
}

class ExportToFile {
  export(receipt) {
    //code to write receipt to file
    console.log("The receipt was written to file");
  }
}

class SaveToDB {
  export(receipt) {
    //code to save receipt to db
    console.log("The receipt was saved to DB");
  }
}

const m = new ExportToFile();
const r = new Receipt("abc", 123, "11/2", m);
r.exportReceipt();
const s = new SaveToDB();
//Change method to save
r.export_method = s;
r.exportReceipt();
