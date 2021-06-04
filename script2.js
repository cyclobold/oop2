class User{

	name = null;
	height = null
	email = null;

	constructor(name, height, email){

		this.name = name;
		this.height = height;
		this.email = email;
	}

	sleep(){

	};

	login(username, password){
		this.username = username;
		this.password = password;


	};

	logout(){


	}


}


const user = new User('James', '1.5m', 'james@email.com')
const secondUser = new User('John', '1.2m', 'john@email.com');


console.log(user.name);
console.log(secondUser.name);




