/**
 * Hàm định dạng số
 * @param {*} value
 * @returns

 */
export const formatNumber = (value) => {
  if (value === null || value === undefined) return '---'
  return new Intl.NumberFormat().format(value)
}

/**
 * Hàm định dạng ngày tháng
 * @param {*} value
 * @returns

 */
export const formatDate = (value) => {
  if (!value) return ''
  const date = new Date(value)
  if (isNaN(date.getTime())) return '' // tránh lỗi Invalid Date
  return new Intl.DateTimeFormat('vi-VN').format(date)
}

/**
 * Hàm định dạng chuỗi
 * @param {*} value
 * @returns

 */
export const formatText = (value) => {
  if (value === null || value === undefined) return '---'
  return String(value)
}
