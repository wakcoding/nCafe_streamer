

console.log("The content script is ejected!!!!");

const targetClass = 'comment_tab';

const codes = {};

codes.commentWriterTargetClass = 'comment_tab';
codes.noticeTargetClass = 'unload';
codes.webtoonViewerClass = 'article_wrap';

codes.addedObserver = new MutationObserver(function(mutationsList) {
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
                        <button id="moveToCW" class="nCafe-Btn nCafe-GrayBtn nCafe-MoveToCommentWriter">
                            댓글쓰기
                        </button>
                        `;
                        const moveToCommentWriterBtn = iframeDoc.querySelector('#moveToCW');
                        // moveToCommentWriterBtn.classList.add("nCafe-Btn", "nCafe-GrayBtn", "nCafe-MoveToCommentWriter");
                        moveToCommentWriterBtn.addEventListener('click', ()=>{
                            MoveToCommentWriter();
                        });
                    }else{
                        console.log("There is no commentTab");
                    }
                }

                if(addedNode.classList && addedNode.classList.contains(codes.noticeTargetClass)){
                    if(addedNode){
                        console.log(addedNode.onclick);
                    }else{
                        console.log("There is no notice articles");
                    }
                }

                if(addedNode.classList && addedNode.classList.contains(codes.webtoonViewerClass)){
                    if(addedNode){
                        const leftArea = addedNode.querySelector('.ArticleTopBtns>.left_area');
                        if(!leftArea) return;
                        leftArea.innerHTML += `
                        <button id="webtoonViewerBtn" class="nCafe-Btn nCafe-GrayBtn nCafe-webtoonViewer">
                            웹툰뷰어
                        </button>
                        `;
                        const moveToCommentWriterBtn = iframeDoc.querySelector('#moveToCW');
                        moveToCommentWriterBtn.addEventListener('click', ()=>{
                            const groupArea =  document.querySelector('#group-area');
                            const isWebtoonView = groupArea.classList.contains('webtoonView');
                            if(isWebtoonView){
                                groupArea.classList.remove('webtoonView');
                                document.querySelector('#main-area').classList.remove('webtoonView');
                            }else{
                                groupArea.classList.add('webtoonView');
                                document.querySelector('#main-area').classList.add('webtoonView');
                            }
                            
                        });
                    }else{
                        console.log("There is no webtoonView");
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
            codes.addedObserver.observe(iframeDoc.querySelector('body'), { childList: true, subtree: true });
        }
        console.log(iframeDoc.querySelector('.Article').innerHTML);
    };
};





codes.init();