const toggleButton=document.getElementsByClassName('toggle-btn')[0]
const navlinks=document.getElementsByClassName('links')[0]
const buttons=document.getElementsByClassName('log')[0]
toggleButton.addEventListener('click' , () => {
    navlinks.classList.toggle('active')
    buttons.classList.toggle('active')

})