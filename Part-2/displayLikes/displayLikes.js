let people=['John','Wick','Don','Wickham','Cohnor'];


// if((people.length)){
//     console.log(`${people[0]} likes it`);
// }
// if(people.length===2){
//     console.log(`${people[0]} and ${people[1]} likes it`);
// }

// if(people.length>2){
//     console.log(`${people[0]},${people[1]} and ${people.length-2} likes it`);
// }

switch(people.length) {
    case 1:
      // code block
      console.log(`${people[0]} likes it`);
      break;
    case 2:
      // code block
      console.log(`${people[0]} and ${people[1]} likes it`);
      break;
      default:
        console.log(`${people[0]}, ${people[1]}, and ${people.length - 2} others like it`);
        break;
    
      // code block
  }