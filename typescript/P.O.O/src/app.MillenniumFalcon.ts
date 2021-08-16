import { Spacecraft } from './app.Spacecraft'
import { Containership } from './app.Containership'

export class MillenniumFalcon extends Spacecraft implements Containership{
	
	cargoContainers:number = 2
	
	constructor(){
       super('hyperdrive')
	}

	jumpIntoHyperSpace(){
		let force = Math.floor(10*Math.random())
		if(  force  >= 5 ){
			super.jumpIntoHyperSpace()
			console.log(`sucess: ${force} e maior que 5`)
		}else{
			console.log(`Faleid: ${force} e menor que 5`)
		}
		
	}
}