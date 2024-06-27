function popUpShow(showElement) {
    document.body.style.overflow = "hidden";
    const show = document.querySelector(showElement);
    show.classList.add("popControl--active");
    document.body.style.overflow = "hidden";
    show.style.overflowY = "scroll";
}

function popUpClose(showElement) {
    document.body.style.overflow = "visible";
    const show = document.querySelector(showElement);
    show.classList.remove("popControl--active");
    document.body.style.overflow = "visible";
    show.style.overflowY = "hidden";
}


// 問題一
const js_pop1 = document.querySelectorAll('.js-pop1')
const pop01 = document.querySelector('.pop01titleControl')
data.forEach((item, ind) => {
    js_pop1.forEach((popItem, popInd) => {
        popItem.addEventListener("click", () => {
            if (ind === popInd) {
                let strInner = `
                <p class="txt-xxl mb-2">${item.member}</p>
                <p class="txt-xl mb-2"><b>選手背號：</b>${item.num}</p>
                <p class="txt-xl mb-2"><b>參賽日：</b>${item.CompetitionDay}</p>
                <p class="txt-xl mb-2"><b>管理職昇格日：</b>${item.ManagementUpDay}</p>
                <p class="txt-xl mb-2"><b>跑道経歴：</b>${item.experience}</p>
                <p class="txt-xl"><b>PJ経歴：</b>${item.experiencePJ}</p>
                `
                pop01.innerHTML = strInner;
            }
        })
    })
})

// 問題二
const js_pop2 = document.querySelectorAll('.js-pop2')
const pop02 = document.querySelector('.pop02 .pop01titleControl')
data.forEach((item, ind) => {
    js_pop2.forEach((popItem, popInd) => {
        popItem.addEventListener("click", () => {
            if (ind === popInd) {
                let strInner = `
                <p class="txt-xxl mb-2">${item.member}</p>
                <p class="txt-xl mb-2"><b>口頭禪：</b>${item.mouthTitle}</p>
                `
                pop02.innerHTML = strInner;
            }
        })
    })
})

// 問題三
const js_pop3 = document.querySelectorAll('.js-pop3')
const popvideo = document.querySelectorAll('.pop03 .video')
// console.log(popvideo)
popvideo.forEach((item, ind) => {
    js_pop3.forEach((popItem, popInd) => {
        popItem.addEventListener("click", () => {
            if (ind === popInd) {
                // console.log(item)
                item.style.display = "block"
            } else {
                item.style.display = 'none'
            }
        })
    })
})

// const show = document.querySelector('.show');
// let innerContent = '';
// data.forEach(item => {
//     console.log(item)
//     item.content.forEach(contentItem => {

//         innerContent += `
//         <div>
//             <p>${contentItem.name}</p>
//             <img src="${contentItem.imgUrl}">
//             <p>${contentItem.title}</p>
//         </div
//         `
//         console.log(innerContent)
//         show.innerHTML = innerContent
//     })
// })



// 問題五
const js_pop5 = document.querySelectorAll('.js-pop5')
const pop05_peopleList = document.querySelector('.pop05 .peopleList')
const pop05_titleList = document.querySelector('.pop05 .titleList')
let peopleData = '';
let titleData = '';
data.forEach((item, ind) => {
    js_pop5.forEach((memberItem, memberInd) => {
        memberItem.addEventListener('click', () => {
            if (ind === memberInd) {
                peopleData = '';
                titleData = '';
                item.content.forEach((human,ind) => {
                    peopleData += `
                    <li class="peopleItem">
                        <img src=${human.imgUrl} alt="">
                        <p>${human.name}</p>
                    </li>`

                    titleData += `
                    <li class="titleItem titleItem--no">
                        <p class="txt-big mb-2">${human.name}：</p>
                        <p>${human.title}</p>
                    </li>
                    `
                    pop05_peopleList.innerHTML = peopleData;
                    pop05_titleList.innerHTML = titleData;
                    console.log('people',ind)
                })
                pop05Init()
                
            }
        })
    })

})


function pop05Init() {
    // people
    const peopleList = document.querySelector('.peopleList')
    const peopleItem = document.querySelectorAll('.peopleItem')
    // 內文
    const titleList = document.querySelector('.pop05 .titleControl')
    const titleItem = document.querySelectorAll('.titleItem')
    // 按鈕
    const closebtn = document.querySelector('.closebtn')
    const gobackbtn = document.querySelector('.gobackbtn')

    // 顯示內容
    peopleItem.forEach((clickItem, clickInd) => {
        clickItem.addEventListener("click", () => {
            titleItem.forEach((titleItem, titleInd) => {
                if (clickInd === titleInd) {
                    peopleList.classList.add('peopleList--close')
                    titleList.classList.add('titleList--show')
                    titleItem.classList.remove('titleItem--no')
                    closebtn.classList.add("btn--no")
                    // pop05_titleList.style.top = `${(100/31)+titleInd*1.2}%`
                } else {
                    // peopleList.classList.remove('peopleList--close')
                    titleItem.classList.add('titleItem--no')
                    gobackbtn.classList.remove('btn--no')

                }
            })
        })
    })

    // 返回建
    gobackbtn.addEventListener('click', () => {
        peopleList.classList.remove('peopleList--close')
        titleList.classList.remove('titleList--show')
        closebtn.classList.remove("btn--no")
        gobackbtn.classList.add('btn--no')
    })
    // 關閉建
    closebtn.addEventListener('click', () => {
        titleList.classList.remove('titleList--show')
        peopleList.classList.remove('peopleList--close')
    })
    // 點擊內文關閉
    titleItem.forEach(item => {
        item.addEventListener('click', () => {
            peopleList.classList.remove('peopleList--close')
            titleList.classList.remove('titleList--show')
            item.classList.add('titleItem--no')
            closebtn.classList.remove("btn--no")
            gobackbtn.classList.add('btn--no')
        })
    })
}