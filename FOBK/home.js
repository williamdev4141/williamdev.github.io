
const submitBtn = document.querySelector('.submit-btn')
submitBtn.addEventListener("click", () => {

    const submit = confirm('yakin ingin mengerjakan sekarang?');    
    
    if (submit === true) {     
        function myFunc() { 
            window.location.href = "tryout.html"; 
        } 
        myFunc();
    }
});


// template soal json
// {
//     "questionCode" : "1",
//     "mainQuestion" : "10. Ketika berdiskusi, siswa lebih banyak mengingat pelajaran dengan durasi rata-rata 2 minggu. Tetapi, ketika siswa diajari oleh guru, daya ingat mereka terhadap pelajaran yang diberikan hanya bertahan sehari bahkan beberapa jam. Manakah pernyataan berikut yang PALING MUNGKIN menjelaskan perbedaan kedua kondisi tersebut?",
//     "option" : {
//         "A" : "Faisal" , 
//         "B" : "aaa" ,
//         "C" : "Farand" , 
//         "D" : "Isw" ,
//         "E" : "Iswanel" 
//     } , 
//     "correctOption" : "D" ,
//     "correctAnswer" : "A. Graham Bell"
// } ,
      