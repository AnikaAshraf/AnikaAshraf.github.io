var removebtn=document.getElementsByClassName("btn-danger")
console.log(removebtn);
for(var i=0;i<removebtn.length;i++)
{
    var button=removebtn[i]
    button.addEventListener('click',function(event){
        var buttonclicked=event.target
        buttonclicked.parentEement.remove()
    })
}