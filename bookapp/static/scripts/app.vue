<!-- bookapp/static/bookapp/App.vue -->
<template>
    <div>
      <book-list></book-list>
    </div>
  </template>
  
  <script>
  import BookList from './components/booklist.vue';
  
  export default {
    components: {
      BookList,
    },
  };
  </script>
  
  <style>
  /* Agrega tus estilos aquí */
  </style>
  