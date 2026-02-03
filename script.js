// null is collescing

const user = {'name': 'Jayasri',
	          'age': 34,
	          'rollno': '21CS018'};


user.place??="Chennai";
console.log(user.place);

user.role??="dev";
console.log(user.role);

console.log(user);

//Templaete literals

const name = 'Jayasri';
console.log(`my name is: ${name}`);

//function with arguments and return vale

function sum(num1,num2,num3){
	return(num1+num2+num3)
}

console.log(sum(2,6,4))

// function without arguments and return value
function sum2(){

	let a = 34;
	let b = 56;
	return(a+b)
	
}

console.log(sum2())

//function without args and w/o r v
function age(){

	let age= 20;
	if(age>=18){
		console.log(`you are eligible to vote`)
	}
	else{
		console.log(`you are not eligible`)
	}
}
age()

//function with args and w/o r v

function party(name,age,role){

	if(name=="ramesh" && age=="33" && role=="data analyst"){
		console.log("he will go to party");
	}
	else if(name=="ramesh" || age=="33" || role=="analyst"){
		console.log("he will not go to the party");
	}

}

party("ramesh",33,"data analyst")






const user_name = "jaisri_dev";
const pass_num = "123";


function login(username,password){

	if(username==user_name && password==pass_num){
		console.log("login successfull");
	}

	else{
		console.log("invalid user and password");
	}



}

login(user_name,pass_num)












	