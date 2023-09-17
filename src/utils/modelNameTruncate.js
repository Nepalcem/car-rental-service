export const modelNameTruncate = (modelName) => {
  const words = modelName.split(" ");
  return words.slice(0, 2).join(" ");
};
