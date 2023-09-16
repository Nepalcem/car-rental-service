export const addresSplitter = (address) => {
  const words = address.split(" ");
  return words.slice(-2).join(" ");
};
