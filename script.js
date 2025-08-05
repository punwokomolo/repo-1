function findDay() {
let result = 0;
let day = Number(prompt("Enter number of Days"))
if (! isNaN(day)){
    switch (day % 7){
        case 0:
        result = "Tuesday";
        break;
        case 1:
        result = "Wednesday";
        break;
        case 2:
        result = "Thursday";
        break;
        case 3:
        result = "Friday";
        break;
        case 4:
        result = "Saturday";
        break;
        case 5:
        result = "Sunday";
        break;
        case 6:
        result = "Monday";
        break;
    }
    document.getElementById("show").innerHTML =`
    <h1>On ${day} Day it is${result} </h1>
    <h4> ⚠️Note : - This Code automatically generate from calender of august 2025</h4>
   <p> On the basis of above code you can Find what day will be on nth day</p>`;

} else {
    document.getElementById("show").innerHTML +=`
    <h2> Only number input is acceptable</h2>`;
}
}

