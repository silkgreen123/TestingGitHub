function vacationBookList(pageCount,pagesPerHour,dayCount){
let hoursNeeded=pageCount / pagesPerHour;
let hoursPerDay=hoursNeeded / dayCount;
console.log(hoursPerDay);
}
vacationBookList(212, 20, 2)