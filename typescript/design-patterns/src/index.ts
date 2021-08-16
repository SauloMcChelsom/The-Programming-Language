/*
  npm run tsc -> copilar
  npm start -> executar

*/

import { AbstractFactory } from './abstract-factory/abstract-factory'
import { ConcreteFactory1 } from './abstract-factory/abstract-factory'
import { ConcreteFactory2 } from './abstract-factory/abstract-factory'

class index{
    /*
     * The client code works with factories and products only through abstract
     * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
     * product subclass to the client code without breaking it.
    */
    public clientCode(factory: AbstractFactory) {
        const productA = factory.createProductA();
        const productB = factory.createProductB();
    
        console.log(productB.usefulFunctionB());
        console.log(productB.anotherUsefulFunctionB(productA));
    }
    /*
     * The client code can work with any concrete factory class.
    */
    public main() {

        console.log('Client: Testing client code with the first factory type...');
        this.clientCode(new ConcreteFactory1());
        
        console.log('');
        
        console.log('Client: Testing the same client code with the second factory type...');
        this.clientCode(new ConcreteFactory2());
        
    }

    

}

new index().main()

console.log('-------- fim --------')


