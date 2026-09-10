const express = require("express")
const produtos = require("./dados.json")

const mostrarProdutos = (req, res) => {
    res.send(produtos)
}

const novoProduto=(req, res) => {
    if(req.body){
        res.send("Produto cadastrado")
        produtos.push(req.body)
    }else{
        res.send("Erro ao cadastrar o produto")
    }
}

const excluirProduto = (req, res) => {
    const id = req.query.id
    produtos.forEach((produto, indice) => {
        if(produto.id == id) {
            produtos.splice(indice, 1)
        }
    })
    res.send("Produto excluído com sucesso.")
}

const alterarProduto = (req, res) => {
    const id = req.params.id
    const dados = req.body

    produtos.forEach((produto) => {
        if(produto.id == id) {
            produto.item = dados.item
            produto.local = dados.local
            produto.dataRegistro = dados.dataRegistro
            produto.valor = dados.valor
            produto.patrimonio = dados.patrimonio
        }
    })
    res.send("Produto atualizado com sucesso!")
}

const buscarProduto = (req, res) => {
    const id = req.params.id
    const produto = produtos.find((p) => p.id == id)

    if(produto) {
        return res.send(produto)
    }
    res.status(404).send("Produto não encontrado")
}

const app = express()
app.use(express.urlencoded({extended:true}))
const porta = 3000

app.post("/", novoProduto)
app.get("/", mostrarProdutos)
app.get("/:id", buscarProduto)
app.delete("/", excluirProduto)
app.put("/:id", alterarProduto)

app.listen(porta, () => {
    console.log(`Cliente: http://127.0.0.1:3000`)
    console.log(`Servidor: http://localhost:${porta}/`)
})