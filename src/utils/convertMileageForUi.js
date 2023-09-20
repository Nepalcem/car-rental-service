export const convertMileage = (mileage) => mileage.toLocaleString("en-US");
export const backConvertMileage = (string) => Number(string.split(',').join(''));