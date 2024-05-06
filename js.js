document.addEventListener("DOMContentLoaded", function() {
   const lists = document.querySelectorAll('.box');

   for (let i = 0; i < lists.length; i++) {
       let title = document.createElement("p");
       title.className = 'a';
       title.style.backgroundColor = "red";
       title.style.width = '100px';
       title.style.height = '100px';
       lists[i].appendChild(title);
   }
});
