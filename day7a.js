var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
let asiaregion=result.filter((element)=>element.region==="Asia")
console.log(asiaregion);

var nameofcountries=asiaregion.map((element)=>element.name);
console.log(nameofcountries);

}





    
