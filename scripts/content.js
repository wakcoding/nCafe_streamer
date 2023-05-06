

console.log("The content script is ejected!!!!");

const targetClass = 'comment_tab';

const codes = {};

codes.commentWriterTargetClass = 'comment_tab';
codes.noticeTargetClass = 'unload';

codes.commentWriterObserver = new MutationObserver(function(mutationsList) {
    const iframeDoc = document.querySelector('iframe#cafe_main').contentWindow.document;
    if(!iframeDoc) return;
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            for (let addedNode of mutation.addedNodes) {
                if (addedNode.classList && addedNode.classList.contains(codes.commentWriterTargetClass)) {
                    if(addedNode){
                        function MoveToCommentWriter(){
                            const location = iframeDoc.querySelector(".CommentWriter").offsetTop;
                            if(!location) console.log("There is no commentWriter.");
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

codes.noticeObserver = new MutationObserver(function(mutationsList) {
    const iframeDoc = document.querySelector('iframe#cafe_main').contentWindow.document;
    if(!iframeDoc) return;
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            for (let addedNode of mutation.addedNodes) {
                if (addedNode.classList && addedNode.classList.contains(codes.noticeTargetClass)) {
                    if(addedNode){
                        console.log(addedNode.onclick);
                    }else{
                        console.log("There is no commentTab");
                    }
                }
            }
        }
    }
});


codes.init = ()=> {
    const cafeMain = document.querySelector('iframe#cafe_main');

    if(!cafeMain) return;

    cafeMain.onload = function(){
        const iframeDoc = document.querySelector('iframe#cafe_main').contentWindow.document;

        const noticeArticles = iframeDoc.querySelector('._noticeArticle>.td_article');
        if(iframeDoc.querySelector('body')){
            console.log('body had started');
            codes.commentWriterObserver.observe(iframeDoc.querySelector('body'), { childList: true, subtree: true });
            codes.noticeObserver.observe(iframeDoc.querySelector('body'), { childList: true, subtree: true });
        }
        
    };
};





codes.init();