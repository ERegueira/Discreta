        const abecedario = 'abcdefghijklmnñopqrstuvwxyz';

        function encriptar() {
            const texto = document.getElementById('texto').value;
            let resultado = '';
            for (let i = 0; i < texto.length; i++) {
                const caracter = texto[i].toLowerCase();
                const indice = abecedario.indexOf(caracter);
                if (indice !== -1) {
                    const nuevoIndice = (indice + 3) % abecedario.length;
                    resultado += abecedario[nuevoIndice];
                } else {
                    resultado += caracter;
                }
            }
            document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
        }

        function desencriptar() {
            const texto = document.getElementById('texto').value;
            let resultado = '';
            for (let i = 0; i < texto.length; i++) {
                const caracter = texto[i].toLowerCase();
                const indice = abecedario.indexOf(caracter);
                if (indice !== -1) {
                    const nuevoIndice = (indice - 3 + abecedario.length) % abecedario.length;
                    resultado += abecedario[nuevoIndice];
                } else {
                    resultado += caracter;
                }
            }
            document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
        }