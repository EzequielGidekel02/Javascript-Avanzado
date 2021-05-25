var ul = document.createElement('ul')

for (i=0; i<10; i++){
    
ul.innerHTML = ul.innerHTML + ('<li> Elemento' + (i +1)  + "</li>")

//     //INEFICIENTE
//     var li = document.createElement('li')
//     li.innerText = "Elemento " + (i+1)
//     ul.appendChild(li)
 }

document.body.appendChild(ul)