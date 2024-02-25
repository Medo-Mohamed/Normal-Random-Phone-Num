
var arrCont = [] ;

window.onload = () => {

  const newArray = [];
  for (let i = 0; i < 100; i++) {
    const randomMostOF = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;

    const choseNUM = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    let EgyNum;
    if (choseNUM === 0 || choseNUM === 4 || choseNUM === 8) {
      EgyNum = `010`;
    } else if (choseNUM === 1 || choseNUM === 5 || choseNUM === 9) {
      EgyNum = `011`;
    } else if (choseNUM === 2 || choseNUM === 6) {
      EgyNum = `012`;
    } else if (choseNUM === 3 || choseNUM === 7) {
      EgyNum = `015`;
    }
    const trueNUM = `${EgyNum}${randomMostOF}`
    const objNum = { id: i, num: trueNUM };
    newArray.push(objNum);
  }

  arrCont = newArray
  // console.log(arrCont)


    const container = document.getElementById('ul');
    arrCont.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.num;
      li.id = `art${item.id}`;
      // li.classList.add('mt-2');
      li.addEventListener('click', () => {
        CopyText(`art${item.id}`);
      });
      container.appendChild(li);
      // console.log(li)
    });
  };
  
  function CopyText(id) {
  
    const li = document.getElementById(id);
    if (li) {
      const text = li.textContent;
      navigator.clipboard.writeText(text);
      li.remove();
    }
  }
  
  document.getElementsByClassName('reload')[0].addEventListener('click' , () => window.location.reload())
// console.log()