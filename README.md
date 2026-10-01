# Estruturas de Dados

Implementação de estruturas de dados em **JavaScript**, desenvolvidas com o objetivo de praticar conceitos fundamentais de estruturas de dados, complexidade de algoritmos e programação orientada a objetos.

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

| Operação    | Complexidade |
| ----------- | ------------ |
| `push()`    | O(1)         |
| `pop()`     | O(1)         |
| `peek()`    | O(1)         |
| `isEmpty()` | O(1)         |
| `size()`    | O(1)         |
| `clear()`   | O(1)         |

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

| Operação    | Complexidade |
| ----------- | ------------ |
| `enqueue()` | O(1)         |
| `dequeue()` | O(1)         |
| `front()`   | O(1)         |
| `isEmpty()` | O(1)         |
| `size()`    | O(1)         |

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

| Operação        | Complexidade |
| --------------- | ------------ |
| `addFront()`    | O(n)*        |
| `addBack()`     | O(1)         |
| `removeFront()` | O(1)         |
| `removeBack()`  | O(1)         |
| `peekFront()`   | O(1)         |
| `peekBack()`    | O(1)         |
| `isEmpty()`     | O(1)         |
| `size()`        | O(1)         |
| `clear()`       | O(1)         |

* `addFront()` possui complexidade **O(1)** quando existe espaço disponível antes do primeiro elemento. Caso seja necessário deslocar os elementos, sua complexidade é **O(n)**.

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
* [ ] Linked List
* [ ] Doubly Linked List
* [ ] Circular Linked List
* [ ] Priority Queue
* [ ] Hash Table
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
* Classes em JavaScript
* Módulos ES (`import` / `export`)
* Manipulação de objetos

---

> Repositório desenvolvido para fins de estudo e prática de Estruturas de Dados e Algoritmos.
