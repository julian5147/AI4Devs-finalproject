## Índice

- [Índice](#índice)
- [1. Descripción general del producto](#1-descripción-general-del-producto)
- [2. Arquitectura del Sistema](#2-arquitectura-del-sistema)
  - [**2.1. Diagrama de arquitectura:**](#21-diagrama-de-arquitectura)
  - [**2.2. Descripción de componentes principales:**](#22-descripción-de-componentes-principales)
  - [**2.3. Descripción de alto nivel del proyecto y estructura de ficheros**](#23-descripción-de-alto-nivel-del-proyecto-y-estructura-de-ficheros)
  - [**2.4. Infraestructura y despliegue**](#24-infraestructura-y-despliegue)
  - [**2.5. Seguridad**](#25-seguridad)
  - [**2.6. Tests**](#26-tests)
  - [3. Modelo de Datos](#3-modelo-de-datos)
  - [4. Especificación de la API](#4-especificación-de-la-api)
  - [5. Historias de Usuario](#5-historias-de-usuario)
  - [6. Tickets de Trabajo](#6-tickets-de-trabajo)
  - [7. Pull Requests](#7-pull-requests)

---

## 1. Descripción general del producto

**Prompt 1:**

Eres un product manager con experiencia, y estás iniciando en una startup que busca desarrollar una aplicación web para gestionar y recibir pagos de productos o servicios mediante códigos QR o enlaces de pago. El objetivo es centralizar diversos métodos de pago, permitiendo a los clientes de un comercio acceder a ellos de forma más sencilla y rápida. Además, la aplicación ofrecerá la posibilidad de visualizar tanto los pagos realizados como los pendientes.

Por lo tanto, se requiere una descripción general de la aplicación web dividida en los siguientes apartados:

1. **Objetivo:** Incluir el propósito de la aplicación, el valor que aporta, los problemas que soluciona y a quién está dirigida.
2. **Características y funcionalidades principales:** Enumerar y describir cada una de las características y funcionalidades de la aplicación que satisfacen las necesidades identificadas.

**Prompt 2:**

Ahora ayudame a construir un diagrama lean canvas que pueda ver de manera visual en el readme.md para que se entienda mejor el modelo

**Prompt 3:**

El diagrama no se ve de manera lineal en el preview

---

## 2. Arquitectura del Sistema

### **2.1. Diagrama de arquitectura:**

**Prompt 1:**

Ahora, asume el rol de un arquitecto de software experto y ayúdame a diseñar un diagrama de arquitectura de la aplicación utilizando Mermaid. Este diagrama debe representar los componentes principales y las tecnologías utilizadas. Además, proporciona una explicación sobre si la arquitectura sigue algún patrón o modelo predefinido, justificando la elección de dicha arquitectura. Destaca los principales beneficios que esta arquitectura aporta al proyecto y las razones que justifican su uso, así como los posibles sacrificios o limitaciones que conlleva.

### **2.2. Descripción de componentes principales:**

**Prompt 1:**

Necesito ahora un descripción de los componentes más importantes incluyendo la tecnología utilizada, usa tu mejor criterio para decidir que es lo más importante y como los vas a implementar

### **2.3. Descripción de alto nivel del proyecto y estructura de ficheros**

**Prompt 1:**

En el apartadado de descripción de alto nivel del proyecto y estructura de ficheros, Ayudame a representar la estructura del proyecto y expliquemos brevemente el propósito de las carpetas principales, así como si obedece a algún patrón de diseño o arquitectura específico.

### **2.4. Infraestructura y despliegue**

**Prompt 1:**

**Prompt 2:**

**Prompt 3:**

### **2.5. Seguridad**

**Prompt 1:**

En el apartado de seguridad, Ayudame enumerar y describir las prácticas de seguridad principales que se han implementado en el proyecto, añadiendo ejemplos si procede

### **2.6. Tests**

**Prompt 1:**

En el apartado de tests, Ayudame a describir brevemente algunos de los tests realizados.

**Prompt 2:**

**Prompt 3:**

---

### 3. Modelo de Datos

**Prompt 1:**

Ayudame a crear un diagrama de modelo de datos para la applicación con mermaid, utiliza todos los parámetros que permite la sintaxis para dar el máximo detalle, por ejemplo las claves primarias y foráneas.

**Prompt 2:**

Revisa en el diagrama si es necesario almacenar la configuración de los costos que se aplicarán a los comercios por el dinero que les ayudaremos a recaudar. Además, evalúa si el código QR o el enlace de pago deben contener la configuración sobre los métodos de pago que van contener.

**Prompt 3:**

Dado el diagrama de modelo de datos, crea una descripción de las entidades principales, incluyendo el nombre y tipo de cada atributo, descripción breve si procede, claves primarias y foráneas, relaciones y tipo de relación, restricciones (unique, not null…), etc.

---

### 4. Especificación de la API

**Prompt 1:**

Ahora describe la API de la aplicación con OpenAPI, crea un ejemplo de petición y respuesta para cada endpoint, como crear un pago, obtener las transacciones por usuario, maximo(3).

**Prompt 2:**

Ahora describe la API de la aplicación con OpenAPI, crea un ejemplo de petición y respuesta para cada endpoint, como crear un pago, obtener las transacciones por usuario, maximo(3), ten en cuenta el MVP.

---

### 5. Historias de Usuario

**Prompt 1:**

Eres un product owner experto, teniendo en cuenta la descripción general del producto, documenta 3 de las historias de usuario principales, teniendo en cuenta las buenas prácticas de producto al respecto.

**Prompt 2:**

Eres un product owner experto, teniendo en cuenta la descripción general del producto y el MVP definido, documenta 3 de las historias de usuario principales, teniendo en cuenta las buenas prácticas de producto al respecto.

---

### 6. Tickets de Trabajo

**Prompt 1:**

Teniendo en cuenta las historias de usuario, crea los 3 tickets principales del desarrollo, uno de backend, uno de frontend, y uno de bases de datos. Da todo el detalle requerido para desarrollar la tarea de inicio a fin teniendo en cuenta las buenas prácticas al respecto.
**Prompt 2:**

Teniendo en cuenta las historias de usuario, crea los 3 tickets principales del desarrollo que permitan desarrollar el MVP: 
 - backend: Debe ser desarollado en Nestjs, con buenas practicas de desarrollo de software
 - frontend: Debe ser desarollado en React, con buenas practicas de desarrollo de software
 - bases de datos: Utilizar PostgreSQL y Prisma como ORM
 - infraestructura: Utilizar Docker y docker compose para la infraestructura

Da todo el detalle requerido para desarrollar la tarea de inicio a fin teniendo en cuenta las buenas prácticas al respecto.

---

### 7. Pull Requests

**Prompt 1:**

Como Software Developer enngineer, documenta el Pull Requests que permita especificar a detalle el trabajo realizado en este repo.

**Prompt 2:**

Teniendo en cuenta las diferencias encontradas en el proyecto, documenta el Pull Requests que permita especificar a detalle el trabajo realizado en este repo.

**Prompt 3:**

en la sección de **Pull Request 3** documenta el Pull Requests que permita especificar a detalle el trabajo realizado en este repo, teniendo en cuenta las diferencias encontradas en el proyecto.