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
        // return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday"
      }

const res = getDayType(Day.Sunday); 
console.log(res)

}