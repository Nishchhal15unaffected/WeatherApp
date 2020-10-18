const geocode=(address,callback)=>{
const url="";
const request=require('request');
request({url,json:true},(error,{body})=>{
			if (error) {
				callback("please connet to internet",undefined);
			}
			else if(body.features.length===0)
			{
				callback("unable to find location please try another location",undefined);
			}
			else{
				 callback(undefined,{   lo:body.features[0].center[0],
				le:body.features[0].center[1],
				name:body.features[0].place_name
				})
}			
})
}
module.exports=geocode;
