export function callRentalCompany(phoneNumber) {
  window.location.href = `tel:${phoneNumber}`;
}

export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
