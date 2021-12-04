document.addEventListener('DOMContentLoaded', function(){
  const list_container = document.querySelector('ul')
  const list_group = document.querySelectorAll('li')
  const addbtn = document.querySelector('.addBtn')

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
    let getStorage = localStorage.getItem('todolist')
    const input = document.querySelector('#input')
    const input_value = input.value

    // 按下 + 可以新增任務
    const todo = document.createElement('li')
    // let id = Date.now()
    // li.dataset.id = id
    todo.innerHTML = `${input_value} <span class="close">x</span>`
    list_container.appendChild(todo)
    // 新增的任務也須具有 標記完成 / 刪除功能
    todo.addEventListener('click', function(e){
      // 點擊任務list可以切換checked class
      if (todo.className === 'checked'){
        todo.classList.remove('checked')
        // getStorage.forEach(data => {
        //   if(data.id == e.target.dataset.id) {
        //     return data.checked = false
        //   }
        // })
      } else {
        todo.classList.add('checked')
        // getStorage.forEach(data => {
        //   if(data.id == e.target.dataset.id) {
        //     return data.checked = true
        //   }
        // })
      }
      // 點擊x可移除任務
      if (e.target && e.target.nodeName == 'SPAN'){
        e.target.parentNode.remove()
        // filter
      }
    })

    const obj = {
      checked : false,
      id: id,
      content: input_value
    }

    updateLocalStorage(obj)
    
  })
})

function updateLocalStorage() {
  let getStorage = localStorage.getItem('todolist')
  getStorage.push(obj)
  localStorage.setItem('todolist', JSON.stringify(getStorage))
}









