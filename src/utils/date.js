export function getFormattedDate(dateString) {
  const currentDate = new Date(dateString);
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year}`;
}
