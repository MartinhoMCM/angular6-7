var LocalError = /** @class */ (function () {
    function LocalError(message, status) {
        this.status = status;
        console.log("estado ", status);
        this.message = message;
        console.log(" message", message);
    }
    return LocalError;
}());
var local = new LocalError("Ola");
//console.log(" message", local.message);
//console.log("estado ", local.status);
//let local1 =new LocalError("Ola1", "Stado");
//console.log(" message1", local1.message);
