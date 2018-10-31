/**
 * Created by: Gagan Saxena
 * Date: 26/10/2018
 * Organization: Individual	
 */
export class Greeting
{
	
	user: string;
	greeting: string;
	
	constructor() { 
	}
	
	set setUser(value: string) {
		this.user = value;
	}
	get getUser() : string {
		return this.user;
	}
	set setGreeting(value: string) {
		this.greeting = value;
	}
	get getGreeting() : string {
		return this.greeting;
	}
	
}
