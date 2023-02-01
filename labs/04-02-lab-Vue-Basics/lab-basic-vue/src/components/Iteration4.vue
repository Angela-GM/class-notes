<!-- HTML HERE -->
<template>

    <section v-for="publicacion in publicaciones">
        <h2>{{ publicacion.title }}</h2>
        <p>{{ publicacion.description }}</p>
        <p>{{ publicacion.content }}</p>

    </section>




</template>
    <!-- JS HERE -->
    <script setup>
import { ref, reactive } from "vue";
const publicaciones = reactive([
  {
    title: "El principito",
    description: "Novela corta",
    content: 'El Principito" es un cuento filosófico escrito por Antoine de Saint-Exupéry. La historia sigue a un piloto que se encuentra perdido en el desierto del Sahara y es visitado por un niño extraterrestre llamado El Principito. Juntos, viajan a diferentes planetas y aprenden sobre la vida, el amor, la amistad y la importancia de valorar lo que es verdaderamente importante. A través de sus conversaciones y aventuras, El Principito enseña al piloto valores universales y le muestra que la verdadera belleza y significado de la vida se encuentran en las cosas simples y no en la materialidad.',
  },
  {
    title: "Entrevista con el vampiro",
    description: "Novela de terror",
    content: 'La historia comienza con un periodista llamado Daniel Malloy que entrevista a Louis de Pointe du Lac, un vampiro que ha vivido por más de 200 años. A lo largo de la entrevista, Louis revela su historia sobre su conversión en vampiro por parte del misterioso vampiro Lestat y su eterna búsqueda de significado y propósito en su vida eterna. La novela explora temas como la eternidad, la soledad y la naturaleza humana a través del relato de Louis. A medida que la entrevista continúa, se desvelan secretos y verdades aterradoras sobre el mundo de los vampiros y los personajes en él.',
  },
  {
    title: 'Alicia en el país de las maravillas',
    description: "Novela",
    content: `La historia sigue a una niña llamada Alicia que cae en un mundo extraño y maravilloso después de perseguir a un conejo blanco. Durante su aventura en el País de las Maravillas, Alicia encuentra una serie de personajes extraños y fantásticos, como la Liebre de Marzo, el Sombrerero Loco y la Reina de Corazones. A lo largo de su viaje, Alicia aprende importantes lecciones sobre la madurez y la lógica mientras explora este mundo fantástico y absurdo. La novela es conocida por su humor absurdo y su representación de la vida y la realidad como un sueño.`
  },
]);
</script>
    <!-- CSS HERE -->
    <style scoped></style>