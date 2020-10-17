var weatherForm=document.querySelector('form');
var search=document.querySelector('input');
var sms2=document.querySelector('#sms2');
var sms1=document.querySelector('#sms1');
var sms3=document.querySelector('#sms3');
var sms4=document.querySelector('#sms4');
var sms5=document.querySelector('#sms5');
var sms6=document.querySelector('#sms6');
var sms7=document.querySelector('#sms7');
var sms8=document.querySelector('#sms8');
var sms9=document.querySelector('#sms9');
var sms10=document.querySelector('#sms10');
var sms11=document.querySelector('#sms11');
sms1.textContent="loading...";
sms2.textContent="";
sms3.textContent="";
sms4.textContent="";
sms5.textContent="";
sms6.textContent="";
sms7.textContent="";
sms8.textContent="";
sms9.textContent="";
sms10.textContent="";
sms11.textContent="";
weatherForm.addEventListener('submit',(e)=>{
	e.preventDefault();
	const location=search.value;
	console.log("client site js");
fetch('http://localhost:3000/weather?address='+location).then((response)=>{
response.json().then((data)=>{
	if(data.error){
		sms1.textContent=data.error;
	}else{
		console.log(data);
	sms1.textContent="Address: "+data.address;
	sms2.textContent="Description: "+data.forecast.weather;
	sms3.textContent="Temperature: "+data.forecast.temp+" Degree Celsius";
	sms4.textContent="Wind Speed: "+data.forecast.windSpeed+"m/s";
	sms5.textContent="Pressure: "+data.forecast.pressure+"hPA";
	sms6.textContent="Humidity: "+data.forecast.humidity+"%";
	sms7.textContent="Clouds: "+data.forecast.clouds+"%";
	sms8.textContent="Rain: "+data.forecast.rain+" % chances";
	sms9.textContent="Snow: "+data.forecast.snow+" %chances";
	sms10.textContent="Wind Direction: "+data.forecast.windDir+" Degree";
	sms11.textContent="Country: "+data.forecast.country;
}
})
})
})