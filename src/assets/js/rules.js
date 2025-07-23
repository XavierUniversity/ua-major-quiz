export default {
  empty(message = false) {
    return (value) => {
      if (value) return true;

      return message === false ? "Cannot Be Empty" : message;
    };
  },
  minCharacter(length, message = false) {
    return (value) => {
      if (value.length >= length) return true;

      return message === false
        ? "Must have at least " + length + " characters."
        : message;
    };
  },
  maxCharacter(length, message = false) {
    return (value) => {
      if (value.length <= length) return true;

      return message === false
        ? "Must have no more than " + length + " characters."
        : message;
    };
  },
  match(match, message = false) {
    return (value) => {
      if (value === match) return true;

      return message === false ? "Values Do Not Match" : message;
    };
  },
  isValidCsv(columns = 2, message = false) {
    return (value) => {
      let isValid = true;
      let values = value.split("\n");
      let re = /^(\d{9},([^;\r\n]*))$/;

      values.forEach((val) => {
        if (val.length !== 0 && re.test(val) === false) {
          isValid = false;
        }
      });
      if (isValid) {
        return true;
      }
      return message === false ? "Not Valid Csv" : message;
    };
  },
  inputSizeLessThan(sizeLimit = 2097152, message = false){

    return (value) => {

      if (value[0].size < sizeLimit) {
        return true;
      }
      return message === false ? "File Size is too large" : message;
    };

  }
};
