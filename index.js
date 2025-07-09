function changeBackground(){
    let color = '#' 
    + Math.round(Math.random()*255).toString(16)
    + Math.round(Math.random()*255).toString(16)
    + Math.round(Math.random()*255).toString(16)
    while (color.length != 7){
        console.log(color.length)
        color = color + "0"
    }
    document.getElementsByTagName('html')[0] .style.backgroundColor = color
    document.getElementById('background-button').setAttribute('onclick', 'resetBackground()')
    document.getElementById('background-button').innerText = "Reset the background color."
}

function resetBackground(){
    document.getElementsByTagName('html')[0].removeAttribute('style')
    document.getElementById('background-button').setAttribute('onclick', 'changeBackground()')
    document.getElementById('background-button').innerText = "Randomise the background color."
}

function wobble(){
    const html = document.getElementsByTagName('html')[0]
    html.classList.add('wobble')
    const wobble_button = document.getElementById('wobble-button')
    wobble_button.innerText = "Make it stop."
    wobble_button.setAttribute('onclick', 'stopWobble()')
}

function stopWobble(){
    const html = document.getElementsByTagName('html')[0]
    html.classList.remove('wobble')
    const wobble_button = document.getElementById('wobble-button')
    wobble_button.innerText = "Make it wobble."
    wobble_button.setAttribute('onclick', 'wobble()')
}

function australian(){
    const html = document.getElementsByTagName('html')[0]
    html.classList.add('australian')
    const australian_button = document.getElementById('australian-button')
    australian_button.innerText = "View the Northern Hemisphere version."
    australian_button.setAttribute('onclick', 'stopAustralian()')

}

function stopAustralian(){
    const html = document.getElementsByTagName('html')[0]
    html.classList.remove('australian')
    const australian_button = document.getElementById('australian-button')
    australian_button.innerText = "View the Australian version."
    australian_button.setAttribute('onclick', 'australian()')
}

function teleport(){
    const teleport_button = document.getElementById('teleport-button')
    const coords = [Math.floor(20+60*Math.random()), Math.floor(20+60*Math.random())]
    const button_pos = "text-decoration: underline; position: fixed; bottom: "
                     + coords[1].toString() + "dvh; left: " + coords[0].toString() + "dvw;"
    teleport_button.style = button_pos
    teleport_button.innerText = 'Make it reset.'
    teleport_button.setAttribute('onclick', 'resetTeleport()')
}

function resetTeleport(){
    const teleport_button = document.getElementById('teleport-button')
    teleport_button.style = 'text-decoration: underline;'
    teleport_button.innerText = 'Make it teleport.'
    teleport_button.setAttribute('onclick', 'teleport()')
}