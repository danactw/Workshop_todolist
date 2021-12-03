document.addEventListener('DOMContentLoaded', function(){
  const list_group = document.querySelectorAll('li')
  const closebtn = document.querySelectorAll('.close')

  list_group.forEach(function(list){
    list.addEventListener('click', function(e){
      //點擊任務list可以切換checked class
      if (list.className === 'checked'){
        list.classList.remove('checked')
      } else {
        list.classList.add('checked')
      }

      //點擊x可移除任務
      if (e.target && e.target.nodeName == 'SPAN'){
        e.target.parentNode.remove()
      }
    })
  })
})

