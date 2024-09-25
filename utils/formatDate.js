// utils/formatDate.js
export const formatDate = (dateString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
