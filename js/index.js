const url = 'https://economia.awesomeapi.com.br/last/'
        const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

        fetch(url + coins)
            .then(function(response){
                return response.json()
            })
            
            .then(function(data){
                const dolarReal = data.USDBRL
                const euroReal = data.EURBRL
                const btcReal = data.BTCBRL

                let estaData = new Date(dolarReal.create_date)
                
                document.getElementById('title').innerHTML = dolarReal.name
                document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
                document.getElementById('maxvalue').innerHTML = parseFloat(dolarReal.high).toLocaleString('pt-br',{
                    style: 'currency',
                    currency: 'BRL'
                })
                document.getElementById('minvalue').innerHTML = parseFloat(dolarReal.low).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                }) 
            })