const wellcome = () => {
    alert('Bienvenido a mi primer test!');
}
let comments = ['Pesimo Post', "Genial post", "Petrista", "Cuando posteas mas ?!!!please"];

comments.forEach(el => {
    var para = document.createElement("P");
    para.innerText = el;
    document.body.appendChild(para);
})

document.querySelector('#comment').onclick = () => {
    let com = document.querySelector('#new-comment').value;
    comments.push(com);
    var para = document.createElement("P");
    para.innerText = com;
    document.body.appendChild(para);
    document.querySelector('#new-comment').value = '';
}