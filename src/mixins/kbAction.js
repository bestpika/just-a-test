export default {
  methods: {
    kbFunc: function (e) {
      let input = document.querySelectorAll('input[class*="kb-"]')
      if (input.length > 0 && !e.shiftKey) {
        return
      }
      let row = Number(window.localStorage.getItem('row'))
      let col = Number(window.localStorage.getItem('col'))
      let fNow = document.querySelector(`.kb-${row}-${col}`)
      switch (e.keyCode) {
        case 37:
          col -= 1
          break
        case 38:
          row -= 1
          break
        case 39:
          col += 1
          break
        case 40:
          row += 1
          break
      }
      console.info(row, col)
      let fNew = document.querySelector(`.kb-${row}-${col}`)
      if (fNew) {
        if (fNow) {
          fNow.classList.remove('focused')
        }
        fNew.classList.add('focused')
        fNew.focus()
        window.localStorage.setItem('row', row)
        window.localStorage.setItem('col', col)
      }
    },
    kbWTF: function (e) {
      switch (e.keyCode) {
        case 9:
        case 38:
        case 40:
          if (e.shiftKey) {
            e.preventDefault()
          }
          break
      }
    },
    kbInit: function () {
      // 設定游標位置
      window.localStorage.setItem('row', 0)
      window.localStorage.setItem('col', 0)
      let zero = document.querySelector(`.kb-0-0`)
      zero.classList.add('focused')
      zero.focus()
      // 鍵盤事件
      window.addEventListener('keydown', this.kbWTF)
      window.addEventListener('keyup', this.kbFunc)
    },
    kbDele: function () {
      window.removeEventListener('keydown', this.kbWTF)
      window.removeEventListener('keyup', this.kbFunc)
    }
  }
}
