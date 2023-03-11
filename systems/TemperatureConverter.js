function TemperatureConverter(temperature = ''){
    this.temperature = temperature;
    this.result = 0;
    this.object = {};

    let celsiusExist = this.temperature.toUpperCase().includes('C');
    let fahrenheitExist = this.temperature.toUpperCase().includes('F');

    this.converterCelsiusToFahrenheit = function(){
        if(!this.temperature || !celsiusExist) throw new Error('Informe um valor válido para o campo célsius');
        let natualValue = parseFloat(this.temperature.replace(/[a-zA-Z]/, '')); 
        this.result = ((natualValue * 1.8) + 32).toFixed(1);

        let sunny = this.result >= 84 && this.result <= 104;
        let veryHot = this.result > 104 && this.result <= 212;
        let cool = this.result <= 82.4 && this.result >= 59;
        let cold = this.result <= 57.2 && this.result >= 33;


        if(sunny){
            this.object = {medidor: 'fahrenheit', clima: "Ensolarado", temperatura: this.result};
        }else if(veryHot){
            this.object = {medidor: 'fahrenheit', clima: "Muito quente", temperatura: this.result};

        }else if(cool){
            this.object = {medidor: 'fahrenheit', clima: "Fresco", temperatura: this.result};

        }
        else if(cold){
            this.object = {medidor: 'fahrenheit', clima: "Muito frio", temperatura: this.result};

        }else{
            this.object = {medidor: 'fahrenheit', clima: "Congelando", temperatura: this.result};

        }
    }

    this.converterFahrenheitToCelsius = function(){
        if(!this.temperature || !fahrenheitExist) throw new Error('Informe um valor válido para o campo célsius');
        let natualValue = parseFloat(this.temperature.replace(/[a-zA-Z]/, '')); 

        this.result = ((natualValue - 32) / 1.8).toFixed(1);

        let sunny = this.result >= 29 && this.result <= 40;
        let veryHot = this.result > 29 && this.result <= 100;
        let cool = this.result <= 28 && this.result >= 15;
        let cold = this.result < 15 && this.result >= 0;


        if(sunny){
            this.object = {medidor: 'Celsius', clima: "Ensolarado", temperatura: this.result};
        }else if(veryHot){
            this.object = {medidor: 'Celsius', clima: "Muito quente", temperatura: this.result};

        }else if(cool){
            this.object = {medidor: 'Celsius', clima: "Fresco", temperatura: this.result};

        }
        else if(cold){
            this.object = {medidor: 'Celsius', clima: "Muito frio", temperatura: this.result};

        }else{
            this.object = {medidor: 'Celsius', clima: "Congelando", temperatura: this.result};

        }

    }

    this.getResultConverter = () => this.object;
}

try{
    const celsiusToFahrenheit = new TemperatureConverter("32C");
    celsiusToFahrenheit.converterCelsiusToFahrenheit();
    console.log(celsiusToFahrenheit.getResultConverter());

    const fahrenheitToCelsius = new TemperatureConverter("28F");
    fahrenheitToCelsius.converterFahrenheitToCelsius();
    console.log(fahrenheitToCelsius.getResultConverter());

}catch(err){
    console.log(err.message)

}
