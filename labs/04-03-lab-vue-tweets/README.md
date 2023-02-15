![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Tweets de Vue.js

## Introducción

Pasar datos a través de *props* es un concepto importante de Vue.js que se entiende mejor con la práctica. Utilizaremos este ejercicio para ayudarte a consolidar tu comprensión de los props.

Clonaremos una parte de la interfaz de usuario de una popular aplicación, Twitter. Empecemos.

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-frontend-vue/lab-vue-tweets-4.png" width="500"/>
</p>

## Configuración

- Haz un fork de este repo
- Clona este repositorio
- Abre el LAB y comienza:

  ```bash
  $ cd lab-vue-tweets-es
  $ yarn install
  $ yarn dev
  ```

## La presentación

- Al terminar, ejecuta los siguientes comandos:

  ```bash
  git add .
  git commit -m "done"
  git push origin main
  ```

- Crea un Pull Request para que tus TAs puedan comprobar tu trabajo.

## Cómo empezar

1. Utilizaremos [Font Awesome](https://fontawesome.com/v5.15/icons?d=gallery\&p=1) para los iconos de nuestra aplicación. Añade la siguiente hoja de estilos en el `head` de la página `index.html`:

   

## Instrucciones

### Iteración 1 | Contenido inicial

Para que puedas centrarte en Vue.js sin tener que preocuparte por el estilismo, te proporcionamos los estilos CSS. Todo el CSS está incluido en el código inicial en el archivo `src/App.vue` dentro de la etiqueta`<style>`

También te hemos proporcionado el contenido inicial del `App.vue` y hemos incluido la estructura HTML para el componente `Tweet.vue`. Antes de empezar a trabajar tómate un momento para revisar estos dos archivos.

Una vez que ejecutes inicialmente la aplicación deberías ver lo siguiente:

![Tweet component after the initial setup](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-frontend-vue/lab-vue-tweets-1.png)

El componente`Tweet` está en este momento renderizando contenido estático. Cambiaremos esto en la próxima iteración. Actualizaremos el componente `Tweet` para que muestre el contenido procedente de los `props`.

### Iteración 2 | Pasar el Tweet como Prop

En `App.vue`, tenemos un array llamado `tweetsArray` que contiene objetos que representan tweets. Utilizaremos el componente `Tweet` para mostrar estos objetos de *tweets*. En el `Tweet` mostraremos el `nombre` del usuario, la `imagen` del usuario, el `nombre` del usuario, `la fecha` del tweet y el `mensaje`.

**Pasar el tweet como prop**

Pasa el primer objeto de datos de los `tweets` como prop al componente `Tweet`:

```vue
<!-- src/App.vue -->
<!-- ... -->

<Tweet tweet="tweets" />
```

**Mostrar el contenido del tweet en el componente `Tweet`**

Actualiza el componente `Tweet` para mostrar los valores procedentes de la prop del `tweet`. Recuerda que el valor que pasamos es un objeto/

**Resultado esperado**

Una vez hecho esto, su componente `Tweet` debería mostrar el siguiente contenido:

![Tweet component after passing the "tweets" prop](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-frontend-vue/lab-vue-tweets-2.png)

### Iteración 3 | Crear los componentes

Ahora crearemos nuevos archivos para los componentes que haremos en las siguientes iteraciones. Dentro de la carpeta `src/components/` crea los siguientes archivos nuevos:

- `src/components/ProfileImage.vue`,
- `src/components/User.vue` ,
- `src/components/Timestamp.vue` ,
- `src/components/Message.vue` y
- `src/components/Actions.vue`.

En las siguientes iteraciones, tendrá que refactorizar el componente `Tweet`. Se le pedirá que extraiga partes de la estructura HTML existente en nuevos componentes:

![Example - Refactoring the "Tweet" component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-frontend-vue/lab-vue-tweets-3.png)<br/>

**Cuando haya terminado con todas** las iteraciones, la versión final de su componente `Tweet` tendrá este aspecto:

<details>
<summary>Haga clic para ver el código</summary>

```vue
<!-- FINAL VERSION -->

<template>
  <div className="tweet">
    <ProfileImage image="user.image" />

    <div className="body">
      <div className="top">
        <User userData="user" />
        <Timestamp time="timestamp" />
      </div>

      <Message message="message" />
      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script>
export default {
  name: Tweet,
  props: {
    user: Object,
    timestamp: String,
    message: String
  }
}
</script>
```

:heavy_exclamation_mark: No copie y pegue el código anterior directamente en el componente `Tweet`.

Lo harás en las siguientes iteraciones, paso a paso. Usted reemplazará las partes de HTML a medida que crea cada nuevo componente.

<hr/>
<br/>

</details>


### Iteración 4 | Componente ProfileImage

**Extraer el HTML**

Extraiga la etiqueta `img` existente y renderícela a través del componente `ProfileImage`:

```jsx
<img src="IMAGE_URL" className="profile" alt="profile"/>
```

**Renderizar el componente**

Una vez hecho esto, importe el componente `ProfileImage` a `Tweet.js`. Después de importarlo, renderiza el componente dentro de `Tweet` de la siguiente manera:

```vue
<!-- ... -->
<template>
  <div className="tweet">
    <ProfileImage image="user.image" />
<!-- ... -->
```

**Accede a los Props**

`ProfileImage` recibe una `imagen` prop. Establece este valor como el `src` de la etiqueta `<img />`.

### Iteración 5 | Componente de usuario

**Extraer el HTML**

Extraiga las etiquetas `span` existentes que muestran la información del usuario y renderícelas a través del componente `User`:

```vue
<span className="user">
  <span className="name"> USER_NAME </span>
  <span className="handle">@ USER_HANDLE</span>
</span>
```

**Renderizar el componente**

Importe el componente `User` a `Tweet.js`. Después de importarlo, renderiza el componente dentro de `Tweet` de la siguiente manera:

```vue
<!-- ... -->

<template>
  <div className="tweet">
    <ProfileImage image="user.image" />

    <div className="body">
      <div className="top">
        <User userData="user" />

<!-- ... -->
```

**Accede a los Props**

Pasamos el objeto con la información del usuario a través de la prop `userData`. Accedemos y mostramos el *nombre* del usuario y el *handle de* twitter.

### Iteración 6 | Componente Timestamp

**Extraer el HTML**

Extrae la etiqueta `span` existente que muestra la información de la *marca* de tiempo y la renderiza a través del componente `Timestamp`:

```jsx
<span className="timestamp"> TWEET_TIMESTAMP </span>
```

**Renderizar el componente**

Importe el componente `Timestamp` a `Tweet.js`. Después de importarlo, renderiza el componente dentro de `Tweet` de la siguiente manera:

```vue
<!-- ... -->

<template>
  <div className="tweet">
    <ProfileImage image="user.image" />

    <div className="body">
      <div className="top">
        <User userData="user" />
        <Timestamp time="timestamp" />

<!-- ... -->
```

**Accede a los Props**

`Timestamp` recibe un `time` prop. Muestra este valor cowmo el contenido de la etiqueta `span`.

### Iteración 7 | Componente de mensajes

**Extraer el HTML**

Extrae la etiqueta `p` existente y la renderiza a través del componente `Message`:

```jsx
<p className="message"> TWEET_MESSAGE </p>
```

**Renderizar el componente**

Una vez hecho esto, importa el componente `Message` y renderízalo en el `Tweet.js` de la siguiente manera:

```vue
<!-- ... -->

<template>
  <div className="tweet">
    <ProfileImage image="user.image" />

    <div className="body">
      <div className="top">
        <User userData="user" />
        <Timestamp time="timestamp" />
      </div>

      <Message message="message" />
<!-- ... -->
```

**Acceder a los Props**

`Message` recibe un `message` prop. Muestra este valor en la etiqueta `p`.

### Iteración 8 | Componente de acciones

**Extraer el HTML**

Extrae la etiqueta `div.actions` del mensaje existente y la renderiza a través del componente `Actions`:

```jsx
    <div className="actions">
      <i class="far fa-comment"></i>
      <i class="fas fa-retweet"></i>
      <i class="far fa-heart"></i>
      <i class="fas fa-share"></i>
    </div>
```

**Renderizar el componente**

Una vez hecho esto, importa el componente `Actions` y renderízalo en el `Tweet.js` de esta manera:

```vue
<!-- ... -->

<template>
  <div className="tweet">
    <ProfileImage image="user.image" />

    <div className="body">
      <div className="top">
        <User userData="user" />
        <Timestamp time="timestamp" />
      </div>

      <Message message="message" />
      <Actions />

<!-- ... -->
```

El componente `Actions` no toma ningún props.

### Iteración 9 | Renderizar múltiples `Tweets`

Una vez que hayas terminado de refactorizar el componente `Tweet`, actualiza `App.vue` para mostrar tres componentes `<Tweet />`. Cada `<Tweet />` debe recibir un objeto tweet separado del `tweetsArray`.

Una vez terminado, tu aplicación debería mostrar el siguiente contenido:

<details>

<summary> Click para ver la imagen </summary>

![Example - Final Result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-frontend-vue/lab-vue-tweets-4.png)


</details>

<hr>


Feliz codificación! :blue_heart: