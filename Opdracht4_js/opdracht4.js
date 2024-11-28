for (let i = 1; i <= 10; i++) {
    let div = document.createElement('div');
    div.setAttribute("id", "div" + i);
    div.textContent = "This is div number " + i;
    document.body.appendChild(div);
}
