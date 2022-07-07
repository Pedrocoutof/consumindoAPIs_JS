const preencheCampo = async (jsonCep, jsonClima) => {

    document.getElementById('_outputLocalidade').value = jsonCep.localidade;
    document.getElementById('_outputUF').value  = jsonCep.uf;
    document.getElementById('_outputDDD').value  = jsonCep.ddd;
    document.getElementById('_outputComplemento').value  = jsonCep.complemento;
    document.getElementById('_outputBairro').value  = jsonCep.bairro;
    document.getElementById('_outputLogradouro').value  = jsonCep.logradouro;
    document.getElementById('_outputLatitude').value = jsonClima.coord.lat;
    document.getElementById('_outputLongitude').value = jsonClima.coord.lon;
    document.getElementById('_outputCeu').value = jsonClima['weather'][0]['main'];
    document.getElementById('_outputDescricao').value = jsonClima['weather'][0]['description'];
    document.getElementById('_outputTemperatura').value = jsonClima.main.temp;
    document.getElementById('_outputSensacao').value = jsonClima.main.feels_like;
    document.getElementById('_outputTempMin').value = jsonClima.main.temp_min;
    document.getElementById('_outputTempMax').value = jsonClima.main.temp_max;
    document.getElementById('_outputPressao').value = jsonClima.main.pressure;
    document.getElementById('_outputUmidade').value = jsonClima.main.humidity;
    document.getElementById('_outputNivelMar').value = jsonClima.main.sea_level;
    document.getElementById('_outputVelocidadeVento').value = jsonClima.wind.speed;
    document.getElementById('_outputVisibilidade').value = jsonClima.visibility;
    document.getElementById('_outputNuvens').value = jsonClima.clouds.all;

    console.log(jsonCep);
    console.log(jsonClima);
}

const submetido = async () => {
    const cep = document.getElementById('_inputCEP').value;

    const urlCEP = `https://viacep.com.br/ws/${cep}/json/`;
    const jsonCep = await fetch(urlCEP).then(responseCep => responseCep.json());
    
    const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${jsonCep.localidade}&appid=e44e4afd9edc509ff0b1b23b66889f01`;
    console.log(urlClima);
    const jsonClima = await fetch(urlClima).then(responseClima => responseClima.json());
    
    preencheCampo(jsonCep, jsonClima);
}

document.getElementById('_submitButton').addEventListener('click', submetido);