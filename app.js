
class German{
    constructor(){
        this.nombre = "German";
        this.edad = 23;
    }
}
class Alexander{
    constructor(){
        this.nombre = "Alexander";
        this.edad = 20;
    }
}
class JhonJairo{
    constructor(){
        this.nombre = "JhonJairo";
        this.edad = 26;
    }
}
class leina{
    constructor(){
        this.nombre = "Leina";
        this.edad = 21;
    }
}
class David{
    constructor(){
        this.nombre = "David";
        this.edad = 26;
    }
}
class Alexis{
    constructor(){
        this.nombre = "ALexis";
        this.edad = 20;
    }
}
class Conversacion{

    constructor(){
        this.Alexander = new Alexander();
        this.German = new German();
        this.JhonJairo = new JhonJairo();
        this.leina = new leina();
        this.David = new David();
        this.Alexis = new Alexis();
    }
    
    generateConversation(){

        return `
        ${this.Alexis.nombre}: Hola, mi nombre es ${this.Alexis.nombre} y tengo ${this.Alexis.edad} años. <br/>
        ${this.leina.nombre}: Hola ${this.Alexis.nombre}, mi nombre es ${this.leina.nombre} <br/>
        ${this.German.nombre}: Hola ${this.leina.nombre} ¿Que edad tienes? <br/>
        ${this.leina.nombre}: Hola ${this.German.nombre}, tengo ${this.leina.edad} años <br/>
        ${this.JhonJairo.nombre}: Hola, mi nombre es ${this.JhonJairo.nombre} y ya llevo 15 dias sin quemar <br/>
        ${this.David.nombre}: ¡Hola! somos el grupo 4 y somos los mejores <br/>
        ${this.Alexander.nombre}: ${this.JhonJairo.nombre} ¿Desde hace cuanto quemas? <br/>
        ${this.JhonJairo.nombre}: Desde hace ${this.Alexander.edad} Años
        `
    }

}

const conversacion = new Conversacion();
document.getElementById("conversacion").innerHTML = conversacion.generateConversation();