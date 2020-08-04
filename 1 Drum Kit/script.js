window.addEventListener("keydown", playSound);

function playSound(e)
{
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!sound)
    {
        return;
    }
    else
    {
        sound.currentTime = 0;
        sound.play();
        key.classList.add("playing");
        // setTimeout(function(){
        //     key.classList.remove("playing");
        // }, 70)
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));
function removePlayingClass(e)
{
    if (e.propertyName !== "transform")
    {
        return;
    }
    else
    {
        this.classList.remove("playing");
    }
    // console.log(e);
}