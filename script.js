function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('pic')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    img.src = 'morningpic.jpg'
    document.body.style.background = '#FFE8C4'
}
else if (hora >= 12 && hora < 18){
    img.src = 'afternoonpic.jpg'
    document.body.style.background = '#CDFF94'
}
else {
    img.src = 'nightpic.jpg'
    document.body.style.background = '#201745'

}
}
