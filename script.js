function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'img/morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    } else{
        //BOA NOITE!
        img.src = 'img/night.png'
        document.body.style.background = '#515154'
    }
}