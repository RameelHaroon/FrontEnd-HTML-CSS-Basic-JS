


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase,ref, push ,onValue,remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL : "https://playground-fa8bd-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")
//firebase setup


const addBtn = document.getElementById("add-btn")
const input = document.getElementById("input-field")
const shoppingEl = document.getElementById("shopping-list")
addBtn.addEventListener("click" , function(){
    let inputValue = input.value
    push(shoppingListInDB,inputValue)
    clearInput()
})

function clearInput(){
    input.value = ""
}

function clearList(){
    shoppingEl.innerHTML = ""
}

function addToList(item){
   // shoppingEl.innerHTML += `<li>${input}</li>`
   let itemID = item[0]
   let itemValue = item[1]


   let newEL = document.createElement("li")
   newEL.textContent = itemValue

   newEL.addEventListener("dblclick",function(){
        let location = ref(database, `shoppingList/${itemID}`)
        remove(location)
   })

   shoppingEl.append(newEL)
}

onValue(shoppingListInDB, function(snapshot){

    if(snapshot.exists()){
        let ShoppingItems = Object.entries(snapshot.val())
        clearList()
        
        for(let i=0;i<ShoppingItems.length;i++){
            let currentItem = ShoppingItems[i]
    
            //let currentItemID = currentItem[0]
            //let currentItemValue = currentItem[1]
            addToList(currentItem)
        }
    }else{
        shoppingEl.innerHTML = `<p>No items yet</p>`
    }
    
})