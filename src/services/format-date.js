const formatDate = (isoStringDate) => {
  const date = new Date(isoStringDate);

  const options = { weekday: "long", month: "long", day: "numeric" };

  return date.toLocaleDateString("en-US", options);
};

export default formatDate;
