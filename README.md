# Estruturas de Dados

Implementação de estruturas de dados em **JavaScript**, desenvolvidas com o objetivo de praticar conceitos fundamentais de estruturas de dados, complexidade de algoritmos e programação orientada a objetos.

## 📖 Referências

As implementações e os conceitos deste repositório foram desenvolvidos como parte dos meus estudos práticos a partir do livro:

- **Learning JavaScript Data Structures and Algorithms** — *Loiane Groner* (Packt Publishing)

## 📚 Estruturas implementadas

### Stack

Uma **Stack (Pilha)** segue o princípio **LIFO (Last In, First Out)**: o último elemento inserido é o primeiro a ser removido.

Operações disponíveis:

* `push(element)` — adiciona um elemento ao topo da pilha.
* `pop()` — remove e retorna o elemento do topo.
* `peek()` — retorna o elemento do topo sem removê-lo.
* `isEmpty()` — verifica se a pilha está vazia.
* `size()` — retorna a quantidade de elementos.
* `clear()` — remove todos os elementos da pilha.

#### Complexidade

| Operação | Complexidade |
|---|---|
| `push()` | O(1) |
| `pop()` | O(1) |
| `peek()` | O(1) |
| `isEmpty()` | O(1) |
| `size()` | O(1) |
| `clear()` | O(1) |

---

### Queue

Uma **Queue (Fila)** segue o princípio **FIFO (First In, First Out)**: o primeiro elemento inserido é o primeiro a ser removido.

Operações disponíveis:

* `enqueue(element)` — adiciona um elemento ao final da fila.
* `dequeue()` — remove e retorna o primeiro elemento.
* `front()` — retorna o primeiro elemento sem removê-lo.
* `isEmpty()` — verifica se a fila está vazia.
* `size()` — retorna a quantidade de elementos.

#### Complexidade

| Operação | Complexidade |
|---|---|
| `enqueue()` | O(1) |
| `dequeue()` | O(1) |
| `front()` | O(1) |
| `isEmpty()` | O(1) |
| `size()` | O(1) |

---

### Deque

Uma **Deque (Double-Ended Queue)** é uma estrutura que permite adicionar e remover elementos **tanto no início quanto no final**.

Diferentemente de uma Queue, que normalmente insere em uma extremidade e remove na outra, a Deque oferece operações nas duas extremidades.

Operações disponíveis:

* `addFront(element)` — adiciona um elemento no início da Deque.
* `addBack(element)` — adiciona um elemento no final da Deque.
* `removeFront()` — remove e retorna o primeiro elemento.
* `removeBack()` — remove e retorna o último elemento.
* `peekFront()` — retorna o primeiro elemento sem removê-lo.
* `peekBack()` — retorna o último elemento sem removê-lo.
* `isEmpty()` — verifica se a Deque está vazia.
* `size()` — retorna a quantidade de elementos.
* `clear()` — remove todos os elementos da Deque.

#### Complexidade

| Operação | Complexidade |
|---|---|
| `addFront()` | O(n)* |
| `addBack()` | O(1) |
| `removeFront()` | O(1) |
| `removeBack()` | O(1) |
| `peekFront()` | O(1) |
| `peekBack()` | O(1) |
| `isEmpty()` | O(1) |
| `size()` | O(1) |
| `clear()` | O(1) |

* `addFront()` possui complexidade **O(1)** quando existe espaço disponível antes do primeiro elemento. Caso seja necessário deslocar os elementos, sua complexidade é **O(n)**.

---

### Linked List

Uma **Linked List (Lista Simplesmente Encadeada)** é uma estrutura linear composta por nós (*nodes*), em que cada nó armazena um valor e uma referência para o próximo nó. A lista mantém uma referência para o primeiro nó (`head`) e controla a quantidade de elementos por meio de `count`.

Operações disponíveis:

