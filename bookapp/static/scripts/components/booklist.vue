<!-- bookapp/static/bookapp/components/BookList.vue -->
<template>
    <div>
      <h2>Lista de Libros</h2>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.title }} - {{ book.author }} - {{ book.published_date }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        books: [],
      };
    },
    mounted() {
      this.fetchBooks();
    },
    methods: {
      fetchBooks() {
        // Cambia la URL a la de tu API
        fetch('/api/books/')
          .then(response => response.json())
          .then(data => {
            this.books = data;
          })
          .catch(error => {
            console.error('Error:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Agrega tus estilos aquí */
  </style>
  