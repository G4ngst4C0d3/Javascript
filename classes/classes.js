class Person{
    name;

    get username(){
        return this.name;
    }

    set username(value){
        if(!name){
            throw new Error('Name is required');    
        }

        if(this.userNameVerify(value)){
            throw new Error('Username is not valid.Username havent special characters');    
        }
    }

    userNameVerify(string){
        const regex = /[@!#$%^&*()/\\]/;
        return regex.test(string);
    }

}

let person = new Person();
person.username = 'Joana';
console.log( 'Nome: ' ,  person.username);