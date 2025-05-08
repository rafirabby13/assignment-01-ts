{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string{

       
        return [Day.Saturday, Day.Sunday].includes(day) ? "Weekend" : "Weekday"
    
      }

const res = getDayType(Day.Thursday); 
console.log(res)

}