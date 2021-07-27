let n_p = document.getElementById('name');
let s_p = document.getElementById('surname');
let p_p = document.getElementById('phone');
let n_input = document.getElementById('imie');
let s_input = document.getElementById('nazwisko');
let p_input = document.getElementById('tel');
let buttom = document.querySelector('button');
document.querySelector('button').onclick = function () {
    n_p.textContent = n_input.value;
    s_p.textContent = s_input.value;
    p_p.textContent = p_input.value;
}