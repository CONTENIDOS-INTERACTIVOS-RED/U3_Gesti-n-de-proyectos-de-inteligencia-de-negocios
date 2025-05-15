<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Aplicación de herramientas de software en la gestión de proyectos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .bg-morado-claro.p-4.mb-4
            span En el marco de la gestión moderna de proyectos de BI, las herramientas de software no deben entenderse como simples instrumentos tecnológicos, sino como elementos estratégicos que habilitan nuevas formas de liderazgo, colaboración y toma de decisiones. Según Moreno-Monsalve y Grueso Hinestroza (2024), la transformación digital ha impulsado un giro en las dinámicas organizacionales, promoviendo una gestión basada en evidencias, automatización de procesos y visualización inteligente de datos.
          span Por su parte, Moreno-Monsalve, Grueso Hinestroza y Mayett-Moreno (2023), destacan que estas herramientas no solo cumplen una función operativa, sino que también deben responder a criterios de transparencia, trazabilidad y responsabilidad ética en la manipulación de datos. Esto cobra especial relevancia en proyectos de inteligencia de negocios, donde los resultados impactan directamente en decisiones estratégicas, políticas internas y relaciones con los grupos de interés.

      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2 Herramientas para la planificación y control del ciclo de vida del proyecto

      p.mb-4 La planificación y el control del ciclo de vida son pilares clave en la gestión efectiva de proyectos de inteligencia de negocios.

      .row.bg-azul.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Herramientas para la planificación y control del ciclo de vida del proyecto 
            p.mb-5(data-aos="fade-up") En el PDF Herramientas para la planificación y control del ciclo de vida del proyecto, se analizan soluciones tecnológicas que permiten estructurar, monitorear y ajustar cada fase del proyecto de forma colaborativa y trazable. Estas herramientas facilitan la toma de decisiones estratégicas, optimizan los recursos y fortalecen una cultura de gestión orientada a resultados sostenibles.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Herramientas_para_la_planificación_y_control.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Herramientas para la planificación y control del ciclo de vida del proyecto 
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen') 

      #t_3_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.2
          h2 Plataformas de colaboración y gobernanza de la información

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-0
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 En los proyectos de inteligencia de negocios (BI), la colaboración eficaz entre equipos y la gobernanza adecuada de la información, son factores determinantes para asegurar la calidad de los datos, la transparencia en los procesos y el cumplimiento de los objetivos estratégicos.
          .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-38.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Las plataformas de colaboración permiten una comunicación fluida, seguimiento de actividades, y toma de decisiones conjunta en entornos distribuidos, mientras que la gobernanza de datos garantiza que la información utilizada sea confiable, accesible, segura y esté alineada con los principios éticos y normativos de la organización.
          span Según Moreno-Monsalve y Grueso Hinestroza (2024), las plataformas colaborativas deben integrarse desde el diseño del proyecto, dado que no solo articulan la ejecución técnica, sino que fomentan una cultura de participación y corresponsabilidad. Estas herramientas crean entornos donde diferentes roles (analistas, desarrolladores, gerentes, usuarios finales) pueden interactuar, compartir conocimientos y construir soluciones de forma coordinada.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4 
            .col-12.col-xl-8
              .bg-azul.p-4.mb-4
                span A su vez, la gobernanza de datos, entendida como el conjunto de políticas, roles, procesos y tecnologías que aseguran la gestión efectiva de los datos, es esencial para evitar errores, duplicidades o interpretaciones erróneas que afecten la calidad del BI. 
              span Moreno-Monsalve, Grueso Hinestroza y Mayett-Moreno (2023), insisten en que la ética en la gestión de la información se materializa mediante estructuras de gobernanza que regulan desde el acceso hasta el uso de los datos, protegiendo su confidencialidad, integridad y relevancia.
            .col-4.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

          p.mb-4 Herramientas destacadas:

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-40.png' style='width: 75px' )
                p.text-bold.mb-4.text-center Confluence
                p.px-1.text-small.mb-0.text-center Permite centralizar el conocimiento del proyecto, documentar retrospectivas, lecciones aprendidas, procedimientos técnicos y decisiones claves.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-41.png' style='width: 70px' )
                p.text-bold.mb-4.text-center Microsoft Teams / Google Workspace
                p.px-1.text-small.mb-0.text-center Integran comunicación, almacenamiento de archivos y edición colaborativa, potenciando el trabajo sincrónico y asincrónico.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-42.png' style='width: 160px' )
                p.text-bold.mb-4.text-center Data Catalogs (como Azure Purview o Google Data Catalog)
                p.px-1.text-small.mb-0.text-center Permiten clasificar, etiquetar y monitorear el linaje de los datos dentro del ecosistema analítico.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-43.png' style='width: 170px' )
                p.text-bold.mb-4.text-center Collibra y Alation
                p.px-1.text-small.mb-0.text-center Plataformas especializadas en gobernanza de datos que establecen políticas, trazabilidad, perfiles de calidad y acceso seguro a la información.

      p.text-bold.mb-4 Ejemplo aplicado
      p.mb-4 Una entidad financiera implementa Confluence para documentar los procesos de validación de dashboards de riesgo crediticio. Todos los analistas deben registrar allí las fórmulas usadas, criterios de segmentación y fuentes de datos. En paralelo, utilizan Google Data Catalog para clasificar los indicadores, según origen, nivel de sensibilidad y frecuencia de actualización. Esto permite que las auditorías internas rastreen fácilmente cómo se construyen los reportes y validen su confiabilidad. 

      .row.mb-4.bg-azul-claro.p-4.py-xl-0
        .col-5.d-none.d-xl-block
          img.h-100(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7
          .my-auto.py-xl-4
            p.mb-4 Beneficios organizacionales:
            span ●	Mejora de la <b>trazabilidad de decisiones y fuentes de información</b>.<br><br>●	Reducción de <b>errores analíticos</b> al documentar reglas de negocio y definiciones operativas.<br><br>●	Fortalecimiento de la <b>seguridad y privacidad de los datos</b> mediante control de accesos.<br><br>●	Estímulo de una <b>cultura de transparencia y colaboración multidisciplinar</b>.<br><br>●	Promoción de la <b>ética y responsabilidad</b> digital en el tratamiento de información sensible.

      .row.mb-4.bg-azul.p-4.py-xl-0
        .col-12.col-xl-7
          .my-auto.py-xl-4
            p.mb-4 Buenas prácticas recomendadas:
            span 1.	<b>Asignar responsables de gobernanza (<i>Data Stewards</i>)</b> con funciones claras de validación, actualización y monitoreo.<br><br>2.	<b>Documentar todas las decisiones y cambios</b> en una plataforma colaborativa visible para el equipo.<br><br>3.	<b>Clasificar los datos, según criticidad y uso</b>, mediante catálogos inteligentes.<br><br>4.	<b>Establecer políticas de acceso diferenciadas</b> por perfil de usuario, según su rol dentro del proyecto.<br><br>5.	<b>Fomentar sesiones periódicas de revisión ética y técnica</b> de los flujos de información.

        .col-5.d-none.d-xl-block
          img.h-100(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
      
      p.mb-4 En resumen, las plataformas de colaboración y la gobernanza de la información, no solo son soporte técnico para los proyectos BI, sino un componente cultural y estratégico que asegura la sostenibilidad, confianza y legitimidad de los sistemas analíticos. Como afirman  Moreno-Monsalve y Grueso Hinestroza (2024), “la madurez analítica de una organización se refleja no en la cantidad de dashboards que produce, sino en su capacidad de gestionar, cuidar y compartir la información de manera responsable y efectiva”.

      #t_3_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.3
          h2 Herramientas para análisis, visualización y toma de decisiones

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 La visualización de datos y el análisis interactivo, se han convertido en componentes esenciales en la gestión de proyectos de inteligencia de negocios (BI). No basta con recopilar y almacenar grandes volúmenes de información: es indispensable traducir esos datos en narrativas visuales comprensibles que guíen la toma de decisiones de forma ágil, informada y estratégica. Como lo plantean Moreno-Monsalve y Grueso Hinestroza (2024), el valor del BI no radica únicamente en la acumulación de datos, sino en su transformación en conocimiento práctico, accesible y accionable.
          .d-flex.align-items-start.bg-azul-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-47.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 Las herramientas de visualización permiten a los tomadores de decisiones explorar patrones, identificar tendencias y generar alertas tempranas, mediante paneles de control (<i>dashboards</i>) interactivos, gráficos dinámicos y mapas analíticos.

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Asimismo, al integrarse con algoritmos de análisis predictivo o prescriptivo, estas plataformas permiten ir más allá de la descripción para anticipar escenarios y recomendar acciones, lo que potencia la capacidad estratégica de las organizaciones.
          .bg-amarillo.p-4(data-aos='fade-up')
            span Moreno-Monsalve, Grueso Hinestroza y Mayett-Moreno (2023), destacan que el diseño ético y funcional de estas visualizaciones debe considerar aspectos de inclusión, legibilidad, transparencia y precisión, evitando caer en la manipulación o la sobrecarga informativa. El objetivo es apoyar una toma de decisiones justa y bien fundamentada, que responda, tanto a criterios técnicos como a valores organizacionales.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen') 

      p.mb-4 Herramientas claves:

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-50.png', style='width: 120px')
              p.text-bold.mb-4.text-center Microsoft Power BI
              p.px-1.text-small.mb-0.text-center Permite la conexión con múltiples fuentes de datos, creación de <i>dashboards</i> interactivos, análisis en tiempo real y funciones avanzadas de inteligencia artificial.
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-51.png', style='width: 120px')
              p.text-bold.mb-4.text-center Tableau
              p.px-1.text-small.mb-0.text-center Se destaca por su potencia gráfica y facilidad para construir visualizaciones detalladas a partir de grandes volúmenes de datos, con una interfaz intuitiva.
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-52.png', style='width: 120px')
              p.text-bold.mb-4.text-center Qlik Sense
              p.px-1.text-small.mb-0.text-center Ofrece un motor asociativo que permite descubrir relaciones entre variables sin rutas predefinidas, ideal para análisis exploratorios.
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-53.png', style='width: 120px')
              p.text-bold.mb-4.text-center Google Looker Studio
              p.px-1.text-small.mb-0.text-center Útil para usuarios que necesitan crear informes rápidos conectados con hojas de cálculo o campañas digitales.
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-54.png', style='width: 120px')
              p.text-bold.mb-4.text-center Python (librerías como Plotly, Matplotlib, Seaborn)
              p.px-1.text-small.mb-0.text-center Permite construir visualizaciones personalizadas y realizar análisis estadísticos más avanzados.
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-52.png', style='width: 120px')
              p.text-bold.mb-4.text-center RStudio y Shiny
              p.px-1.text-small.mb-0.text-center Plataformas académicas para análisis y visualización estadística con gran versatilidad para modelos predictivos.

      .row.mb-4 
        .col-12.col-xl-8
          .bg-azul.p-4.mb-4
            p.text-bold.mb-4 Ejemplo aplicado:
            p.mb-4 Una empresa de logística internacional implementa Tableau para analizar el rendimiento de su cadena de suministro, en tiempo real. Mediante mapas geográficos, gráficos de líneas y tableros con KPIs, logra detectar demoras en rutas específicas, identificar zonas con mayores niveles de reclamos y ajustar sus procesos operativos. Como complemento, utiliza modelos en Python para predecir volúmenes de pedidos, según estacionalidad y comportamiento de clientes, integrando los resultados en Power BI para toma de decisiones por parte del equipo directivo. 
          p.mb-0 Buenas prácticas de visualización y análisis:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
      

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Diseño intuitivo")
              p Paneles que no saturen con datos, sino que resalten lo esencial con claridad.
            .div(titulo="Contexto e interpretación")
              p Cada gráfico debe ir acompañado de una breve explicación o leyenda interpretativa.
            .div(titulo="Actualización automática")
              p Integración con bases de datos en tiempo real, para mantener la vigencia de la información.
            .div(titulo="Alertas y umbrales")
              p Posibilidad de configurar notificaciones cuando los indicadores superen límites críticos
            .div(titulo="Accesibilidad multiplataforma")
              p Visualizaciones que funcionen, tanto en dispositivos móviles como en computadores de escritorio.

      .row.mb-5
        .col-12.col-xl-8
          h2 Impacto en la toma de decisiones:
          .bg-azul.p-4
            span El uso adecuado de estas herramientas mejora la capacidad de respuesta organizacional, fortalece la comunicación entre áreas y permite tomar decisiones basadas en hechos y no en percepciones. Como enfatizan Moreno-Monsalve y Grueso Hinestroza (2024), “la visualización no es solo una herramienta técnica, sino un puente entre el conocimiento analítico y la acción organizacional”.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/250976") Ariza Aguilera, D. A. (2022). Cultura organizacional en el ámbito de los proyectos: valores, competencias y prácticas de gestión
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=xkO4m5IxoFc") [Vídeo] BB&R. (2023). Lecciones en Storytelling en Visualización de Datos para atraer a tu audiencia
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
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
