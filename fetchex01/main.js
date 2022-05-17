const cep = document.querySelector("#cep")

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors', 
        cache:'deafult'
    }

    fetch(`viacep.com.br/ws/${search}/json/`, options)
    .then(response=>{ response.json()
        .then( data => console.log(data))
    })
    .catch(e => console.log('Deu erro: '))
})