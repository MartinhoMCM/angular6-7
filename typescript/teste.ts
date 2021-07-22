class LocalError {
    message?: string;
    status?: string;

    constructor(message: string);
    constructor(message?: string, status?: string);
    constructor(message?: string, status?: string) {
      this.status = status;
      console.log("estado ", status);
      this.message = message;
      console.log(" message", message);
      
    }
  }

let local =new LocalError("Ola");
//console.log(" message", local.message);
//console.log("estado ", local.status);



//let local1 =new LocalError("Ola1", "Stado");
//console.log(" message1", local1.message);


