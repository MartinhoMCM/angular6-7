interface IAnimal{

    recuperarNome();
    eliminarNome();
    
}

class Animal implements IAnimal{

    constructor(nome:string){
        this.nome=nome;
    }

    nome:string;
    recuperarNome() {
       return this.nome;
    }
    eliminarNome(){}


}

const animal =new Animal('Layc Dog');
console.log(animal.recuperarNome());
