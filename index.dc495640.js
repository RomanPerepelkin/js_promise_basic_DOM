var e=document.querySelector(".logo"),n=new Promise(function(n){e.addEventListener("click",function(){n()})}),o=new Promise(function(e,n){setTimeout(function(){n(Error)},3e3)});n.then(function(){var e=document.createElement("div");e.classList.add("message"),e.innerHTML="Promise was resolved!",document.body.appendChild(e)}),o.catch(function(){var e=document.createElement("div");e.className="message error-message",e.innerHTML="Promise was rejected!",document.body.appendChild(e)});
//# sourceMappingURL=index.dc495640.js.map
