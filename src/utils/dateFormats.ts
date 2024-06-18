export const formatYearMonth = (date: Date) => {
  const [year, month] = date.toISOString().split("T")[0].split("-");

  return `${year}. ${month}`;
};
