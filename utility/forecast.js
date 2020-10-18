const request=require('request');
const forecast=(lo,le,callback)=>{
	const url="";
	request({url,json:true},(error,{body})=>{
		if(error)
		{
			callback("unable to connet to the internet please connet the internet",undefined);
		}else if(body.message)
		{
			callback("unable to find this location, please try another location",undefined);
		}else{
			callback(undefined,{
				temp:body.main.temp,
				weather:body.weather[0].description
			});
		}


	})
}
module.exports=forecast;
