function editMode(){
    var para = document.getElementById('postTitlePara')
    var input = document.getElementById('postTitleInput')
    var button= document.getElementById('editButton')
    var textareaDev = document.querySelector(".postContentInput")
    var contentPara = document.getElementById('postContentid') 
    var textarea=document.getElementById('postContentInputId')
 
    

    if(button.textContent.match('Edit')){
        if(input.style.display === 'none' && textareaDev.style.display==='none'){
            para.style.display='none'
            input.style.display='block'
            input.value=para.textContent
            contentPara.style.display='none'
            textarea.innerHTML=contentPara.textContent.replace(/\s+/g,' ').trim()
            textareaDev.style.display='block'
            textarea.style.height='auto'
            textarea.style.height=textarea.scrollHeight+'px'

        }
        button.innerHTML= 'Save '+'<i class="fa fa-floppy-o" aria-hidden="true"></i>'       
    }

    else if(button.textContent.match('Save')){
        button.innerHTML= 'Edit '+'<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'
        if(input.style.display === 'block' && textareaDev.style.display==='block'){
            para.style.display='block'
            input.style.display='none'
            para.textContent=input.value

            contentPara.style.display="block"
            contentPara.textContent = textarea.value
            textareaDev.style.display="none"

        }
    }

}

var like = 0
var likeButton = document.getElementById('postLikeButton')
var LikeDisplay = document.getElementById('likeDisplay')
function likeCount(){

    likeButton.innerHTML='<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked'
    like +=1
    LikeDisplay.innerHTML= like +' people like this!'

}