// code your solution here
function superbowlWin(record){
  const bul = record.find(element => element.result === "W")
  if (bul){return bul.year}
}
/*summary for myself to understand what to do:
1-FİRST find wins in results that inside the record
2-THEN if there is a win(your finding func gonna find that for you, don't forget), return year
3-there is no definition or what to do about not winning*/
/*ALSO
prob im gonna need callback function inside the find()
work on arrow func
*/
