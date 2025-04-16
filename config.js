function pegarcep() {
    window.location.href = "pagina.html"
    let cepInput = document.getElementById('cep'); 
    let cep = cepInput.value;  

    let url = `https://viacep.com.br/ws/${cep}/json/`;  


    fetch(url)
        .then(response => {
            return response.json(); 
        })
        .then(data => {
            let logradouro = data.logradouro;
            let bairro = data.bairro;
            let cidade = data.localidade;
            let uf = data.uf;

            console.log("lrogadouro:", logradouro);
            console.log("bairro:", bairro);
            console.log("cidade:", cidade);
            console.log("uf:", uf);

            document.getElementById('output').innerHTML = `
                Logradouro: ${logradouro}<br>
                Bairro: ${bairro}<br>
                Cidade: ${cidade}<br>
                UF: ${uf}
            `;
        })
        };
