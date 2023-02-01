<!-- HTML HERE -->
<template>
<div class="container" :class="colorVariableBool ? 'color-red' : 'color-orange' ">
    <p >Toggle el color del background de este elemento usando un ternario</p>
    <button @click="changeColorOne">Click me</button>
</div>


    
    </template>
    <!-- JS HERE -->
    <script setup>
    import { ref, reactive } from "vue";
    // Crear variable booleana
    // EX001
    const colorVariableBool = ref(true);
    //funcion que se encarge de cambiar el valor booleano de la variable colorVariableBool
    const changeColorOne = () => {
        colorVariableBool.value = !colorVariableBool.value;        //es igual al opuesto, para que cambie

    };

    </script>
    <!-- CSS HERE -->
    <style scoped>
    /* container general */
    .container{
        min-height: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .color-red {
        background-color: red;
    }
    .color-orange {
        background-color: orange;
    }



</style>