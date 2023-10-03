
function getCatImage() {
    let image = document.getElementById('cat-image')
    


fetch('https://api.thecatapi.com/v1/images/search?api_key=live_euxiKrpr7Y4fIuErkghDE0sJS2RUosL78TQF84PeRfanddcxaiYk19HpRrvtcN5e').then(resp => {
        return resp.json()
        }).then(json => {
        image.src = json[0].url
        })

}

function btnClick() {
    let btn = document.getElementById('btn')
    if (btn) {
        btn.addEventListener('click', () => getCatImage())

    }
}


document.addEventListener('DOMContentLoaded', () => {
    getCatImage()
    btnClick()
})