* `addFront(node)` — adiciona um nó no início da lista.
* `addBack(node)` — adiciona um nó no final da lista.
* `insertAt(node, index)` — insere um nó em uma posição específica.
* `removeFront()` — remove e retorna o primeiro nó.
* `removeBack()` — remove e retorna o último nó.
* `removeAt(index)` — remove e retorna o nó de uma posição específica.
* `contains(value)` — verifica se um valor existe na lista.
* `getElementAt(index)` — retorna o nó de uma posição específica sem removê-lo.
* `indexOf(value)` — retorna o índice da primeira ocorrência de um valor.
* `isEmpty()` — verifica se a lista está vazia.
* `size()` — retorna a quantidade de nós.
* `clear()` — remove todos os nós da lista.
* `toString()` — retorna uma representação textual dos valores da lista.

#### Complexidade

Considerando uma lista com `n` elementos:

| Operação | Complexidade |
|---|---|
| `addFront()` | O(1) |
| `addBack()` | O(n) |
| `insertAt()` | O(n) |
| `removeFront()` | O(1) |
| `removeBack()` | O(n) |
| `removeAt()` | O(n) |
| `contains()` | O(n) |
| `getElementAt()` | O(n) |
| `indexOf()` | O(n) |
| `isEmpty()` | O(1) |
| `size()` | O(1) |
| `clear()` | O(1) |
| `toString()` | O(n) |

* As complexidades de inserção e remoção por posição consideram o pior caso. `getElementAt(0)` pode ser executado em O(1), pois o primeiro nó já está acessível por `head`.

---

### Doubly Linked List

Uma **Doubly Linked List (Lista Duplamente Encadeada)** é uma estrutura linear composta por nós (*nodes*), onde cada nó armazena um valor, uma referência para o próximo nó (`next`) e uma referência para o nó anterior (`previous`). A lista mantém referências tanto para o início (`head`) quanto para o fim (`tail`), otimizando operações nas duas extremidades.

Operações disponíveis:

* `addFront(node)` — adiciona um nó no início da lista.
* `addBack(node)` — adiciona um nó no final da lista.
* `insertAt(node, index)` — insere um nó em uma posição específica.
* `removeFront()` — remove e retorna o primeiro nó.
* `removeBack()` — remove e retorna o último nó.
* `removeAt(index)` — remove e retorna o nó de uma posição específica.
* `remove(node)` — remove um nó específico pelo valor.
* `indexOf(node)` — retorna o índice da primeira ocorrência de um valor (ou `-1` caso não exista).
* `peekFront()` — retorna o primeiro nó sem removê-lo.
* `peekBack()` — retorna o último nó sem removê-lo.
* `isEmpty()` — verifica se a lista está vazia.
* `size()` — retorna a quantidade de nós.
* `clear()` — remove todos os nós da lista.
* `toString()` — retorna uma representação textual dos valores da lista.

#### Complexidade

Considerando uma lista com `n` elementos:

| Operação | Complexidade |
|---|---|
| `addFront()` | O(1) |
| `addBack()` | O(1) |
| `insertAt()` | O(n) |
| `removeFront()` | O(1) |
| `removeBack()` | O(1) |
| `removeAt()` | O(n) |
| `remove()` | O(n) |
| `indexOf()` | O(n) |
| `peekFront()` | O(1) |
| `peekBack()` | O(1) |
| `isEmpty()` | O(1) |
| `size()` | O(1) |
| `clear()` | O(1) |
| `toString()` | O(n) |

---

### Set

Um **Set (Conjunto)** é uma coleção não ordenada de elementos únicos (sem duplicatas). Esta implementação utiliza um objeto JavaScript como estrutura base para garantir buscas rápidas e suportar operações matemáticas de teoria dos conjuntos.

Operações disponíveis:

