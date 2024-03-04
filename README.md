# Welcome to MaxiSend DEMO Streaming👋
![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)

[Visita el sitio de DEMO Streaming](https://maxisend-adan-test.netlify.app)

## Install

```sh
npm install
```

## Usage

```sh
npm start
```

## Language

React Typescript

## Author

👤 **Adán Lazcano**

### ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

Al analizar los requerimientos se opta por tomar la decisión de separar las funcionalidades dentro de custom hooks para solo instanciarlos en los componentes de cada parte del sitio web (layout, home,entries) que a su vez contiene archivos de estilos compartidos, la llamada a datos externos esta dentro de un servicio que se registra en un estado en redux para interactuar en toda la aplicación. Todo esto con la finalidad de identificar de manera sencilla partes de código clasficado por diseño y funcionalidades para dar mantenimiento o extender el sitio siguiendo la misma estructura propuesta.

### ¿Hay alguna mejora que pueda hacer en su envío?

Tratar de aplicar componentes mas pequeños como en la paginación, select e input que funcionan para filtrar la data que se muestra en pantalla.

### ¿Qué haría de manera diferente si se le asignara más tiempo?

Setear los estatus de los response en un axios interceptor, además de de aplicar cuando se invoca un loading el skeleton con un timeout si es necesario para mejor experiencia de usuario, hacer un funcion de busqueda por cualquier coincidencia en los entries.



***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_