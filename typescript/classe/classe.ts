class Animal{

    protected nome:string;

    constructor(nome: string){
        this.nome=nome;
    }
   
    getNome(){
        return this.nome;
    }

}

class Cachorro extends Animal{

    patas:number;
    constructor(nome){
        super(nome);
    }
}


const cachorro =new Cachorro('Layca');
cachorro.patas;

console.log(cachorro.getNome());

const animal =new Animal('');
animal.getNome();
