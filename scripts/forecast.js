class Forecast{
    constructor(){
        this.key = 'jRaJ9mQtB4NYe8u4E0lyvvfIGUinKZeL';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){

        const cityDets = await this.GettheCity(city);
        const weather = await this.GetWeather(cityDets.Key);

        return {cityDets,weather};
    }

    async GettheCity(city){

        const query= `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
    
        return data[0];
    }

    async GetWeather(id){

        const query = `${id}?apikey=${this.key}`;
    
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
    
        return data[0];
    }

}




