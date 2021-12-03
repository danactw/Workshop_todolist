document.addEventListener('DOMContentLoaded', function(){
  const list_container = document.querySelector('ul')
  const list_group = document.querySelectorAll('li')
  const addbtn = document.querySelector('.addBtn')
  const closebtn = document.querySelectorAll('.close')
  
  list_group.forEach(function(list){
    list.addEventListener('click', function(e){
      // 點擊任務list可以切換checked class
      if (list.className === 'checked'){
        list.classList.remove('checked')
      } else {
        list.classList.add('checked')
      }

      // 點擊x可移除任務
      if (e.target && e.target.nodeName == 'SPAN'){
        e.target.parentNode.remove()
      }
    })
  })

  // 輸入新任務名稱，按下 + 新增任務
  addbtn.addEventListener('click',function(e){
    // 取得 input 輸入的文字
    const input = document.querySelector('#input')
    const input_value = input.value
    // 按下 + 可以新增任務
    const todo = document.createElement('li')
    todo.innerHTML = `${input_value} <span class="close">x</span>`
    list_container.appendChild(todo)
    // 新增的任務也須具有 標記完成 / 刪除功能
    todo.addEventListener('click', function(e){
      // 點擊任務list可以切換checked class
      if (todo.className === 'checked'){
        todo.classList.remove('checked')
      } else {
        todo.classList.add('checked')
      }
      // 點擊x可移除任務
      if (e.target && e.target.nodeName == 'SPAN'){
        e.target.parentNode.remove()
      }
    })
  })
})








