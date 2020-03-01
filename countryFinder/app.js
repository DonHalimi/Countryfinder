
let navSearch =  document.getElementById("countrySearchInput")


let searchBtn = document.getElementById("countrySearchbtn")

searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    $.ajax({
        url:`https://restcountries.eu/rest/v2/name/${navSearch.value}`,
        success: (response)=> {
            console.log(response)
            printData(response);
        },
        error: (error)=> {
            reject(error);
        }
    })
})
  
function printData(response){
    elements = document.getElementsByClassName("animate");
    countryData = document.getElementById("countryData");
    country = response
    countryData.innerHTML += 

    `
    <div id="animate" class = "row animate" style = background-image:url("${country[0].flag}")>

            <div id="flag" class="col-md-1"><img src="${country[0].flag}"</img></div>
            <div class="col-md-5"><h4>${country[0].name}</h4></div>
            <div class="col-md-2"><h4>${country[0].population}</h4></div>
            <div class="col-md-2"><h4>${country[0].capital}</h4></div>
            <div class="col-md-2"><h4>${country[0].area} km</h4></div>

            </div>
    
    `

}
    

countryData = document.getElementById("countryData");
clear = document.getElementById("clear");
clear.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(countryData)
    countryData.innerHTML = " ";
})

