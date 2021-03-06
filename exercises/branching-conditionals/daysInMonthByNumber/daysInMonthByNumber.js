/**
 * Given a month (represented as a number between 1 and 12), return the number
 * of days in that month.
 *
 * For example, January is an inpt of 1, February is an input of 2, March is an
 * input of 3, and so on.
 *
 * Assume February has 29 days (no leap years).
 *
 * @example
 * daysInMonthByNumber(1); // => 31
 * daysInMonthByNumber(9); // => 30
 *
 * @param {number} monthNum - A number representing the month, with 1 for January
 *   and 12 for December.
 * @return {number} The number of days in the given month
 */
function daysInMonthByNumber(monthNum) {
  if (!Number.isInteger(monthNum) || monthNum < 1 || monthNum > 12) {
    console.log((`Expected a month number from 1-12, received: ${monthNum}`));
    //is this how you wanted us to edit it ? or did you want us to keep the throw error ?
    //the computer didn't recognize the language you used before the edit
  }
  months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  return months[monthNum - 1]

if (require.main === module) {
  console.log('Running sanity checks for isZero:');

  console.log(daysInMonthByNumber(1) === 31);
  console.log(daysInMonthByNumber(2) === 28);
  console.log(daysInMonthByNumber(3) === 31);
  console.log(daysInMonthByNumber(14));
}

module.exports = daysInMonthByNumber;

