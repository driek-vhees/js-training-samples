export function printHeader(headerText) {
  const headerDivider = '------------------------------';
  console.log(`${headerDivider}\n${headerText}\n${headerDivider}`);
}

export function printIfError(message, callback) {
  try {
    callback();
  } catch(e) {
    printHeader(message);
    console.log(e);
  }
};
