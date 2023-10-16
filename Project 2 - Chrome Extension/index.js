


let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const savetab = document.getElementById("save-tab")
// Push the value "www.awesomelead.com" to myArray when the input button is clicked


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )  //Checking for existing data and then rendering it
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" // Clear the input
    localStorage.setItem("myLeads",JSON.stringify(myLeads)) //Storing list in local storage by converting the list to string using JSON
    renderLeads()
})

deletebtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})

savetab.addEventListener("click", function(){
    
})

function renderLeads(){
    let listItems=""
    for(let i=0;i<myLeads.length;i++){
        //ulEL.innerHTML += "<li>" + myLeads[i] + "</li>"
    
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`

    }
    
    ulEL.innerHTML = listItems
}
