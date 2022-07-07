 //let city =document.querySelector('city');
 let avd_key= "6bfa4a784fa2fd0c7adfa5ac08c2fe7c" ;

 function fast(){
    let city =document.querySelector('#city').value;
 
    
    console.log(city);
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${avd_key}&units=metric`)
 .then(res =>res.json()) 
 .then(data=>document.getElementById("mydiv").innerHTML=
   ('city is: ' +data['name']+
   ' <br>maximum temp :'+data['main']['temp_max']+'℃'
   + ' <br>pressure :'+data['main']['pressure']
   +'<br>wind speed :'+data['wind']['speed'] 
   ))
 
 }
 
 
 
 
 
