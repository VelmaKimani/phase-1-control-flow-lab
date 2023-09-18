function scuberGreetingForFeet(freeRide){
if(freeRide <= 400){
  return "This one is on me!";
  
}else if(freeRide > 400 && freeRide < 2500){
  return "I will gladly take your thirty bucks.";
}else{
  return "No can do.";
}
}

function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good.";
}
else{
    return "No go.";
}
}

function switchOnCharmFromTip(tip){
//   let tip = "generous";
//  let thankyouMessage;
//   switch(tip){
//     case tip = "generous" :
//       thankyouMessage = "Thank you so much.";
//      break;
//     case tip = "not as generous" :
//       thankyouMessage = "Thank you.";
//      break;
//     default : 
//     thankyouMessage = "Bye.";
//    break;
//   }
//   return thankyouMessage;
  if (tip === "generous") {
    return "Thank you so much.";
} else if (tip === "not as generous") {
    return "Thank you.";
} else {
    return "Bye.";
}

}