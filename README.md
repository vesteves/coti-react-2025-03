## URL DO PROJETO
https://reacttodo-coti.vercel.app/

Link da API do TODO-list 
https://jsonplaceholder.typicode.com/todos

___


### E-commerce - Pandi

Área do visitante = home, produto, sobre
Área do cliente autenticado = perfil, carrinho (localStorage)

```
Componente Footer {
    Copyright (Ano atual)
    Telefone de contato
    E-mail
}
```

Layout Visitante = `<Header>{CONTEUDO}<Footer>`
```
Componente Header {
    Link das categorias
    Botão de Login
}
```


Layout Autenticado = `<Header>{CONTEUDO}<Footer>`
```
Componente Header {
    Link das categorias
    O nome do usuário autenticado
}
```

```
Pagina Home {
    Banner (imagem nossa)
    3 Produtos das principais categorias (['Destaque', 'Meninas', 'Meninos'])
}
```

```
Pagina Produto {
    Imagem à esquerda
    Detalhes à direita (Preço, Descrição, CTA adicionar ao carrinho)
}
```

```
Pagina Sobre {
    Descrição em Texto
}
```

```
Pagina Perfil (autenticada) {
    Nome do usuário
    E-mail do usuário
    Formulário de edição dos 2 dados
}
```

```
Pagina Carrinho (autenticada) {
    Listagem dos produtos que estão no carrinho
    Valor total da compra
}
```

Categorias = ['Meninas', 'Meninos', 'Bebês', 'Destaque']