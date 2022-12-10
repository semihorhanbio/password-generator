const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btn = document.getElementById("password-btn");
btn.addEventListener("click", () => {
    document.querySelectorAll(".password-box")[0].textContent = createRandomPassword();
    document.querySelectorAll(".password-box")[1].textContent = createRandomPassword();
})
 const createRandomPassword = () => {
    let password = "";
    for (let i=0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
 }
