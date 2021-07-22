export class Pessoa{

    public id:number;
    public nome:string;
    public idade:number;
    public email:string;
    public sexo:string;

    constructor(nome:string, idade:number, email:string, sexo:string){
        this.nome=nome;
        this.idade=idade;
        this.email=email;
        this.sexo=sexo;
    }
}