var likes = 3
function likeHandler(){
    likes++

    var h4 = document.querySelector(".first-like")
    console.log(h4.innerText)

    h4.innerText = likes + " likes"
}