function scuberGreetingForFeet(someValue){
  // Write your code here!
  if(someValue > 2500){
    return 'No can do.';
  }
  else if(someValue > 2000){
    return 'I will gladly take your thirty bucks.';
  }
  else if(someValue <= 400){
    return 'This one is on me!';
  }
}

function ternaryCheckCity(someValue){
  // Write your code here!
  return someValue === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(someValue){
  // Write your code here!
  let response;

  switch(someValue){
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    default :
      response = 'Bye.'
      break;
  }

  return response;
}