* `add(value)` — adiciona um elemento único ao conjunto (retorna `true` se inserido, `false` se já existir).
* `remove(value)` — remove um elemento do conjunto.
* `has(value)` — verifica se um elemento pertence ao conjunto.
* `values()` — retorna um array com todos os elementos presentes no conjunto.
* `union(otherSet)` — retorna um novo conjunto com a união dos elementos de dois conjuntos.
* `intersection(otherSet)` — retorna um novo conjunto apenas com os elementos presentes em ambos os conjuntos.
* `difference(otherSet)` — retorna um novo conjunto com os elementos presentes no conjunto atual, mas ausentes no conjunto informado.
* `isSubsetOf(otherSet)` — verifica se o conjunto atual é um subconjunto de outro conjunto.
* `clear()` — remove todos os elementos do conjunto.
* `size()` — retorna a quantidade de elementos.
* `isEmpty()` — verifica se o conjunto está vazio.

#### Complexidade

Considerando conjuntos com `n` elementos no conjunto atual e `m` elementos no outro conjunto:

| Operação | Complexidade |
|---|---|
| `add()` | O(1) |
| `remove()` | O(1) |
| `has()` | O(1) |
| `values()` | O(n) |
| `union()` | O(n + m) |
| `intersection()` | O(n) |
| `difference()` | O(n) |
| `isSubsetOf()` | O(n) |
| `clear()` | O(1) |
| `size()` | O(n)* |
| `isEmpty()` | O(n)* |

* `size()` e `isEmpty()` possuem complexidade **O(n)** pois utilizam `Object.values()` internamente.

---

### Hash Table

Uma **Hash Table (Tabela Hash)** é uma estrutura que mapeia chaves a valores utilizando uma função hash para calcular o índice do bucket correspondente. Esta implementação utiliza **Separate Chaining (Encadeamento Separado)** com a estrutura de **Lista Ligada (`Linkedlist`)** para gerenciar colisões de forma eficiente.

Operações disponíveis:

* `put(key, value)` — adiciona um novo par chave-valor ou atualiza o valor caso a chave já exista.
* `get(key)` — retorna o valor associado à chave ou `undefined` caso não seja encontrada.
* `remove(key)` — remove o par chave-valor correspondente.

#### Complexidade

| Operação | Complexidade Média | Complexidade Pior Caso |
|---|---|---|
| `put()` | O(1) | O(n) |
| `get()` | O(1) | O(n) |
| `remove()` | O(1) | O(n) |

- O pior caso (**O(n)**) ocorre quando há muitas colisões e todos os elementos terminam concentrados na mesma lista ligada.

---

## 🛠️ Tecnologias

* JavaScript
* Node.js
* ES Modules

## 🎯 Objetivo

Este repositório faz parte dos meus estudos de **Estruturas de Dados e Algoritmos**, com implementações próprias das principais estruturas e seus respectivos métodos.

A ideia é expandir o repositório gradualmente com novas estruturas, como:

* [x] Stack
* [x] Queue
* [x] Deque
* [x] Linked List
* [x] Doubly Linked List
* [x] Set
* [ ] Circular Linked List
* [ ] Priority Queue
* [x] Hash Table
* [ ] Tree
* [ ] Binary Search Tree
* [ ] Heap
* [ ] Graph

## 📖 Conceitos estudados

Durante o desenvolvimento das estruturas, também são praticados conceitos como:

* Abstração
* Encapsulamento
* Complexidade de tempo
* Complexidade de espaço
* FIFO e LIFO
* Nós e referências (simples e duplos)
* Teoria dos Conjuntos (União, Interseção, Diferença, Subconjunto)
* Funções de hash e normalização de chaves (`toStringFn`)
* Tratamento de colisões por encadeamento separado (*Separate Chaining*)
* Classes em JavaScript
* Módulos ES (`import` / `export`)
* Manipulação de objetos
* Percurso e busca em estruturas lineares e coleções não ordenadas

---

> Repositório desenvolvido para fins de estudo e prática de Estruturas de Dados e Algoritmos.