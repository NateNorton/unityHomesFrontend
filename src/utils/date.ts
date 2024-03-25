export const formatDateString = (date: string) => {
  if (!date) return '';
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};
