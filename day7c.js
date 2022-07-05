var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
result.forEach((element)=>
{console.log(element.name);
console.log(element.capital);
console.log(element.flag);
})
}