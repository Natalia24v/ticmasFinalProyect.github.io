let toggle = document.getElementById('toggle');
let labelTog = document.getElementById('labelTog');
toggle.addEventListener('change', (event)=>{
    let checked = event.target.checked;
    document.body.classList.toggle('light');
if (checked == true){
    labelTog.innerHTML = '<i class="fa-regular fa-moon"></i>';
}
else{
    labelTog.innerHTML = '<i class="fa-regular fa-sun"></i>';
}
});