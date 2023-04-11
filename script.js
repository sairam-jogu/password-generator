let colorCode = document.querySelector(".colorcode");
let btn = document.querySelector("input");

let characters =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','^','&','*','<','>','/']



btn.addEventListener('input',generate=(length)=>{
    let passWord = "";
    if (length == 0){
        alert("Please enter length of password")
    }
    if(length>=21){
        alert("You can select Maximum length as 20")
    }
    else{

    for(let i=0;i<length;i++){
        passWord+=characters[Random()]
    }
    colorCode.innerHTML = passWord;
    }
})

const Random = ()=>{
    return Math.floor(Math.random() * characters.length)
}