# Estrutura de Dados: Deque (Double-Ended Queue) em TypeScript

Este projeto tem como objetivo a implementação de uma estrutura de dados chamada **Deque** (Double-Ended Queue), utilizando **TypeScript** e **arrays de tamanho fixo**. Um deque permite inserções e remoções tanto no **início** quanto no **final**, combinando comportamentos de pilhas e filas.

---

## 📦 Funcionalidades Implementadas

A classe `Deque<T>` é **genérica**, ou seja, pode armazenar qualquer tipo de dado. Ela oferece os seguintes métodos:

| Método           | Descrição |
|------------------|-----------|
| `addFirst(item)` | Adiciona um item no início do deque. |
| `addLast(item)`  | Adiciona um item no final do deque. |
| `removeFirst()`  | Remove e retorna o item do início. |
| `removeLast()`   | Remove e retorna o item do final. |
| `peekFirst()`    | Retorna (sem remover) o item do início. |
| `peekLast()`     | Retorna (sem remover) o item do final. |
| `size()`         | Retorna o número atual de elementos. |
| `capacity()`     | Retorna a capacidade máxima do deque. |

---

## 🛠 Tecnologias Utilizadas

- TypeScript
- ts-node-dev (para desenvolvimento)
- Node.js

---

## Como Executar
```bash
npm run dev