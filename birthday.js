var daysUntil = 60;

for(daysUntil; daysUntil>=0; daysUntil--){
    
    if(daysUntil>30){
        console.log(daysUntil + " days until my birthday. Such a long time...  :(");
    }
    else if( daysUntil!=0 && daysUntil!=30 ){
        console.log(daysUntil + " DAYS UNTIL MY BIRTHDAY!!!");
    }
    else if(daysUntil==30){
        console.log(daysUntil + " days until my birthday. It is not such a long time now... :)");
    }
    else{
        console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
    }
}