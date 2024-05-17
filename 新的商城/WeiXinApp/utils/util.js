const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

//富文本数据处理，过滤图片大小。
const richTextImg = html => {
  if (html == null || html == "") return "";
  return html.replace(/\<img/g, '<img style="width:100%;height:auto;display:blok"');
}

module.exports = {
  formatTime,
  richTextImg
}