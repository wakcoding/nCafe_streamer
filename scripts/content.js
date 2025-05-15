

console.log("The content script is ejected!!!!");

const targetClass = 'comment_tab';

const codes = {};

codes.commentWriterTargetClass = 'comment_tab';

// codes.addedObserver = new MutationObserver(function(mutationsList) {
    
//     const iframeDoc = document.querySelector('iframe#cafe_main').contentWindow.document;
//     if(!iframeDoc) return;
//     for (let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             for (let addedNode of mutation.addedNodes) {
//                 if (addedNode.classList && addedNode.classList.contains(codes.commentWriterTargetClass)) {
//                     if(addedNode){
                        
//                         function MoveToCommentWriter(){
//                             const location = iframeDoc.querySelector(".CommentWriter").offsetTop;
//                             if(!location) console.log("There is no commentWriter.");
//                             window.scrollTo({top:location, behavior:'smooth'});
//                         }
                    
//                         addedNode.innerHTML += `
//                         <button id="moveToCW" class="nCafe-Btn nCafe-GrayBtn nCafe-MoveToCommentWriter">
//                             댓글쓰기
//                         </button>
//                         `;
//                         const moveToCommentWriterBtn = iframeDoc.querySelector('#moveToCW');
//                         // moveToCommentWriterBtn.classList.add("nCafe-Btn", "nCafe-GrayBtn", "nCafe-MoveToCommentWriter");
//                         console.log("move to!!")
//                         moveToCommentWriterBtn.addEventListener('click', ()=>{
//                             console.log("move to!!")
//                             MoveToCommentWriter();
//                         });

//                     }else{
//                         console.log("There is no commentTab");
//                     }
//                 }


//             }
//         }
//     }
// });

document.documentElement.setAttribute("data-loaded", "true"); // 깜빡임 방지

// console.log("toggle button added start");
// document.addEventListener("DOMContentLoaded", () => {
//     const targetDiv = document.getElementById("front-img");
//     if(!targetDiv) return;
//     const toggleButton = document.createElement("button");
//     toggleButton.textContent = "⏷";
//     toggleButton.style.cssText = "position: absolute; top: 5px; right: 5px; z-index: 10; cursor: pointer;";

//     targetDiv.style.position = "relative";
//     targetDiv.prepend(toggleButton);
//     console.log("toggle button added", toggleButton);

//     // 초기 상태 로드
//     const isCollapsed = localStorage.getItem("frontImgCollapsed") === "true";
//     if (isCollapsed) {
//         targetDiv.setAttribute("data-collapsed", "true");
//         toggleButton.textContent = "⏵";
//     }

//     // 토글 동작
//     toggleButton.addEventListener("click", () => {
//         const isNowCollapsed = targetDiv.getAttribute("data-collapsed") === "true";
//         if (isNowCollapsed) {
//             targetDiv.removeAttribute("data-collapsed");
//             toggleButton.textContent = "⏷";
//             localStorage.setItem("frontImgCollapsed", "false");
//         } else {
//             targetDiv.setAttribute("data-collapsed", "true");
//             toggleButton.textContent = "⏵";
//             localStorage.setItem("frontImgCollapsed", "true");
//         }
//     });
// });




codes.init = ()=> {
    const cafeMain = document.querySelector('iframe#cafe_main');

    if(!cafeMain) return;

    // cafeMain.onload = function(){
    //     const iframeDoc = document.querySelector('iframe#cafe_main').contentWindow.document;

    //     const noticeArticles = iframeDoc.querySelector('._noticeArticle>.td_article');
    //     if(iframeDoc.querySelector('body')){
    //         console.log('body had started');
    //         codes.addedObserver.observe(iframeDoc.querySelector('body'), { childList: true, subtree: true });
    //     }
    // };
};





codes.init();