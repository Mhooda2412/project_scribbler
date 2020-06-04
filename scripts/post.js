function editMode(){
    var para = document.getElementById('postTitlePara')
    var input = document.getElementById('postTitleInput')
    var button= document.getElementById('editButton')
 
    

    if(button.textContent.match('Edit')){
        if(input.style.display === 'none'){
            para.style.display='none'
            input.style.display='block'
            input.value=para.textContent
        }
        button.innerHTML= 'Save '+'<i class="fa fa-floppy-o" aria-hidden="true"></i>'       
    }

    else if(button.textContent.match('Save')){
        button.innerHTML= 'Edit '+'<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'
        if(input.style.display === 'block'){
            para.style.display='block'
            input.style.display='none'
            para.textContent=input.value
        }
    }

}