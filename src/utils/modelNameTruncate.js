export const modelNameTruncate = (modelName) => {
  const words = modelName.split(" ");
  return words.slice(0, 2).join(" ");
};

export const optionsTruncate = (optionValue) => {
  return optionValue.slice(0,10);
}