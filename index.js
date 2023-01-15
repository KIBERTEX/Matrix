const canvas = document.getElementById('Matrix')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
const latin = 'ABCDIFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789'
const cyrillic = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'

const alphabet = katakana + latin + nums + cyrillic

const fontSize = 16
const columns = canvas.width/fontSize

const colors = [ '#4e0404', '#1b350e', '#93c47d', '#c79f23', '#cbb573', '#c52b60', '#fce917', '#9b3ee9', '#56f131', '#ffffff']
const rainDrops = []

for (let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)'
    context.fillRect(0, 0, canvas.width, canvas.height)

    const randomIndex = Math.floor(Math.random() *colors.length)
    context.fillStyle = colors[randomIndex]

    context.font = fontSize + 'px monospace'
    for ( let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length ))   
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize)

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0
        }
        rainDrops[i]++
    }
}
 
setInterval(draw, 30)