// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function(){
// var result=JSON.parse(request.response);
// console.log(result);
// let currencyUsd=result.filter((element)=>{
//     if (element.currencies[0].code==="USD"){
//         return element;
//     }
// })

    
// let countryName= currencyUsd.map((element)=>element.name);
// console.log(countryName);
// }


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);
let currency=result.filter((element)=>{
    let currencyUsd = element.currencies
    if (currencyUsd[0].name === "United States dollar"){
        console.log(element.region)
    }
})
}
