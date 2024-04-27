console.log('haidev');
let result = 0;


// const submitBtn = document.querySelector('.submit-btn');
// const finalResult = document.querySelector('.final-result');

// submitBtn.addEventListener("click" , () => {
//     // const submit = print('yakin ingin mengumpulkan jawaban? pastikan terlebih dahulu jawaban anda! ') SUMPAH DARI SINI AKU BARU TAU KEYWORD PRINT DI JS ITU UNTUK PRINT BENERAN,,lupa kirain ini python wkwwkwk...harusnya disini input

//     const submit = confirm('yakin ingin mengumpulkan jawaban? pastikan terlebih dahulu jawaban anda! ');    
   
//     if (submit === true) {
//         calcResult();

//         alert('terimakasih sudah mengerjakan try out dari farand');
//         finalResult.classList.add('final-result-showed');
//     }


// })


// function calcResult () {
//     // $.getJSON('data/question.json', function (data) {
//     //     let question = data.tryout;
//     //     const selectedOptionCalculation = document.querySelectorAll('.option li');
//     //     console.log(selectedOptionCalculation)
//     //     selectedOptionCalculation.forEach(e => {
//     //         console.log(question)
//     //         if (e.classList.contains('selected-option') == question.correctAnswer) {
//     //             result++
//     //             console.log(result)
//     //         } else {
//     //             console.log(result)
//     //         }
//     //     });
//     // });

//     const optionA = document.querySelectorAll('.optionA');
//     console.log(optionA)
// }
const questionOne = 'questionOne'
const questionTwo = 'questionTwo'
const questionThree = 'questionThree'
let x = Math.floor(Math.random()*10)
console.log(x)

let quest = '';
if (x >= 0 && x <= 3) {
    quest += questionOne
    console.log('paket 1')
} if (x > 3 && x <= 6) {
    quest += questionTwo
    console.log('paket 2')
} if (x > 6 && x <= 9) {
    quest += questionThree
    console.log('paket 3')
}

console.log(quest)

$.getJSON(`data/${quest}.json`, function (data) {
    console.log(data)
    let question = data.tryout;
    $.each(question, (i, e) => {
        let option = e.option
        $('.question-box').append(`<label for="" class="question"> ${i += 1}. ${e.mainQuestion} </label><ol type="A" class="option"><li class="optionA q${i -= 1} A">${option.A}</li><li class="optionB q${i} B">${option.B}</li><li class="optionC q${i} C">${option.C}</li><li  class="optionD q${i} D">${option.D}</li></ol>`)

        // $('.option').append(`<li>${option.A}</li><li>${option.B}</li><li>${option.C}</li><li>${option.D}</li>`)

    });

    // untuk logic saat option dipilih
    const selectedOption = document.querySelectorAll('.option li');

    // function slicingOptionArr(arr, chunkSize) {
    //     const res = [];
    //     for (let i = 0; i < arr.length; i += chunkSize) {
    //         const chunk = arr.slice(i, i + chunkSize);
    //         res.push(chunk);
    //     }
    //     return res;
    // }
    
    // ubah bentuknya dari nodeList menjadi array
    const arrayOfSelectedOption = [].slice.call(selectedOption);
    const totalOption = 4 //sebanyak jumlah option nya

    function slicingOptionArr(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }
    
    // console.log(slicingOptionArr(arrayOfSelectedOption, totalOption));
    const selectedOptionNestedArray = slicingOptionArr(arrayOfSelectedOption, totalOption);


        
    
    for (let i = 0; i < selectedOptionNestedArray.length; i++) {
        const selectedOptionArray = selectedOptionNestedArray[i];
        // console.log(selectedOptionArray)
        selectedOptionArray.forEach( e => {
            e.addEventListener("click" , () => {
                if (e.classList.contains('selected-option')) {
                    e.classList.remove('selected-option');
                    console.log('hai')
                } else {
                    selectedOptionArray.forEach(e => {
                        e.classList.remove('selected-option');
                    });        
                    e.classList.add('selected-option');
                }
                
            });
        });
    }
// AKHIRNYAAAAA SETELAH SEKIAN AMA BEFADANG SAMPE JAMSETENGAH 4 BIKIN FITUR INI
    




    const submitBtn = document.querySelector('.submit-btn');
    const finalResult = document.querySelector('.final-result');

    submitBtn.addEventListener("click" , () => {
        const submit = confirm('yakin ingin mengumpulkan jawaban? pastikan terlebih dahulu jawaban anda! ');    
    
        if (submit === true) {
            const correctAnsw = calcResult();
            console.log(correctAnsw)
            alert(`
                terimakasih sudah mengerjakan try out dari farand
                Kamu menjawab benar ${correctAnsw} soal
                Terimakasih...
                -ranfa
            `);

            const nilaiAnda = (correctAnsw * 10) + 50 
            $('.final-result').append(`Nilai Anda : ${nilaiAnda}`)
            finalResult.classList.add('final-result-showed');
        }
        
        // function myFunc() { 
        //     window.location.href = "test.html"; 
        // } 
        // myFunc();
    });

    function calcResult() {
        let correctAnsw = 0
        const answeredByUser = [];
        const correctAnswer = [];
        $.each(question, (i, e) => {
            correctAnswer.push(e.correctAnswer);    
        });
        
        for (let i = 0; i < selectedOptionNestedArray.length; i++) {
            const selectedOptionArray = selectedOptionNestedArray[i];

            selectedOptionArray.forEach( e => {
                if (e.classList.contains('selected-option')) {
                    const answText = e.textContent
                    answeredByUser.push(answText);
               }

            });
        }

        for (let i = 0; i < answeredByUser.length; i++) {
            const element = answeredByUser[i];
 
            correctAnswer.forEach((e, i) => {
                if (e == element) {
                    correctAnsw++ 
                }
            });
        
        }
        
        return correctAnsw
    }
    
});

// pindah keatas
// const pilihan = document.querySelectorAll('.option li');
// pilihan.forEach(e => {
//     e.addEventListener("click" , () => {
//         // e.style.backgroundColor = "red";  
//         pilihan.forEach(e => {
//             e.classList.remove('selected-option');
//         });
//         e.classList.add('selected-option');
//     })
// });



// gabut
// const a = document.querySelectorAll('.h4');
// const benar = document.querySelector('.benar');
// const salah = document.querySelector('.salah');
// a.forEach ((e, i )=> {
//     e.addEventListener("click" , () => {
//         // e.style.backgroundColor = "red";  
//         pilihan.forEach(e => {
//             e.classList.remove('h4-selected-option');
//         });
//         e.classList.add('h4-selected-option');

//        if (i !== 2) {
//         benar.classList.remove('benar-selec')
//         salah.classList.add('salah-selec')
//         console.log('noooo');
//        } else {
//             salah.classList.remove('salah-selec')
//             benar.classList.add('benar-selec')
//             console.log('yes');
//        };

//     });
// });


