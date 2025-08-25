async function getWeather() {

    //Criar uma variavel para pegar o valor do input city
    var cidade = document.getElementById('city').value

    //Conectar com API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Var para consumir o JSON do item Temperatura
    var tempCelsius = resposta.data.main.temp;

    //Imprimir o valor no Front End e concatenar com o JQUERY
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade} é: ${tempCelsius.toFixed(2)} °C`;
}

    //Chamar a função 
    getWeather();