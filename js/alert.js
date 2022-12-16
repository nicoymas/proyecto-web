
const subContact=document.getElementById("subContact");


subContact.addEventListener("click",(e)=>{
    e.preventDefault();
    const Datos= {nombre: document.getElementById("form")[0].value, email: document.getElementById("form")[1].value, DNI:document.getElementById("form")[2].value}
    
    console.log(Datos);
    if((Datos.nombre).length >=5 && (Datos.email).length >=5 && (Datos.DNI).length >=5){
        Swal.fire({ 
            title: 'El formilario fue enviado con exito',
            text: 'Nos contactaremos con ud lo antes posible ',
            confirmButtonText: 'continuar',

         }).then((result) => {
            if (result.isConfirmed) {
              location.href="../index.html";
            } });
    }else{
        Swal.fire({
            title: 'error',
            text: 'los campos deben tener minimo 5 caracteres',
            icon: 'error',
            confirmButtonText: 'continuar',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
});




