document.addEventListener('DOMContentLoaded', function(){
  const todoList = document.querySelector('ul')
  const addBtn = document.querySelector('#addBtn')
  // console.log(addBtn);
  addBtn.addEventListener('click', ()=>{
    // 取得input的值
    const input = document.querySelector('#input')
    const input_value = input.value
    // 將input的值新增到todo list中
    const todo = document.createElement('li')
    todo.innerHTML = `${input_value}<span class="close">x</span>`
    todoList.appendChild(todo)
    // 清空input欄位
    input.value = ''
  })
  todoList.addEventListener('click', (e)=>{
    const clicked = e.target
    // 點擊任務list可以切換checked class
    if (clicked && clicked.nodeName == 'LI' && clicked.className == 'checked'){
      clicked.classList.remove('checked')
    } else {
      clicked.classList.add('checked')
    }
    // 點擊x可移除任務
    if (clicked && clicked.nodeName == 'SPAN'){
      clicked.parentNode.remove()
    }
  })
})