const request =require('request');
const forecast=require('./utility/forecast');
const geocode=require('./utility/geocode');
/*const url="http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ccc810637adc5c06d3385361a69618b6";
request({url:url,json:true},(error,response,body)=>{
	if(error)
	{
		console.log("unable to connect to weather service ");
	}else if(response.body.message){
		console.log("unable to find location");
	}else{
	console.log("it is currently"+response.body.main.temp+"there is 0% chance of rain");
}
});*/
 /*const geourl="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlzaGNoaGFsMTIzNCIsImEiOiJja2FrbGU5cjUwbGhmMnpwNmI2OW41bzl3In0.rEjXxg5vjoOoPhxYo_TLrw&limit=1";
request({url:geourl,json:true},(error,response)=>{
	if(error)
	{
		console.log("unable to connect to internet");
	}
	else
	{
	const lo=response.body.features[0].center[0];
	const le=response.body.features[0].center[1];
	console.log("lo is"+lo+"li is"+le);
}
})
*/
	const address=process.argv[2];
	if(!address)
	{
		console.log("please enter the address");
	}else{
geocode(address,(error,{lo,le,name})=>{  // use dustruting object bcz of shortcut
  if(error){
  	return console.log(error);
  }
  forecast(lo,le,(error,fdata)=>{
  		if(error){
  			return console.log(error);
  		}
  		console.log(fdata);
  		console.log(name);
  })
} )
}



/*
	geocode(address,(error,{lo,le,name})=>{
		if(error){
			return res.send({
				error:"unable to find the location"
			});
		}
		forecase(lo,le,(error,{temp,weather})=>{
				if(error)
				{
					res.send({
						error:error
					})
				}
				res.send({
					temp:temp,
					weather:weather
				})
		})
	})*/