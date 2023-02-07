export const formatPrice = (num) => {
  const newNum = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num / 100);
  return newNum;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

export function getTime(time) {
  return `${Math.floor(time / 3600)}${
    time / 3600 < 2 ? "hr" : "hrs"
  }: ${Math.floor((time / 3600 - Math.floor(time / 3600)) * 60)}mins:
     ${Math.floor(time % 60) < 10 ? 0 : ""}${Math.floor(time % 60)}s`;
}
