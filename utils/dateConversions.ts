export function convertDateToReadable(date?: Date) {
  if (!date) {
    return "N/A";
  } else {
    const birthdate = new Date(date);
    const readableDate = birthdate.toDateString();
    return readableDate;
  }
}
