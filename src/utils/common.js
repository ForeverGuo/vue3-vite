import store from '@/store/store'

export const token = () => {
  let token = null;
  const user = JSON.parse(localStorage.getItem('user'));

  if(user && user.token) {
    store.commit('login', user);
    token = user.token;
  }
  return token;
}

// 导出文件
export function downloadUrl(res, name) {
  const blob = new Blob([res], { type: 'application/vnd.ms-excel' })
  // for IE
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    const fileName = name + '.xlsx'
    window.navigator.msSaveOrOpenBlob(blob, fileName)
  } else {
    // for Non-IE (chrome, firefox etc.)
    const fileName = name + '.xlsx'
    const elink = document.createElement('a')
    elink.download = fileName
    elink.style.display = 'none'
    elink.href = URL.createObjectURL(blob)
    document.body.appendChild(elink)
    elink.click()
    URL.revokeObjectURL(elink.href)
    document.body.removeChild(elink)
  }
}