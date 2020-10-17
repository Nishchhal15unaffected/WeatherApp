const  express= require('express');
const path=require('path');
const hbs=require('hbs');
const geocode=require('./public/utility/geocode');
const forecast=require('./public/utility//forecast');
const app=express();
const port=3000;

//defind path 
const view=path.join(__dirname,'template/views')
const partialpath= path.join(__dirname,'template/partial')
//stet up and heandler
app.set('view engine', 'hbs')
app.set('views',view);
hbs.registerPartials(partialpath);

app.use('/',express.static(path.join(__dirname,'public')));
// app.use('/about',express.static(path.join(__dirname,'public/about.html')));
// app.use('/help',express.static(path.join(__dirname,'public/help.html')));
app.get('/',(req,res)=>{
	res.render('index',{
	title:'Weather app',
	name:'Nish',
	des:'Get Current Weather'
})});
app.get('/about',(req,res)=>{
	res.render('about',{
	title:'About us',
	name:'Nish',
		des:'Something talking About me'
})});
app.get('/help',(req,res)=>{
	res.render('help',{
	title:'Help',
	name:'Nish',
	des:"help seaction"
})});
// demo example for req. query
/*app.get('/product',(req,res)=>{
	if(!req.query.search){
		res.send({
			error:"please prove a term on search"
		})
	}else{
	res.send({
		product:[]
	})
}})*/

app.get('/weather',(req,res)=>{
	if(!req.query.address){
		return res.send({
			error:"please enter the address"
		});
	}
  forecast(req.query.address,(error,fdata)=>{
  		if(error){
  			return res.send({error});
  		}
  		res.send({
  			forecast:fdata,
  			address:req.query.address
  		})
  })
} )



app.get('/help/*',(req,res)=>{
	res.render('404',{
		title:404,
		name:'nish',
		errorsms:"404 not found"
	})
})
app.get('/*',(req,res)=>{
	res.render('404',{
		title:404,
		name:'nish',
		errorsms:"404 not found"
	})
})
//app.get('/help',(req,res)=>res.send("<h1>bol be bsdk kya help kru</h1>"));
//app.get('/nish',(req,res)=>res.send({des:"ha bro mene hi ye server bnaya teri kyu jl ri",
//	name:"nish"
//}));
/*app.get('/about',(req,res)=>res.send([{des:"tu kya jane ga re mere bar me"},
	{
		name:"nishchhal",
		age:19
	}]));*/
app.listen(port,()=>{
	console.log(port+"port is running");
});
// console.log(__dirname)
// console.log(__filename)