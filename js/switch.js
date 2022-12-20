const check=document.getElementById("checkbox");
check.addEventListener("change",function()
{
    if(this.checked)
    document.documentElement.setAttribute("data-theme","dark")
    else
    document.documentElement.setAttribute("data-theme","")
})