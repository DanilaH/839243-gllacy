var feedbackButton=document.querySelector(".feedback-button"),feedback=document.querySelector(".modal-feedback"),overlay=document.querySelector(".overlay"),close=document.querySelector(".modal-close"),focusName=document.querySelector(".textarea-name"),form=document.querySelector(".feedback-form"),email=document.querySelector(".textarea-feedback"),comment=document.querySelector(".textarea-comment"),storage="",isStorageSupport=!0;try{storage=localStorage.getItem("focusName")}catch(e){isStorageSupport=!1}feedbackButton.addEventListener("click",function(e){e.preventDefault(),feedback.classList.add("feedback-show"),overlay.classList.add("overlay-show"),storage?(focusName.value=storage,email.focus()):focusName.focus()}),close.addEventListener("click",function(e){e.preventDefault(),feedback.classList.remove("feedback-show"),feedback.classList.remove("feedback-error"),overlay.classList.remove("overlay-show")}),form.addEventListener("submit",function(e){focusName.value&&email.value&&comment.value?isStorageSupport&&localStorage.setItem("name",name.value):(e.preventDefault(),feedback.classList.remove("feedback-error"),feedback.offsetWidth=form.offsetWidth,feedback.classList.add("feedback-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedback.classList.contains("feedback-show")&&(e.preventDefault(),feedback.classList.remove("feedback-show"),feedback.classList.remove("feedback-error"),overlay.classList.remove("overlay-show"))});