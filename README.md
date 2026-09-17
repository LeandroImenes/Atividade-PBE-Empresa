# API Empresa XXX
Atividade realizada na matéria de PBE (Programação Back-End).

inventario.json
``` JSON
[
    {
        "id": 1,
        "item":"Computador",
        "local":"Laboratório de mídia e tecnologias",
        "dataRegistro":"2026-05-22",
        "valor":2000.00,
        "patrimonio":"PAT-00125"
    },
    {
        "id": 2,
        "item":"Meta Quest 3",
        "local":"Área de lazer",
        "dataRegistro":"2026-06-07",
        "valor":3500.00,
        "patrimonio":"PAT-00126"
    },
    {
        "id": 3,
        "item":"Máquina Impressora",
        "local":"Escritório",
        "dataRegistro":"2026-04-02",
        "valor":1000.00,
        "patrimonio":"PAT-00127"
    }
]
```

<br>

## Descrição
Este código foi baseado em uma empresa comum de tecnologia, com seus dados sendo feitos em inspiração da empresa fictícia

<br>

## Instruções para a instalação
### 1° Forma
Para instalar o programa, basta ir até a pasta que deseja copiar os arquivos, abrir o Git Bash na pasta, escrever git clone e pressionar enter. Após isso, abra o VS CODE, crie um terminal em Command Prompt (CMD), escreva npm run dev. Após o servidor estar rodando, utilize a extensão Thunder Client para alterar as informações desejadas
### 2° Forma
Abra um compilador qualquer (VS Code é o recomendado), crie um terminal em Git Bash e escreva git clone e pressione enter. Depois, crie um terminal em Command Prompt (CMD), escreva npm run dev. Depois, utilize a extensão Thunder Client para alterar as informações desejadas

<br>

## Tecnologias utilizadas
- VS Code
- Node.js
- JavaScript
- JSON

<br>

## Rotas
```
Post produto: http://localhost:3000
Get produto: http://localhost:3000
Get produto por id: http://localhost:3000/id
Put produto: http://localhost:3000/:id
Delete produto: http://localhost:3000/:id
```

<br>

## Exemplos de requisições
- Create POST: http://localhost:3000
- Corpo
