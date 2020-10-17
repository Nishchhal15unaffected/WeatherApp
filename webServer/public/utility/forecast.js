const request=require('request');
const forecast=(address,callback)=>{
	const url="http://api.openweathermap.org/data/2.5/find?q="+address+"&appid=ccc810637adc5c06d3385361a69618b6&units=metric";
	request({url,json:true},(error,response)=>{
		if(error)
		{
			callback("unable to connet to the internet please connet the internet",undefined);
		}else if(response.body.list.length===0)
		{
			callback("unable to find this location, please try another location",undefined);
		}else{
			callback(undefined,{
				temp:response.body.list[0].main.temp,
				weather:response.body.list[0].weather[0].description,
				windSpeed:response.body.list[0].wind.speed,
				pressure:response.body.list[0].main.pressure,
				humidity:response.body.list[0].main.humidity,
				country:response.body.list[0].sys.country,
				clouds:response.body.list[0].clouds.all,
				rain:response.body.list[0].rain,
				snow:response.body.list[0].snow,
				windDir:response.body.list[0].wind.deg
			});
		}


	})
}
module.exports=forecast;