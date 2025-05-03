<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Presentación y comunicación de resultados en BI'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 La presentación de resultados en proyectos de Business Intelligence (BI), representa una fase crítica que conecta el trabajo técnico con la toma de decisiones estratégicas. No basta con tener datos o visualizaciones complejas; es esencial traducir la información en conocimientos comprensibles, útiles y accionables para distintos niveles organizativos.
          .d-flex.align-items-start.bg-morado-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-0
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-59.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Según Malagón Barinas (2019), comunicar eficazmente los hallazgos de un proyecto de BI requiere dominar tanto herramientas tecnológicas como técnicas de síntesis y narrativa. La claridad, la pertinencia del lenguaje y el formato de entrega determinan el impacto del proyecto en la toma de decisiones. Además, los informes deben ser construidos en función del público objetivo: gerencias, áreas operativas, técnicos o entes reguladores.
          .d-flex.align-items-start.bg-morado-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-0
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-60.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Por su parte, Moreno-Monsalve y Grueso Hinestroza (2024), destacan que los resultados analíticos deben ser parte de un proceso de gestión del conocimiento, integrados en tableros estratégicos o informes interactivos que alimenten ciclos de mejora continua. Para lograrlo, proponen estructurar la comunicación en torno a cinco principios: claridad, relevancia, consistencia visual, acceso oportuno y alineación estratégica.
      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-61.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='28.3%' y='39%' numero='+')
          .h5.mb-2 Claridad
          p La información debe ser fácilmente comprensible desde la primera visualización. Se deben evitar tecnicismos innecesarios, sobrecarga cognitiva o visual, y priorizar una estructura lógica en la presentación de los datos.<br><br>Ejemplo: un gráfico de barras horizontales mostrando ingresos trimestrales por unidad de negocio, con etiquetas claras, escala numérica completa y colores neutros
        .tarjeta.bg-white.p-4(x='50.3%' y='23.3%' numero='+')
          .h5.mb-2 Acceso oportuno
          p Asegurar que los resultados analíticos lleguen al usuario indicado, en el momento justo y por el canal adecuado. La automatización y portabilidad de los reportes mejora su impacto.<br><br>Ejemplo: reportes automáticos enviados semanalmente por correo a los gerentes, optimizados para dispositivos móviles.
        .tarjeta.bg-white.p-4(x='46%' y='40%' numero='+')
          .h5.mb-2 Alineación estratégica
          p Todo informe de BI debe ser coherente con los objetivos del negocio. La visualización debe servir para dar seguimiento a metas organizacionales y facilitar la toma de decisiones de alto impacto.<br><br>Ejemplo: presentar un informe de clima organizacional con comparativos frente al plan de retención de talento.
        .tarjeta.bg-white.p-4(x='68.5%' y='49.4%' numero='+')
          .h5.mb-2 Relevancia
          p Seleccionar y mostrar únicamente los indicadores clave que responden a preguntas estratégicas. Excluir datos irrelevantes para el público objetivo, priorizando el insight sobre la cantidad de información.<br><br>Ejemplo: en una presentación al comité directivo, mostrar solo métricas como el retorno de inversión (ROI), tasa de conversión o crecimiento de clientes, omitiendo detalles técnicos como registros duplicados o errores de carga.
        .tarjeta.bg-white.p-4(x='56%' y='78%' numero='+')
          .h5.mb-2 Consistencia visual
          p Unificar el diseño visual en todos los reportes y dashboards. Esto incluye paletas de colores, tipografías, formatos numéricos y estructuras de los gráficos. Una visual coherente mejora la interpretación y refuerza la identidad analítica.<br><br>Ejemplo: todos los dashboards utilizan la misma tipografía corporativa, los mismos tonos por categoría de datos y formatos numéricos uniformes (p. ej., separador de miles).

      #t_4_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.1
          h2 Estrategias de comunicación de hallazgos analíticos
      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 La comunicación efectiva de los resultados generados por herramientas de inteligencia de negocios (BI), no depende exclusivamente del contenido técnico, sino de la capacidad para traducir hallazgos analíticos en mensajes claros, persuasivos y estratégicamente alineados con los objetivos del negocio. Esta fase del proyecto es clave para cerrar el ciclo de valor del análisis de datos, promoviendo la toma de decisiones basadas en evidencia.
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-0
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-62.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Según Moreno-Monsalve y Grueso Hinestroza (2024), comunicar hallazgos en contextos organizacionales implica conectar al lenguaje técnico con el lenguaje ejecutivo, utilizando recursos visuales, narrativas orientadas a objetivos y canales pertinentes al público objetivo.
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-0
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-63.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Por su parte, Malagón Barinas (2019), plantea que la estrategia de comunicación debe formar parte del diseño del proyecto, incluyendo desde el inicio las formas, medios y formatos en que se compartirán los resultados.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
      p.mb-4 A continuación, se presentan cinco estrategias clave para comunicar hallazgos analíticos en proyectos de BI, cada una acompañada de un ejemplo práctico:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Narrativas basadas en datos (Data Storytelling)")
              p Integrar datos en una estructura narrativa que incluya contexto, conflicto y resolución, ayuda a que los hallazgos tengan sentido para quienes toman decisiones. No se trata solo de mostrar gráficos, sino de construir una historia con propósito.<br><br><b>Ejemplo.</b> En una reunión de ventas, en lugar de presentar únicamente cifras de facturación por región, se estructura una narrativa que explique cómo las campañas digitales en la zona norte contribuyeron a un aumento del 20 %, mientras que en la zona sur hubo caída por baja inversión en pauta.

            .div(titulo="Adaptación del mensaje al público objetivo")
              p Cada stakeholder tiene un nivel distinto de conocimiento técnico y una necesidad específica de información. Por ello, la forma y profundidad del mensaje deben ajustarse a cada audiencia.<br><br><b>Ejemplo.</b> Un dashboard diseñado para analistas, incluirá métricas detalladas, mientras que un reporte para la alta gerencia, se centrará en KPIs claves, evolución trimestral y proyecciones.

            .div(titulo="Visualización estratégica de la información")
              p Los recursos gráficos deben usarse no solo para embellecer, sino para facilitar la comprensión y la acción. Se deben evitar gráficos decorativos y priorizar formatos que resalten patrones, relaciones y anomalías.<br><br><b>Ejemplo.</b> Para mostrar la distribución geográfica de ventas, un mapa de calor es más útil que una tabla con cifras, por departamento. El uso de colores debe responder a un criterio lógico (verde = bueno, rojo = alerta).

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Sincronización y oportunidad en la entrega")
              p La comunicación de hallazgos debe responder a los tiempos de decisión del negocio. Un hallazgo útil pero comunicado tarde pierde su valor estratégico.<br><br><b>Ejemplo.</b> Automatizar el envío de alertas por correo cada vez que un KPI crítico supera umbrales, en lugar de esperar una reunión mensual para reportarlo.

            .div(titulo="Generación de espacios de retroalimentación")
              p La comunicación debe ser bidireccional. Es clave abrir espacios donde los usuarios del BI puedan comentar, validar o cuestionar los hallazgos presentados, enriqueciendo así el análisis.<br><br><b>Ejemplo.</b> Después de presentar un análisis de rotación de personal, se convoca a líderes de talento humano para discutir hipótesis, validar causas y proponer nuevas variables a analizar

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')

      #t_4_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.2
          h2 Diseño efectivo de dashboards e informes ejecutivos

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-67.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 El diseño de <i>dashboards</i> e informes ejecutivos, constituye una práctica fundamental en la presentación de resultados en proyectos de <i>Business Intelligence (BI)</i>, puesto que de su claridad, estructura y funcionalidad, depende que la información analítica sea comprendida, valorada y utilizada en la toma de decisiones. Más que acumular gráficos, se trata de construir una herramienta visual estratégica, que sintetice datos complejos en mensajes claros, priorice los KPIs relevantes y facilite la acción.
          .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-68.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Como señalan Moreno-Monsalve y Grueso Hinestroza (2024), un <i>dashboard</i> efectivo debe cumplir con criterios de usabilidad, orientación al usuario y alineación estratégica. Es decir, debe estar diseñado desde la necesidad del decisor, no desde la oferta técnica del analista.
          p.mb-4 Por su parte, Malagón Barinas (2019), enfatiza que los informes ejecutivos deben ser sintéticos, orientados al futuro y con un enfoque comparativo que permita identificar tendencias, brechas y oportunidades. 
          span A continuación, se presentan los principios claves para un diseño eficaz de dashboards e informes ejecutivos en entornos BI:
      
      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Minimalismo y jerarquía visual
                p Evitar la saturación de elementos visuales es fundamental para no sobrecargar al usuario. Se debe usar el espacio de manera jerárquica, destacando los KPIs prioritarios en la parte superior o izquierda del panel.<br><br><b>Ejemplo.</b> En un <i>dashboard</i> de rendimiento financiero, los indicadores de EBITDA, margen de utilidad y liquidez, se muestran como tarjetas de resumen en la parte superior, mientras que los gráficos de soporte aparecen abajo.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-69.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Coherencia visual y semiótica de color
                p El uso consistente de paletas de colores, tipografías, escalas y formatos de fecha, permite que el usuario lea los informes con familiaridad. Además, los colores deben seguir una lógica: verde = positivo, rojo = negativo, amarillo = alerta.<br><br><b>Ejemplo.</b> En un informe mensual de desempeño, el uso de un semáforo visual, ayuda a identificar rápidamente los indicadores que requieren intervención.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-70.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Interactividad y filtrado dinámico
                p Un <i>dashboard</i> bien diseñado permite al usuario explorar los datos de manera dinámica, filtrando por periodos, regiones, unidades o segmentos claves.<br><br><b>Ejemplo.</b> En un informe de ventas con Power BI, se incorporan filtros por trimestre, canal de distribución y línea de producto, lo cual permite que cada gerente personalice su análisis.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-71.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Comparación histórica y metas
                p El diseño debe permitir contrastar el valor actual del indicador, con su histórico y con la meta planteada. Esto refuerza el enfoque de mejora continua.<br><br><b>Ejemplo.</b> Un gráfico de línea de satisfacción del cliente compara el valor actual (82 %) con el valor del mes anterior (79 %) y la meta corporativa (85 %).

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-72.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Inclusión de alertas y notas de interpretación
                p Más allá de los datos, el dashboard debe incluir alertas automáticas (cuando se sobrepasan umbrales críticos) y notas explicativas que contextualicen los cambios.<br><br><b>Ejemplo.</b> Un informe de rotación de personal muestra una alerta en rojo cuando supera el 15 %, junto con una nota que explica posibles causas relacionadas con cambios en beneficios laborales.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-73.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Portabilidad y acceso multiplataforma
                p Los <i>dashboards</i> deben estar optimizados para su consulta en múltiples dispositivos (PC, tablet, móvil) y plataformas (web, app, correo), facilitando el acceso oportuno.<br><br><b>Ejemplo.</b> Una app interna de BI permite al director ejecutivo, consultar, desde su celular, el reporte semanal de productividad, con navegación sencilla y segura.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-74.png', alt='Texto que describa la imagen')

      .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-75.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0.text-white El diseño de <i>dashboards</i> e informes ejecutivos en BI, no es solo una cuestión estética, sino una herramienta de comunicación estratégica. Un buen diseño traduce datos en decisiones, elimina fricciones cognitivas y fortalece la cultura de análisis en la organización. Tal como lo afirman Moreno-Monsalve y Grueso Hinestroza (2024), la calidad del diseño determina en gran medida el nivel de adopción y el impacto del sistema de inteligencia de negocios. 

      #t_4_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.3
          h2 Storytelling con datos: narrativa para la toma de decisiones

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-76.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 El <i>storytelling</i> con datos es una técnica que combina visualización analítica, contexto narrativo y estructura lógica para transformar información cruda en <b>historias comprensibles, persuasivas y orientadas a la acción</b>. En el contexto de la inteligencia de negocios (BI), esta práctica permite conectar los indicadores con las decisiones estratégicas, generando impacto y comprensión en públicos no técnicos.
          .mb-4.bg-morado-claro.p-4(data-aos='fade-up')
            span Según Malagón Barinas (2019), los datos sin narrativa pueden ser difíciles de interpretar y poco memorables, especialmente para los niveles directivos. Por ello, los proyectos de BI deben incorporar estructuras narrativas que guíen al usuario desde los hallazgos hasta las implicaciones y recomendaciones concretas.
          p.mb-4 Por su parte, Moreno-Monsalve y Grueso Hinestroza (2024), destacan que el storytelling permite “construir sentido” alrededor de los datos, facilitando la toma de decisiones colaborativa y alineada con los objetivos institucionales.
          span Elementos fundamentales del <i>storytelling</i> con datos:
      
      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Contexto")
              p Se debe comenzar por establecer el problema, la oportunidad o la pregunta estratégica que da sentido a los datos. Esto enmarca el análisis y orienta la atención del usuario.<br><br><b>Ejemplo.</b> En el último trimestre, la tasa de cancelación de suscripciones aumentó un 15 %. ¿Por qué y cómo podemos revertirlo?

            .div(titulo="Datos claves (evidencia)")
              p Aquí se presentan los hallazgos relevantes mediante visualizaciones claras. Se eligen los datos que aportan valor a la narrativa, evitando el exceso de métricas.<br><br><b>Ejemplo.</b> Mostrar un gráfico de dispersión donde se observa una correlación entre la baja interacción en la plataforma y la tasa de cancelación.

            .div(titulo="Interpretación")
              p No basta con mostrar el dato, hay que traducirlo. ¿Qué significa ese hallazgo? ¿Qué implicaciones tiene?<br><br><b>Ejemplo.</b> Los usuarios con menos de 3 accesos semanales, tienen el doble de probabilidad de cancelar su suscripción.

            .div(titulo="Emoción y conexión humana")
              p Una historia impacta más cuando se conecta con la experiencia real del cliente o del usuario interno.<br><br><b>Ejemplo.</b> Camila, una usuaria frecuente, notó que las notificaciones dejaron de llegar. Su uso cayó, y luego canceló. Este patrón se repite en más de 1.200 casos.

            .div(titulo="Recomendación y llamado a la acción")
              p Todo <i>storytelling</i> debe cerrar con una propuesta clara: una decisión sugerida o una hipótesis por validar.<br><br><b>Ejemplo.</b> Proponemos activar una campaña de reactivación segmentada, con recordatorios personalizados, para los usuarios de bajo uso en los últimos 14 días.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-77.png', alt='Texto que describa la imagen')

      h2 Ejemplo aplicado en BI
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-78.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .bg-azul-claro.p-4(data-aos='fade-up')
            span Una empresa del sector salud usa dashboards con storytelling visual para reportar el impacto de sus campañas preventivas. El informe incluye mapas de calor, comparaciones históricas y testimonios de pacientes que motivaron ajustes estratégicos. Así, la dirección no solo ve los números, sino el <b>porqué</b> detrás de ellos, lo que fortalece el apoyo a nuevas iniciativas.
      
      .row.mb-4.bg-azul.p-4.py-xl-0
        .col-12.col-xl-7.d-flex
          .my-auto.py-xl-4
            p.mb-4 Recomendaciones para implementar <i>storytelling</i> en proyectos BI:
            p.mb-4 ●	Usar gráficos narrativos (<i>story maps</i>, series temporales con anotaciones, tableros secuenciales).<br><br>●	Incorporar citas, testimonios o ejemplos representativos del usuario final.<br><br>●	Redactar títulos que comuniquen el hallazgo, no solo describan el gráfico (“El 65 % de clientes nuevos, no acceden al producto en su primera semana”).<br><br>●	Usar herramientas como Power BI storytelling, Google Data Studio, o Tableau <b>Story</b>, para integrar narrativa con visualización. 

            span El <i>storytelling</i> con datos es una competencia clave para analistas, líderes de proyectos BI y equipos de toma de decisiones. No se trata de “decorar” los datos, sino de darles sentido, voz y propósito, facilitando su comprensión y aumentando la probabilidad de que sean usados de forma estratégica. Como afirman Moreno-Monsalve y Grueso Hinestroza (2024), una historia bien contada con datos, puede ser más poderosa que cualquier modelo predictivo, si logra movilizar decisiones acertadas.
        .col-5.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-79.png', alt='Texto que describa la imagen')
      
      #t_4_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.4
          h2 Buenas prácticas éticas y técnicas en la presentación de resultados

      p.mb-4 Para estudiar esta temática, lo invitamos a escuchar el siguiente <i>podcast</i>.

      .row.mb-4
        .col-4.d-none.d-xl-block 
          img(src='@/assets/curso/unidad/img-80.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          TarjetaAudio.color-secundario.bg-white.mb-3(
            texto='Gestión de proyectos de inteligencia de negocios'
            tiempo
            :audio="require('../../assets/componentes/audios/Gestión de proyectos de inteligencia de negocios_Podcast_unidad_III.mp3')"
            @audio-hover='mostrarIndicadorTarjetaAudio = false'
          )


      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Inteligencia de Negocios y Gestión de Proyectos',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'En los proyectos de BI, el Retorno de Inversión (ROI) solo debe calcularse con beneficios financieros directos.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El ROI en BI también incluye beneficios intangibles como la mejora en la toma de decisiones, empoderamiento del personal y confianza en los datos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. El ROI en BI también incluye beneficios intangibles como la mejora en la toma de decisiones, empoderamiento del personal y confianza en los datos.',
        },
        {
          id: 2,
          texto:
            '¿Cuáles de los siguientes son pilares fundamentales para la sostenibilidad de un sistema de BI? (Seleccione todas las que apliquen)',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arquitectura tecnológica adaptable',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de visualizaciones diseñadas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cultura organizacional basada en datos',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Gobernanza de datos', esCorrecta: true },
            {
              id: 'e',
              texto: 'Frecuencia de reuniones de usuarios',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los pilares fundamentales son: Arquitectura tecnológica adaptable, Cultura organizacional basada en datos y Gobernanza de datos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Los pilares fundamentales son: Arquitectura tecnológica adaptable, Cultura organizacional basada en datos y Gobernanza de datos.',
        },
        {
          id: 3,
          texto:
            'Relacione el concepto con su definición: <br><br>A. KPI, <br>B. Storytelling con datos, <br>C. Visualización de datos<br><br>1. Técnica narrativa que facilita la comprensión de hallazgos mediante visualización e interpretación<br>2. Métrica que permite evaluar el rendimiento de un proyecto<br>3. Representación gráfica de información para facilitar análisis y toma de decisiones',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'A-2, B-1, C-3',
              esCorrecta: true,
            },
            { id: 'b', texto: 'A-1, B-2, C-3', esCorrecta: false },
            { id: 'c', texto: 'A-3, B-1, C-2', esCorrecta: false },
            { id: 'd', texto: 'A-1, B-3, C-2', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. La relación correcta es: A-2, B-1, C-3.',
        },
        {
          id: 4,
          texto:
            'Complete la siguiente frase: El diseño de dashboards efectivos debe basarse en principios de claridad, jerarquía visual y _______________.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'coherencia visual', esCorrecta: true },
            { id: 'b', texto: 'colores vivos', esCorrecta: false },
            { id: 'c', texto: 'múltiples gráficos', esCorrecta: false },
            { id: 'd', texto: 'diseño complejo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. La palabra correcta es "coherencia visual".',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la principal razón por la que se recomienda auditar periódicamente los KPIs en un proyecto de BI?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para generar más gráficos visualmente atractivos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para cumplir con requisitos técnicos sin importar el contexto',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para garantizar que los indicadores reflejen los objetivos actuales del negocio',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para reducir la carga de trabajo de los analistas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los KPIs deben estar alineados con las metas actuales de la organización. Auditorías periódicas permiten detectar indicadores obsoletos o que ya no son relevantes.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Los KPIs deben estar alineados con las metas actuales de la organización. Auditorías periódicas permiten detectar indicadores obsoletos o que ya no son relevantes.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
