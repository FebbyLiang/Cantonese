<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style>
    body{
        margin: 0;
        padding: 0;
        border: 0;
    }
    ul{
        /*margin: 0;*/
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    a:hover{
        cursor: pointer;;
    }

</style>
