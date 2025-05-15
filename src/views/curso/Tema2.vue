<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Sostenibilidad y evolución de los proyectos de inteligencia de negocios '")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-12.col-xl-9
          span La sostenibilidad y evolución de los proyectos de Business Intelligence, constituyen elementos estratégicos esenciales para asegurar que estas iniciativas no solo alcancen sus objetivos iniciales, sino que mantengan su relevancia y capacidad de generar valor, a lo largo del tiempo. En este sentido, un sistema de BI sostenible es aquel que se adapta a los cambios tecnológicos, organizacionales y del entorno, garantizando continuidad operativa, apropiación institucional y mejora continua.
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p De acuerdo con Fuentes Adrianzén y Carrión Barco (2021), un enfoque sostenible en inteligencia de negocios, debe integrar componentes técnicos, humanos y estratégicos que aseguren su permanencia y utilidad en el ecosistema organizacional. Esto implica no solo contar con herramientas de análisis, sino también con procesos institucionalizados que permitan actualizar modelos, interpretar indicadores claves y retroalimentar las decisiones desde los datos. 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p Asimismo, Hernández Gutiérrez, López Calvajar y Gutiérrez Rodríguez (2022), enfatizan que todo proyecto debe contemplar su sostenibilidad desde la planificación. En el caso del BI, esto se traduce en establecer mecanismos de monitoreo, indicadores de adopción, estrategias de formación continua y estructuras organizativas, que acompañen su evolución.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p Malagón Barinas (2019), por su parte, propone una visión de ciclo de vida extendido, en la que los proyectos de BI deben evolucionar desde su fase de implementación hacia modelos de madurez progresiva. Esta madurez se refleja en la capacidad de las organizaciones para expandir el alcance del BI, integrar nuevas fuentes de datos, automatizar decisiones y escalar los sistemas hacia nuevos niveles de análisis predictivo o prescriptivo.

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Elementos claves para la sostenibilidad y evolución del BI

      p.mb-4 A partir de estos planteamientos, se pueden definir <b>cinco pilares fundamentales</b> para garantizar la sostenibilidad y evolución de los proyectos de inteligencia de negocios:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Arquitectura tecnológica adaptable")
              p Una infraestructura tecnológica escalable y flexible, permite la incorporación de nuevas fuentes de datos, la integración con otras plataformas y la actualización continua de las herramientas BI.<br><br><b>Ejemplo.</b> Una empresa que inicia con Power BI para reportes financieros, y con el tiempo lo expande a las áreas de talento humano y logística, mediante integración con Azure y Dynamics 365.

            .div(titulo="Gobernanza de datos y calidad continua")
              p La sostenibilidad requiere garantizar la integridad, disponibilidad y trazabilidad de los datos. Implementar políticas de calidad y estructuras de gobernanza favorece la evolución confiable del BI.<br><br><b>Ejemplo.</b> Una entidad pública que crea un comité de datos para validar fuentes, estandarizar formatos y garantizar la actualización de dashboards estratégicos.

            .div(titulo="Cultura organizacional basada en datos")
              p El BI solo se sostiene si los usuarios finales lo consideran valioso. Promover una cultura de uso y apropiación de la analítica, es fundamental.<br><br><b>Ejemplo.</b> Una universidad que capacita a sus decanos en el uso de indicadores académicos en dashboards, para decisiones curriculares.

            .div(titulo="Evaluación de impacto y retroalimentación")
              p Es necesario evaluar periódicamente el impacto del BI en los procesos organizativos. Esto permite reorientar estrategias, ajustar indicadores y demostrar valor.<br><br><b>Ejemplo.</b> Una empresa de retail que mide trimestralmente el ROI del BI comparando reducción de inventarios y aumento en velocidad de rotación de productos.

            .div(titulo="Escalabilidad estratégica")
              p El BI debe tener la capacidad de crecer a medida que aumentan las necesidades de la organización, tanto en volumen de datos como en complejidad analítica.<br><br><b>Ejemplo.</b> Una clínica que, tras iniciar con reportes básicos, evoluciona a modelos de predicción de ausentismo y análisis de eficiencia quirúrgica con herramientas avanzadas.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Estrategias para la continuidad operativa y actualización de los sistemas BI

      p.mb-4 La continuidad y actualización de los sistemas de Business Intelligence es esencial para responder a las demandas cambiantes del entorno empresarial.

      .row.bg-azul.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Estrategias para la continuidad operativa y actualización de los sistemas BI 
            p.mb-5(data-aos="fade-up") En el PDF Estrategias, se presentan enfoques clave para garantizar la sostenibilidad técnica y estratégica de estas soluciones, abordando desde la mejora continua hasta la gestión del conocimiento y la renovación tecnológica. Estas estrategias permiten mantener la eficacia del sistema BI como soporte vital para la toma de decisiones informadas y oportunas.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Estrategias_para_la_continuidad_operativa.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Estrategias para la continuidad operativa y actualización de los sistemas BI 
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
      
      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Estrategias recomendadas para asegurar la continuidad y evolución operativa en BI

      p.mb-4 A continuación, se detallan las principales estrategias que contribuyen a garantizar la continuidad funcional y la actualización constante de los sistemas BI:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Planes de mantenimiento preventivo y actualizaciones tecnológicas
                p Establecer cronogramas periódicos de revisión de hardware, software y conectividad, asegura la operatividad del sistema y previene fallos críticos.<br><br><b>Ejemplo.</b> Un hospital realiza cada trimestre la actualización de conectores entre su sistema de historia clínica y la herramienta BI, evitando pérdidas de datos o incompatibilidades.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Capacitación continua y gestión del conocimiento
                p La formación permanente del equipo de usuarios y técnicos, garantiza la autonomía y la apropiación del sistema, evitando la dependencia de consultores externos.<br><br><b>Ejemplo.</b> Una compañía de seguros crea un programa de formación interna en Tableau y storytelling con datos, dirigido a analistas y líderes funcionales.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Protocolos de contingencia y recuperación ante fallos
                p Diseñar planes de respaldo, redundancia y recuperación rápida permite asegurar la disponibilidad del sistema frente a incidentes técnicos o de ciberseguridad.<br><br><b>Ejemplo.</b> Un banco establece copias de seguridad automáticas en la nube cada 12 horas y cuenta con un protocolo para reiniciar su servidor BI en menos de una hora ante caídas críticas.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Revisión periódica de indicadores claves (KPIs)
                p Los dashboards deben reflejar los objetivos actuales del negocio. Se recomienda auditar semestralmente los KPIs para identificar obsolescencias o nuevas necesidades.<br><br><b>Ejemplo.</b> Una universidad elimina del dashboard académico un indicador de titulación obsoleto y lo reemplaza por un KPI de empleabilidad de egresados.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen') 
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Incorporación de tecnologías emergentes
                p La evolución del BI debe contemplar nuevas herramientas como inteligencia artificial, Big Data, automatización o visualizaciones interactivas, siempre que se alineen con las metas organizacionales.<br><br><b>Ejemplo.</b> Una cadena de supermercados incorpora análisis predictivo con Machine Learning para estimar rotación de productos, integrando esta funcionalidad a su plataforma BI.

              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen') 

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/172949") Zahera-Pérez, M. (2021). Industria 4.0 y la Dirección e Ingeniería de Proyectos
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=Zqd3vXg0ZNo&t=11s") [Vídeo] Software Guru. (2019). Del Business Intelligence en sitio al Business Intelligence en home office
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
      p

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
