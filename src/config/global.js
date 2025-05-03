export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Evaluación y escalabilidad de proyectos de BI',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Indicadores de éxito y retorno de inversión en proyectos de Business Intelligence (BI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué entendemos por “éxito” en proyectos de BI?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Indicadores claves para evaluar el éxito',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Retorno de inversión (ROI) en BI: más allá de lo financiero',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Herramientas y modelos para calcular el ROI en BI',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Sostenibilidad y evolución de los proyectos de inteligencia de negocios ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Elementos claves para la sostenibilidad y evolución del BI',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Estrategias para la continuidad operativa y actualización de los sistemas BI',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Estrategias recomendadas para asegurar la continuidad y evolución operativa en BI',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Aplicación de herramientas de software en la gestión de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Herramientas para la planificación y control del ciclo de vida del proyecto',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Plataformas de colaboración y gobernanza de la información',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Herramientas para análisis, visualización y toma de decisiones',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Presentación y comunicación de resultados en BI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Estrategias de comunicación de hallazgos analíticos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Diseño efectivo de dashboards e informes ejecutivos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Storytelling con datos: narrativa para la toma de decisiones',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo:
              'Buenas prácticas éticas y técnicas en la presentación de resultados',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Fuentes Adrianzén, D. J., & Carrión Barco, G. (2021). Modelo integrado de inteligencia de negocios como soporte a la toma de decisiones en la gestión comercial de las mypes. D - Universidad Señor de Sipán.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228906',
    },
    {
      referencia:
        'Hernández Gutiérrez, D. N., López Calvajar, G. A., & Gutiérrez Rodríguez, F. Á. (2022). Gestión de proyectos con enfoque de marco lógico. Editorial Universo Sur.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/273428',
    },
    {
      referencia:
        'Malagón Barinas, J. (2019). Modelos, metodologías y sistemas de gestión de proyectos. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/250971',
    },
    {
      referencia:
        'Moreno-Monsalve, N. A., & Grueso Hinestroza, M. P. (2024). Gestión de proyectos y organizaciones: una mirada desde las tendencias modernas de gestión. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/274731',
    },
    {
      referencia:
        'Moreno-Monsalve, N. A., Grueso Hinestroza, M. P., & Mayett-Moreno, Y. (2023). Dirección y gestión de proyectos. Perspectiva ética. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/274727',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Capacidad de acceder a los datos y resultados desde diferentes dispositivos o plataformas.',
    },
    {
      termino: 'Análisis predictivo',
      significado:
        'Técnica que utiliza datos históricos para predecir comportamientos o eventos futuros.',
    },
    {
      termino: 'Business Intelligence (BI)',
      significado:
        'Conjunto de procesos y herramientas que transforman datos en información útil para la toma de decisiones.',
    },
    {
      termino: 'Ciclo de vida del proyecto',
      significado:
        'Fases por las que pasa un proyecto desde su inicio hasta su cierre.',
    },
    {
      termino: 'Dashboard',
      significado:
        'Panel visual interactivo que presenta indicadores clave (KPIs) y métricas relevantes.',
    },
    {
      termino: 'Data Storytelling',
      significado:
        'Técnica narrativa que combina datos, visualizaciones y contexto para comunicar hallazgos.',
    },
    {
      termino: 'Gobernanza de datos',
      significado:
        'Conjunto de políticas y procesos para asegurar la calidad, seguridad y gestión ética de los datos.',
    },
    {
      termino: 'Indicadores clave (KPI)',
      significado:
        'Métricas utilizadas para evaluar el rendimiento y éxito de un proyecto o proceso.',
    },
    {
      termino: 'Infografía',
      significado:
        'Representación visual que combina texto e imagen para comunicar información compleja de manera clara.',
    },
    {
      termino: 'Informe ejecutivo',
      significado:
        'Documento breve y conciso dirigido a la alta gerencia que resume resultados y recomendaciones.',
    },
    {
      termino: 'Machine Learning',
      significado:
        'Rama de la inteligencia artificial que permite a los sistemas aprender automáticamente de los datos.',
    },
    {
      termino: 'Metadatos',
      significado:
        'Datos que describen otros datos, facilitando su organización y uso.',
    },
    {
      termino: 'Plataforma colaborativa',
      significado:
        'Herramienta digital que permite a varios usuarios trabajar de forma conjunta y sincronizada.',
    },
    {
      termino: 'Retorno de inversión (ROI)',
      significado:
        'Relación entre los beneficios obtenidos y los costos incurridos en un proyecto.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de un proyecto para mantenerse operativo, útil y actualizado a lo largo del tiempo.',
    },
    {
      termino: 'Storytelling con datos',
      significado:
        'Enfoque narrativo que facilita la comprensión de la información mediante historias basadas en evidencia.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso de selección de alternativas basado en análisis de información relevante.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'Proceso de integración de tecnología digital en todas las áreas de una organización.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de información para facilitar su análisis y comprensión.',
    },
    {
      termino: 'Workflow',
      significado:
        'Flujo de trabajo estructurado que define las tareas y responsables en un proceso.',
    },
  ],
}
