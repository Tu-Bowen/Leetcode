/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function() {
     let idx
     do{
         idx=(rand7()-1)*7+rand7()
     }while(idx>40)
     return (idx-1)%10+1
 };