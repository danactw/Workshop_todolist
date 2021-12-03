document.addEventListener('DOMContentLoaded', function(){
  const list_group = document.querySelectorAll('li')
  list_group.forEach(function(list){
    list.addEventListener('click', function(e){
      if (list.className === 'checked'){
        list.classList.remove('checked')
      } else {
        list.classList.add('checked')
      }
    })
  })
})
