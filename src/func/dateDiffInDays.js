const dateDiffInDays = (date1) => {
  const dt1 = new Date(date1);
  const dt2 = new Date();
  const totalDays = Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate())
      - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()))
      / (1000 * 60 * 60 * 24),
  );
  if (totalDays > 365) {
    return `${Math.floor(totalDays / 365)}m`;
  }
  if (totalDays > 30) {
    return `${Math.floor(totalDays / 30)}m`;
  }
  if (totalDays > 7) {
    return `${Math.floor(totalDays / 7)}w`;
  }
  if (totalDays === 0) {
    return 'today';
  }
  return `${totalDays}d`;
};

export default dateDiffInDays;
