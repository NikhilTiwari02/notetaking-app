console.log("welcome to note app");
showNotes();
// if user adds a note add it to local storage
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e)
{
    let notes=localStorage.getItem("notes");
    let title=localStorage.getItem('title')
    if(notes==null||title==null)
    {notesarr=[];
    titlearr=[];}
    else
   { notesarr=JSON.parse(notes);
     titlearr=JSON.parse(title);
   }
    let addtxt=document.getElementById('addtxt');
    let input=document.getElementById('input');
    notesarr.push(addtxt.value);
    titlearr.push(input.value);
    localStorage.setItem("notes",JSON.stringify(notesarr));
    localStorage.setItem("title",JSON.stringify(titlearr));
    addtxt.value="";
    input.value="";
    showNotes();
})
//function to show elements from local storage 
function showNotes()
{ let notes=localStorage.getItem("notes");
 let title=localStorage.getItem("title");
if(notes==null)
{notesarr=[];
    titlearr=[];
}
else
{
notesarr=JSON.parse(notes);
titlearr=JSON.parse(title);
}
html=""
notesarr.forEach(function(element,index){
    html+=`<div class=" notecard card my-2 mx-2" style="width: 18rem;">
    <div class="card-body">
        <h4 class="card-title">${titlearr[index]}</h4>
        <p class="card-text">${element}</p>
            <button id=${index} onclick="deletetext(this.id)" class="btn btn-primary">Delete Card</button>
        </div>
</div>`
});
if(notesarr.length!=0)
document.getElementById("notes").innerHTML=html;
else
document.getElementById("notes").innerHTML="<h3>Added notes will be shown here<h3>" 

}
//delete function
function deletetext(index)
{     let notes=localStorage.getItem("notes");
      let title=localStorage.getItem('title');
         if(notes==null)
          { notesarr=[];
            title=[]
          }
          else
           { notesarr=JSON.parse(notes);
            titlearr=JSON.parse(title);}
        notesarr.splice(index,1);
        titlearr.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesarr));
    localStorage.setItem("title",JSON.stringify(titlearr));
    showNotes();
}
//making searchbox resposive
let search=document.getElementById("search")
search.addEventListener("input",function(){
  let inputval=search.value.toLowerCase();
  let cards=document.getElementsByClassName("card-text");
  Array.from(cards).forEach(function(element)
  {
      let cardtxt=element.innerText;
      if(cardtxt.includes(inputval))
      element.parentElement.parentElement.style.display="block";
      else
      element.parentElement.parentElement.style.display="none";
  })
  
console.log(cards);
})
