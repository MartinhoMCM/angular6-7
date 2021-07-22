export class Usuario{
    
    public id:number;
    public nome:string;
    public nomeusario:string;
    public email:string;
    public senha:string;

    constructor(id:number, nome:string,nomeusario:string, email:string){
        this.id=id;
        this.nome=nome;
        this.nomeusario=nomeusario;
        this.email=email;
    }

}