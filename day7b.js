var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response)
    var x=res.filter((ele)=>ele.population<200000);
    console.log(x);
    
    var z=x.map((ele)=>ele.name);
    console.log(z);  
}
    
