function scuberGreetingForFeet(freeRide){
if(freeRide <= 400){
  return "This one is on me!";
  
}else if(freeRide > 400 && freeRide <= 2500){
  return "I will gladly take your thirty bucks.";
}else{
  return "No can do.";
}
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
//   if (city === "NYC") {
//     return "Ok, sounds good.";
// }
// else{
//     return "No go.";
// }
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous" :
     return "Thank you so much.";
    case "not as generous" :
      return "Thank you.";
    default : 
    return "Bye.";
  }
//   return thankyouMessage;
//   if (tip === "generous") {
//     return "Thank you so much.";
// } else if (tip === "not as generous") {
//     return "Thank you.";
// } else {
//     return "Bye.";
// }

}