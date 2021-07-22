var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.recuperarNome = function () {
        return this.nome;
    };
    Animal.prototype.eliminarNome = function () { };
    return Animal;
}());
var animal = new Animal('Layc Dog');
console.log(animal.recuperarNome());
