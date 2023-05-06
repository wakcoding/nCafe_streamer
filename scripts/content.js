

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
        if (mutation.type === 'childList') {
            const addedNodes = mutation.addedNodes;
            for (let node of addedNodes) {
                console.log("article node changed");
                if (node.className == "article_wrap") {
                    console.log("it's work!!!!!!!!!!!!!!!");
                    const iframeDoc = document.querySelector('iframe#cafe_main').contentWindow.document;
                    console.log(iframeDoc.querySelector('.comment_tab'));
                }
            }
        }
    }
});

*/
const targetClass = 'comment_tab';

const observer = new MutationObserver(function(mutationsList) {
    const iframeDoc = document.querySelector('iframe#cafe_main').contentWindow.document;
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            for (let addedNode of mutation.addedNodes) {
                if (addedNode.classList && addedNode.classList.contains(targetClass)) {
                    if(addedNode){
                        function MoveToCommentWriter(){
                            const location = iframeDoc.querySelector(".CommentWriter").offsetTop;
                            window.scrollTo({top:location, behavior:'smooth'});
                        }
                    
                        addedNode.innerHTML += `
                        <button id="moveToCW">
                            댓글쓰기
                        </button>
                        `;
                        const moveToCommentWriterBtn = iframeDoc.querySelector('#moveToCW');
                        moveToCommentWriterBtn.classList.add("nCafe-Btn", "nCafe-GrayBtn", "nCafe-MoveToCommentWriter");
                        moveToCommentWriterBtn.addEventListener('click', ()=>{
                            MoveToCommentWriter();
                        });
                    }else{
                        console.log("There is no commentTab");
                    }
                }
            }
        }
    }
});

const config = { childList: true, subtree: true };




document.querySelector('iframe#cafe_main').onload = function(){
    const iframeDoc = document.querySelector('iframe#cafe_main').contentWindow.document;
    if(iframeDoc.querySelector('body')){
        observer.observe(iframeDoc.querySelector('body'), { childList: true, subtree: true });
    }
};
    

/*
const iframeMain = document.querySelector('iframe#cafe_main');
console.log(iframeMain);
iframeMain.addEventListener('load', ()=>{
    const iframeDoc = iframeMain.contentWindow.document;
    console.log(iframeDoc.querySelector('.Article.layout_content'));
    iframeDoc.querySelector('.Article.layout_content').addEventListener('load', ()=>{
        const commentTab = iframeDoc.querySelector('.comment_tab');
        console.log(commentTab);
        if(commentTab){
            console.log("There is commentTab");
        
            commentTab.innerHTML += `
            <button class="nCafe-Btn nCafe-GrayBtn nCafe-MoveToCommentWriter">
                댓글쓰기
            </button>
            `;
            const moveToCommentWriterBtn = iframeDoc.querySelector('.nCafe-MoveToCommentWriter');
            moveToCommentWriterBtn.addEventListener('click', ()=>{
            MoveToCommentWriter();
            });
        }else{
            console.log("There is no commentTab");
        }

        function MoveToCommentWriter(){
            const location = iframeDoc.querySelector(".CommentWriter").offsetTop;
            window.scrollTo({top:location, behavior:'smooth'});
        }
    });
});

const observer = new MutationObserver(function(mutationsList) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        for (let addedNode of mutation.addedNodes) {
          if (addedNode.tagName === 'IFRAME') {
            addedNode.addEventListener('load', function() {
              // Code to execute when the iframe has finished loading
              const iframeElement = addedNode.contentWindow.document.getElementById('my-iframe-element');
              // Code to execute when the iframe element has changed
            });
          }
        }
      }
    }
  });
  
  const targetNode = document.getElementById('target-element');
  const config = { childList: true, subtree: true };
  
  observer.observe(targetNode, config);

  */