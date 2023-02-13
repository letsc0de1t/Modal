var root = document.documentElement;

const displayModal = () =>{
    root.style.setProperty("--modalDisplay","block");
    root.style.setProperty("--modalBtn","none")
}

const submitModal = () =>{
    root.style.setProperty("--modalDisplay","none");
    root.style.setProperty("--thankText","block");
}