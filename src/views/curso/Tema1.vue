<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Indicadores de éxito y retorno de inversión en proyectos de Business Intelligence (BI)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-morado-claro.p-4(data-aos="fade-up")
        p.mb-0 La implementación de proyectos de Business Intelligence (BI) en las organizaciones modernas, representa una inversión estratégica con el objetivo de mejorar la toma de decisiones, optimizar recursos, aumentar la eficiencia operativa y generar valor competitivo, a partir del uso de datos. Sin embargo, para que dicha inversión se justifique y se mantenga en el tiempo, es esencial contar con un marco claro de evaluación de resultados, lo que incluye tanto los indicadores de éxito, como el retorno de inversión (ROI) del proyecto.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 ¿Qué entendemos por “éxito” en proyectos de BI?

    .row.mb-4
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-azul.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-9.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El éxito en los proyectos de BI, va más allá de la mera implementación técnica del sistema o el despliegue de dashboards visuales. Supone una <b>adopción efectiva de la solución</b> por parte de los usuarios, su alineación con los objetivos estratégicos del negocio y la capacidad para generar valor real y medible.
        span Entre los principales criterios para evaluar el éxito en BI, se encuentran:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Primero 
                p.px-1.text-small.mb-0.text-center <b>Utilidad y uso del sistema por parte de los usuarios</b> (número de accesos, frecuencia de uso, interacción con dashboards).
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Segundo
                p.px-1.text-small.mb-0.text-center <b>Mejora en los procesos de toma de decisiones</b> (reducción del tiempo de análisis, mejor precisión, decisiones más informadas).
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-14.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Tercero 
                p.px-1.text-small.mb-0.text-center <b>Generación de valor económico o ahorro de costos</b> (por ejemplo, gracias a detección temprana de errores o mejora en la logística).
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-15.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Cuarto
                p.px-1.text-small.mb-0.text-center <b>Alineación con objetivos estratégicos</b> del negocio o área funcional.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Quinto 
                p.px-1.text-small.mb-0.text-center <b>Calidad de los datos</b> y su confiabilidad, para soportar decisiones críticas.

    p.mb-4 Según Moreno-Monsalve y Grueso Hinestroza (2024), un proyecto de BI exitoso es aquel que “logra integrarse en los flujos operativos y estratégicos de la organización, generando impactos tangibles en la productividad y competitividad del negocio”.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Indicadores claves para evaluar el éxito

    p.mb-4 Existen diversos <b>indicadores de desempeño (KPIs)</b>, que permiten monitorear el avance y el éxito de un proyecto de BI. Algunos de los más comunes incluyen:

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Tasa de adopción del sistema")
            p Porcentaje de usuarios activos, frente al total de usuarios esperados.
          .div(titulo="Nivel de satisfacción del usuario")
            p Medido a través de encuestas internas sobre funcionalidad, facilidad de uso, utilidad.
          .div(titulo="Reducción de tiempos operativos")
            p Por ejemplo, disminución en el tiempo de generación de reportes.
          .div(titulo="Incremento de ingresos o reducción de costos")
            p Estas variaciones son atribuibles al uso de <b>BI</b>.
          .div(titulo="Tiempo de retorno (payback period)")
            p Cuánto tiempo tarda la solución, en recuperar la inversión realizada.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Retorno de inversión (ROI) en BI: más allá de lo financiero

    .row.bg-fondo-1.bg-full-width.py-4.mb-0
      div.px-5.pb-md-3

        p.mb-4 El retorno de inversión (ROI) en BI, se puede entender como la relación entre los beneficios obtenidos (tanto financieros como no financieros) y los costos incurridos en el proyecto. Sin embargo, es importante reconocer que el ROI en BI, no siempre es fácilmente cuantificable, en términos económicos directos.
        p.mb-4 Los beneficios pueden ser:
        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Tangibles
                p.text-small.px-4.text-center.pb-2 Ahorro en costos de operación, reducción de errores, mejora en ventas. 
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Intangibles
                p.text-small.px-4.text-center.pb-2 Mejor clima organizacional, aumento de la confianza en los datos, empoderamiento del personal.

    .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-20.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0.text-white Joyanes Aguilar (2020), destaca que “el ROI en proyectos de inteligencia de negocios no puede medirse únicamente en términos financieros; es fundamental incorporar métricas relacionadas con el uso estratégico de la información y la transformación organizacional”.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.4
        h2 Herramientas y modelos para calcular el ROI en BI

    .row.mb-4.bg-azul.p-4.py-xl-0
      .col-12.col-xl-7.d-flex
        .my-auto
          p.mb-4 Algunas organizaciones aplican modelos híbridos que incluyen:
          span ●	<b>Análisis costo-beneficio</b> (tradicional).<br><br>●	<b>Modelos de impacto organizacional</b>, como el modelo Balanced Scorecard (Kaplan y Norton).<br><br>●	<b>Métricas de valor añadido</b> (value-based metrics) que relacionan indicadores de negocio con el uso del BI.

      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen') 

    .row.mb-5
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Además, se recomienda definir los indicadores de éxito y las métricas de ROI <b>desde la etapa de planeación del proyecto</b>, para asegurar la trazabilidad y facilitar el monitoreo.
        .bg-morado-claro.p-4
          span Hernández Gutiérrez, López Calvajar y Gutiérrez Rodríguez (2022), enfatizan que “los indicadores deben diseñarse de forma participativa, incluyendo la perspectiva de los tomadores de decisiones, los analistas y los usuarios finales, para garantizar su relevancia”.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/250975B") Fajardo-Moreno, W. S. (2022). Project Management and Direction Organizational Absorptive Capacity
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=2IuK-Wmrasg") [Vídeo] Banco Interamericano de Desarrollo. (2018). BID Lab, el laboratorio de innovación del Grupo BID para emprendimientos y proyectos innovadores
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
