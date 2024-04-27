
const submitBtn = document.querySelector('.submit-btn')
submitBtn.addEventListener("click", () => {

    const submit = confirm('yakin ingin mengerjakan sekarang?');    
    
    function myFunc() { 
        window.location.href = "tryout.html"; 
    } 
    myFunc();
});
      