export function formatDate(dateString) {
  return new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'full',
  }).format(new Date(dateString));
}
