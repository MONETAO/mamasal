//ボタンを押すごとに画面が切り替わる関数
$(function () {

    $(".btn").on("click", function () {
        $(this).closest("section").css("display", "none");
        id = $(this).attr("href");
        $(id).addClass("fit").fadeIn("slow").show();
    });



    //選択ボタンデータを配列に入れてカウントする関数
    var countA;
    var countB;
    var countC;
    var countD;
    var box = [];
    $(".btn").each(function () {
        $(this).on('click', function () {
            var value = $(this).data("value");
            box.push(value);

            countA = box.filter(function (x) {
                return x === "blue"
            }).length;
            countB = box.filter(function (y) {
                return y === "white"
            }).length;
            countC = box.filter(function (z) {
                return z === "black"
            }).length;
            countD = box.filter(function (q) {
                return q === "red"
            }).length;
        });
    });


    //結果を出力する関数
    $('.end').on('click', function () {
        // blue dragon
        if (countA > countB && countA > countC && countA > countD) {
            $('#answer_01').fadeIn(500); //回答1
            //    white tiger
        } else if (countB > countA && countB > countC && countB > countD) {
            $('#answer_02').fadeIn(500); //回答2
            //    black turtle
        } else if (countC > countA && countC > countB && countC > countD) {
            $('#answer_03').fadeIn(500); //回答3
            //    red bird
        } else if (countD > countA && countD > countC && countD > countB) {
            $('#answer_04').fadeIn(500); //回答4
            //  you're crazy
        } else if (countA == countB && countA == countC && countA == countD) {
            $('#answer_06').fadeIn(500); //回答6
            //  you suck
        } else {
            $('#answer_05').fadeIn(500);
        }
    });

});

$('.michin').on('click', function () {
    window.location.href = 'https://www.hogwartslegacy.com/ja-jp';
});

const michinImg = document.querySelector('.michin');

michinImg.addEventListener('mouseover', startRotation);
michinImg.addEventListener('mouseout', stopRotation);

function startRotation() {
  michinImg.classList.add('rotate');
}

function stopRotation() {
  michinImg.classList.remove('rotate');
}

const bgLogo = document.querySelector('.bg-logo');
const magicElements = document.querySelectorAll('.magic');

bgLogo.addEventListener('click', function() {
    magicElements.forEach(function(element) {
        element.classList.add('fade-out');
    });

    setTimeout(function() {
        window.location.href = 'mamasal-test-kr.html';
    }, 500); // 페이드 아웃 시간과 일치하는 밀리초 단위의 시간 지정
});

// document.addEventListener("DOMContentLoaded", function() {
//     var fadeElements = document.getElementsByClassName("fade-in-element");
//     for (var i = 0; i < fadeElements.length; i++) {
//       fadeElements[i].style.opacity = 1;
//     }
//   });