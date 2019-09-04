const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const save = document.getElementById("btnInsert");
const isOutput = document.getElementById("isOutput");
const isClear = document.getElementById('isClear');

save.onclick = function(){
    const key = inpKey.value;
    const value = inpValue.value;
    
    if(key && value){
        localStorage.setItem(key, value);
        location.reload();
        // localStorage.clear();
    }
};
for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
   
    isOutput.innerHTML += `${key}.${value}</br>`;
};

// isClear.onclick= function(){
//     isOutput.innerHTML = localStorage.removeItem(key);
// }
       