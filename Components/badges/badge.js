const statusBadge = document.querySelectorAll(".status-number")
console.log('status',statusBadge[0].innerHTML);

 
     let num;
    statusBadge[0].addEventListener('click',function count(){
     num = Number(statusBadge[0].innerHTML);
     num++;
    })

 