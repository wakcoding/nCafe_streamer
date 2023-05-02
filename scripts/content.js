

console.log("The content script is ejected!!!!");
/*

const observerYoutubeEmbed = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const addedNodes = mutation.addedNodes;
        for (let node of addedNodes) {
            console.log("youtube embed node changed");
            if (node.tagName === 'iframe') {
                if(node.src.startsWith("https://www.youtube.com/embed/")){
                    node.style.paddingTop = "56.25% !important";
                }
            }
        }
      }
    }
});

const observerArticle = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'subtree') {
            const addedNodes = mutation.addedNodes;
            for (let node of addedNodes) {
                console.log("article node changed");
                // if (node.tagName === 'iframe' && node.id == "cafe_main") {
                    observerYoutubeEmbed.observe(document.querySelector('.se-module.se-module-oembed'), { childList: true, subtree: true });
               // }
            }
        }
    }
});

observerArticle.observe(document.querySelector('iframe#cafe_main'), { childList: true, subtree: true });
*/

document.querySelector('iframe#cafe_main').onload = function(){
    const iframeDoc = document.querySelector('iframe#cafe_main').contentWindow.document;
    console.log(iframeDoc.querySelector('.layout_content'));
    iframeDoc.querySelector('.layout_content').onload = function(){
        console.log(iframeDoc.querySelector('.ArticleContentBox'));
    };
    
};


const commentTab = document.querySelector('.comment_tab');
if(commentTab){
    console.log("There is commentTab");
  
    commentTab.innerHTML += `
    <button class="nCafe-Btn nCafe-GrayBtn nCafe-MoveToCommentWriter">
        댓글쓰기
    </button>
    `;
    const moveToCommentWriterBtn = document.querySelector('.nCafe-MoveToCommentWriter');
    moveToCommentWriterBtn.addEventListener('click', ()=>{
      MoveToCommentWriter();
    });
}else{
    console.log("There is no commentTab");
}

function MoveToCommentWriter(){
    const location = document.querySelector(".CommentWriter").offsetTop;
    window.scrollTo({top:location, behavior:'smooth'});
}

