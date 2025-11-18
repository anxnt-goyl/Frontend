// innertext,textcontent,innerhtml
const chessBoard = document.querySelector(".chess");
const firstRow = `<div class="box"></div>`.repeat(8);
const secondRow = `<div class ="rbox"></div>`.repeat(8);
const completeRow = `${firstRow} ${secondRow}`.repeat(4);
chessBoard.innerHTML = completeRow; 