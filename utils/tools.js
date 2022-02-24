export const psTime = () => {
  var date = new Date();
  var utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours() - 8);
  var usDate = new Date(utcDate);
  return usDate.toUTCString();
};
