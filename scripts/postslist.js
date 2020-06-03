// Delete post on click of yes in modal
$(DeleteModal).on('show.bs.modal',function (event){
    var button = $(event.relatedTarget)
    var id = button.data('id')
    var modal = $(this)

    modal.find('.btn-success').on('click',function(){
        var post = document.getElementById(id);
        post.style.display='none'    
    })
    
})


// redirect to post page
const postPage = ()=>{
    window.location.href="./html/post.html"
}