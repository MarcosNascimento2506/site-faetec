
/*
function myFunction () {  
    let objcpf = document.getElementById("cpf")
    let cpf = objcpf.value
    let objusu = document.getElementById("usuario");
    let usu = objusu.value;
    let resp = `Olá ${usu}, seu CPF (${cpf}) foi cadastrado com sucesso!`
    let objresp = document.getElementById("resp");
   objresp.innerHTML = resp
}
*/

function teste2() {

    console.log(this)

    let prim = usuario.value
    let seg = cpf.value
    newresp.innerHTML = `Olá ${prim}, seu CPF (${seg}) foi cadastrado com sucesso!`

    return false
}








