class Auth<T>{

    public name;

    constructor(name:T){
        this.name=name;
    }

    login():T{
        return this.name;
    }

    lognType():string{
        return typeof(this.name);
    }
}

const auth =new Auth<number>(1);

console.log(`Status ${auth.login()}`);

console.log(`Type${auth.lognType()}`);