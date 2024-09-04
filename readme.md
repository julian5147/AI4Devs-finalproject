## Índice

0. [Ficha del proyecto](#0-ficha-del-proyecto)
1. [Descripción general del producto](#1-descripción-general-del-producto)
2. [Arquitectura del sistema](#2-arquitectura-del-sistema)
3. [Modelo de datos](#3-modelo-de-datos)
4. [Especificación de la API](#4-especificación-de-la-api)
5. [Historias de usuario](#5-historias-de-usuario)
6. [Tickets de trabajo](#6-tickets-de-trabajo)
7. [Pull requests](#7-pull-requests)

---

## 0. Ficha del proyecto

### **0.1. Tu nombre completo:**

Julián Andrés Salgado López

### **0.2. Nombre del proyecto:**

Quickash

### **0.3. Descripción breve del proyecto:**

Proyecto de desarrollo de una aplicación web para gestionar y recibir pagos de cualquier producto o servicio mediante un código QR o un enlace de pago.

### **0.4. URL del proyecto:**

En construcción...

### 0.5. URL o archivo comprimido del repositorio

https://github.com/julian5147/AI4Devs-finalproject.git


---

## 1. Descripción general del producto

### **1.1. Objetivo:**

El propósito principal de nuestra aplicación web, Quickash, es simplificar y centralizar el proceso de pago para pequeños y medianos comercios, ofreciendo una solución integral que permite gestionar y recibir pagos de productos o servicios mediante códigos QR o enlaces de pago.

Quickash aporta valor al:

1. Centralizar diversos métodos de pago en una sola plataforma.
2. Agilizar el proceso de cobro para los comerciantes.
3. Ofrecer una experiencia de pago más rápida y conveniente para los clientes.
4. Proporcionar una visión clara y organizada de los flujos de ingresos del negocio.

La aplicación soluciona los siguientes problemas:

1. La complejidad de manejar múltiples plataformas de pago.
2. La lentitud en los procesos de cobro tradicionales.
3. La falta de visibilidad en tiempo real de los pagos recibidos y pendientes.
4. La dificultad para ofrecer opciones de pago flexibles a los clientes.

Quickash está dirigida principalmente a:

- Pequeños y medianos comercios
- Profesionales independientes
- Emprendedores y startups
- Cualquier negocio que busque optimizar su proceso de cobro y gestión de pagos

### **1.2. Características y funcionalidades principales:**

1. **Generación de códigos QR dinámicos:**
   - Creación rápida de códigos QR únicos para cada transacción.
   - Personalización del monto y descripción del pago.
   - Opcón de establecer tiempo de expiración para el código QR.
2. **Creación de enlaces de pago:**
   - Generación de enlaces personalizados para compartir por correo electrónico, SMS o redes sociales.
   - Posibilidad de crear enlaces recurrentes para pagos periódicos.
3. **Panel de control centralizado:**
   - Visualización en tiempo real de todos los pagos recibidos y pendientes.
   - Filtros y búsqueda avanzada para localizar transacciones específicas.
   - Gráficos y estadísticas para analizar el flujo de ingresos.
4. **Integración con múltiples métodos de pago:**
   - Soporte para tarjetas de crédito/débito, transferencias bancarias y billeteras digitales.
   - Fácil configuración de nuevos métodos de pago según las necesidades del negocio.
5. **Gestión de clientes:**
   - Base de datos de clientes con historial de transacciones.
   - Opción para enviar recordatorios de pago automáticos.
6. **Emisión de comprobantes y facturas:**
   - Generación automática de recibos digitales.
   - Creación y envío de facturas personalizadas.
7. **Notificaciones en tiempo real:**
   - Alertas instantáneas para el comerciante cuando se recibe un pago.
   - Notificaciones para los clientes sobre el estado de su transacción.
8. **Seguridad y cumplimiento:**
   - Encriptación de datos de extremo a extremo.
   - Cumplimiento con estándares de seguridad PCI DSS.
   - Autenticación de dos factores para acceder a la cuenta.
9. **Reportes y exportación de datos:**
   - Generación de informes detallados sobre las transacciones.
   - Exportación de datos en múltiples formatos (CSV, Excel, PDF).
10. **Integración con sistemas de contabilidad:**
     - Conexión con software de contabilidad popular para sincronización automática de transacciones.
11. **Aplicación móvil complementaria:**
    - Versión móvil para gestionar pagos y visualizar estadísticas en movimiento.
    - Escáner de códigos QR integrado para facilitar los pagos en persona.
12. **Personalización de la experiencia de pago:**
    - Opción para personalizar la página de pago con el logo y colores de la marca.
    - Creación de plantillas de pago para agilizar transacciones recurrentes.
  
#### **Lean Canvas: Quickash - Plataforma de Gestión de Pagos**

| Problema | Solución | Propuesta de Valor Única | Ventaja Injusta | Segmentos de Clientes |
|----------|----------|--------------------------|-----------------|------------------------|
| - Complejidad en el manejo de múltiples plataformas de pago<br>- Procesos de cobro lentos<br>- Falta de visibilidad en tiempo real de pagos | - Códigos QR dinámicos<br>- Enlaces de pago personalizados<br>- Panel de control centralizado | Centraliza y simplifica la gestión de pagos para negocios, ofreciendo una experiencia rápida y conveniente | - Algoritmos de optimización de pagos patentados<br>- Partnerships estratégicos con proveedores de servicios financieros | - Pequeños y medianos comercios<br>- Profesionales independientes<br>-Emprendedores<br>- Startups |

| Métricas Clave | Canales | Early Adopters |
|----------------|---------|----------------|
| - Tasa de adopción<br>- Volumen de transacciones<br>- Retención de clientes<br>- NPS | - Marketing digital<br>- Partnerships con asociaciones empresariales<br>- Ventas directas | - Negocios tech-savvy<br>- Comercios con alta rotación de clientes |

| Estructura de Costos | Fuentes de Ingresos |
|----------------------|----------------------|
| - Desarrollo y mantenimiento de plataforma<br>- Infraestructura cloud<br>- Equipo de soporte al cliente<br>- Marketing y adquisición de clientes | - Comisiones por transacción<br>- Suscripciones mensuales/anuales<br>- Servicios premium (análisis avanzados, integraciones personalizadas) |

### **1.3. Diseño y experiencia de usuario:**

En construcción...

### **1.4. Instrucciones de instalación:**

En construcción...

---

## 2. Arquitectura del Sistema

### **2.1. Diagrama de arquitectura:**

![Diagrama de arquitectura](./res/quickash-architecture-diagram.png)

### Explicación de la arquitectura:

1. **Patrón arquitectónico**: Esta arquitectura sigue el patrón de Microservicios. Cada componente funcional principal se ha diseñado como un servicio independiente.

2. **Justificación de la elección**:
   - Escalabilidad independiente de cada servicio.
   - Desarrollo y despliegue independientes, permitiendo una entrega continua más eficiente.
   - Aislamiento de fallos, mejorando la resiliencia general del sistema.
   - Flexibilidad para usar diferentes tecnologías en cada servicio según sea necesario.

3. **Componentes principales**:
   - API Gateway: Punto de entrada único para todas las solicitudes de clientes.
   - Servicios independientes para Autenticación, Pagos, Códigos QR, Enlaces de Pago, Notificaciones y Análisis.
   - Base de datos: Posiblemente utilizando el patrón Database per Service.
   - Cola de mensajes: Para comunicación asíncrona entre servicios.

4. **Beneficios principales**:
   - Alta cohesión y bajo acoplamiento entre servicios.
   - Facilita la implementación de CI/CD para cada servicio.
   - Permite escalar horizontalmente los servicios más demandados.
   - Mejora la resiliencia general del sistema.

5. **Sacrificios o limitaciones**:
   - Mayor complejidad operativa.
   - Desafíos en la gestión de transacciones distribuidas.
   - Posible latencia adicional debido a la comunicación entre servicios.
   - Necesidad de implementar mecanismos robustos de observabilidad y monitoreo.

### Tecnologías sugeridas:

- API Gateway: Puede implementarse con tecnologías como Kong, AWS API Gateway o Nginx.
- Servicios: Pueden desarrollarse en lenguajes como Node.js, Python o Go, dependiendo de las necesidades específicas de cada servicio.
- Base de datos: Podría utilizarse una combinación de bases de datos SQL (como PostgreSQL) para datos transaccionales y NoSQL (como MongoDB) para datos no estructurados o que requieran alta escalabilidad.
- Cola de mensajes: Tecnologías como RabbitMQ o Apache Kafka serían adecuadas.
- Infraestructura Cloud: Puede desplegarse en proveedores como AWS, Google Cloud o Azure, aprovechando sus servicios gestionados para reducir la carga operativa.

Esta arquitectura proporciona una base sólida para Quickash, permitiendo un desarrollo ágil, escalabilidad y mantenimiento eficiente a largo plazo. La separación de responsabilidades en servicios independientes facilita la evolución del sistema y la incorporación de nuevas funcionalidades en el futuro.

### **2.2. Descripción de componentes principales:**

1. **API Gateway**
   - Tecnología: Kong o AWS API Gateway
   - Descripción: Actúa como punto de entrada único para todas las solicitudes de clientes, gestionando la autenticación, el enrutamiento y el balanceo de carga.

2. **Servicio de Autenticación**
   - Tecnología: Node.js con Express.js y JSON Web Tokens (JWT)
   - Descripción: Maneja el registro de usuarios, inicio de sesión y gestión de tokens de autenticación.

3. **Servicio de Pagos**
   - Tecnología: Go (Golang)
   - Descripción: Procesa las transacciones de pago, integrándose con diversos proveedores de pago y gestionando la lógica de negocio relacionada con los pagos.

4. **Servicio de Códigos QR**
   - Tecnología: Python con Flask
   - Descripción: Genera y gestiona códigos QR dinámicos para pagos.

5. **Servicio de Enlaces de Pago**
   - Tecnología: Node.js con Express.js
   - Descripción: Crea y gestiona enlaces de pago personalizados.

6. **Servicio de Notificaciones**
   - Tecnología: Node.js con Socket.io para notificaciones en tiempo real
   - Descripción: Envía notificaciones a usuarios sobre el estado de sus transacciones y otros eventos importantes.

7. **Servicio de Análisis**
   - Tecnología: Python con pandas y scikit-learn para análisis de datos
   - Descripción: Procesa y analiza datos de transacciones para generar informes y estadísticas.

8. **Base de Datos**
   - Tecnología: PostgreSQL para datos transaccionales, MongoDB para datos no estructurados
   - Descripción: Almacena datos de usuarios, transacciones y otra información crítica del sistema.

9. **Cola de Mensajes**
   - Tecnología: RabbitMQ
   - Descripción: Facilita la comunicación asíncrona entre servicios, mejorando la escalabilidad y la resiliencia del sistema.

10. **Frontend**
    - Tecnología: React.js con Next.js para renderizado del lado del servidor
    - Descripción: Interfaz de usuario responsive y dinámica para clientes web.

11. **Aplicación Móvil**
    - Tecnología: React Native
    - Descripción: Aplicación móvil multiplataforma para iOS y Android.

12. **Infraestructura Cloud**
    - Tecnología: AWS (Amazon Web Services) o Google Cloud Platform
    - Descripción: Proporciona servicios de computación, almacenamiento y red escalables y seguros.

### **2.3. Descripción de alto nivel del proyecto y estructura de ficheros**

en construcción...

### **2.4. Infraestructura y despliegue**

en construcción...

### **2.5. Seguridad**

en construcción...

### **2.6. Tests**

en construcción...

---

## 3. Modelo de Datos

### **3.1. Diagrama del modelo de datos:**

![Modelo de datos](./res/quickash-data-model.png)


### **3.2. Descripción de entidades principales:**

1. USUARIO
   - id (int, PK): Identificador único del usuario.
   - nombre (string, not null): Nombre completo del usuario.
   - email (string, unique, not null): Correo electrónico del usuario, usado para autenticación.
   - password_hash (string, not null): Hash de la contraseña del usuario para seguridad.
   - fecha_registro (datetime, not null): Fecha y hora de registro del usuario.
   - activo (boolean, not null): Indica si la cuenta del usuario está activa.

   Relaciones:
   - Uno a muchos con COMERCIO (un usuario puede tener múltiples comercios).
   - Uno a muchos con NOTIFICACION (un usuario puede recibir múltiples notificaciones).

2. COMERCIO
   - id (int, PK): Identificador único del comercio.
   - nombre (string, not null): Nombre del comercio.
   - direccion (string): Dirección física del comercio.
   - telefono (string): Número de teléfono de contacto del comercio.
   - usuario_id (int, FK, not null): Referencia al USUARIO propietario del comercio.

   Relaciones:
   - Muchos a uno con USUARIO (un comercio pertenece a un usuario).
   - Uno a muchos con TRANSACCION (un comercio puede tener múltiples transacciones).
   - Uno a muchos con CONFIGURACION_COSTOS (un comercio puede tener múltiples configuraciones de costos).

3. CONFIGURACION_COSTOS
   - id (int, PK): Identificador único de la configuración de costos.
   - comercio_id (int, FK, not null): Referencia al COMERCIO al que pertenece esta configuración.
   - porcentaje_comision (decimal, not null): Porcentaje de comisión aplicado a las transacciones.
   - monto_fijo (decimal, not null): Monto fijo aplicado a las transacciones.
   - fecha_inicio (date, not null): Fecha de inicio de validez de esta configuración.
   - fecha_fin (date): Fecha de fin de validez de esta configuración.

   Relaciones:
   - Muchos a uno con COMERCIO (una configuración de costos pertenece a un comercio).

4. METODO_PAGO
   - id (int, PK): Identificador único del método de pago.
   - nombre (string, not null): Nombre del método de pago.
   - descripcion (string): Descripción detallada del método de pago.

   Relaciones:
   - Uno a muchos con TRANSACCION (un método de pago puede ser utilizado en múltiples transacciones).

5. TRANSACCION
   - id (int, PK): Identificador único de la transacción.
   - comercio_id (int, FK, not null): Referencia al COMERCIO que realiza la transacción.
   - metodo_pago_id (int, FK, not null): Referencia al METODO_PAGO utilizado.
   - monto (decimal, not null): Monto de la transacción.
   - costo (decimal, not null): Costo asociado a la transacción (comisiones, etc.).
   - fecha (datetime, not null): Fecha y hora de la transacción.
   - estado (string, not null): Estado actual de la transacción (ej: pendiente, completada, cancelada).

   Relaciones:
   - Muchos a uno con COMERCIO (una transacción pertenece a un comercio).
   - Muchos a uno con METODO_PAGO (una transacción utiliza un método de pago).
   - Uno a uno con CODIGO_QR (una transacción puede generar un código QR).
   - Uno a uno con ENLACE_PAGO (una transacción puede generar un enlace de pago).
   - Uno a muchos con NOTIFICACION (una transacción puede generar múltiples notificaciones).

6. CODIGO_QR
   - id (int, PK): Identificador único del código QR.
   - transaccion_id (int, FK, not null): Referencia a la TRANSACCION asociada.
   - codigo (string, not null): Código QR generado.
   - fecha_creacion (datetime, not null): Fecha y hora de creación del código QR.
   - fecha_expiracion (datetime): Fecha y hora de expiración del código QR.
   - configuracion_metodos_pago (json): Configuración de métodos de pago permitidos para este código QR.

   Relaciones:
   - Uno a uno con TRANSACCION (un código QR está asociado a una transacción).

7. ENLACE_PAGO
   - id (int, PK): Identificador único del enlace de pago.
   - transaccion_id (int, FK, not null): Referencia a la TRANSACCION asociada.
   - url (string, not null): URL del enlace de pago.
   - fecha_creacion (datetime, not null): Fecha y hora de creación del enlace.
   - activo (boolean, not null): Indica si el enlace está activo.
   - configuracion_metodos_pago (json): Configuración de métodos de pago permitidos para este enlace.

   Relaciones:
   - Uno a uno con TRANSACCION (un enlace de pago está asociado a una transacción).

8. NOTIFICACION
   - id (int, PK): Identificador único de la notificación.
   - usuario_id (int, FK, not null): Referencia al USUARIO que recibe la notificación.
   - transaccion_id (int, FK, not null): Referencia a la TRANSACCION que genera la notificación.
   - mensaje (string, not null): Contenido de la notificación.
   - fecha_envio (datetime, not null): Fecha y hora de envío de la notificación.
   - leida (boolean, not null): Indica si la notificación ha sido leída por el usuario.

   Relaciones:
   - Muchos a uno con USUARIO (una notificación es recibida por un usuario).
   - Muchos a uno con TRANSACCION (una notificación es generada por una transacción).

---

## 4. Especificación de la API

https://app.swaggerhub.com/apis-docs/JULISALGADO71_1/Quickash/1.0.0

Ejemplos de petición y respuesta para cada endpoint:

1. Crear un nuevo pago

Petición:
```http
POST /payments HTTP/1.1
Host: api.quickash.com
Content-Type: application/json

{
  "amount": 1000,
  "currency": "COP",
  "payment_method_id": "pm_1234567890",
  "comercio_id": "com_9876543210"
}
```

Respuesta:
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "pay_1234567890",
  "amount": 1000,
  "currency": "COP",
  "status": "succeeded",
  "created_at": "2023-05-15T10:30:00Z"
}
```

2. Obtener transacciones por usuario

Petición:
```http
GET /transactions?user_id=usr_1234567890 HTTP/1.1
Host: api.quickash.com
```

Respuesta:
```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "txn_1234567890",
    "amount": 1000,
    "currency": "COP",
    "status": "succeeded",
    "created_at": "2023-05-15T10:30:00Z",
    "comercio_id": "com_9876543210"
  },
  {
    "id": "txn_0987654321",
    "amount": 500,
    "currency": "COP",
    "status": "succeeded",
    "created_at": "2023-05-14T15:45:00Z",
    "comercio_id": "com_1122334455"
  }
]
```

3. Obtener métodos de pago disponibles

Petición:
```http
GET /payment-methods HTTP/1.1
Host: api.quickash.com
```

Respuesta:
```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": "pm_card",
    "type": "card",
    "name": "Tarjeta de crédito/débito"
  },
  {
    "id": "pm_qr",
    "type": "qr",
    "name": "Código QR"
  },
  {
    "id": "pm_link",
    "type": "link",
    "name": "Enlace de pago"
  }
]
```

Esta especificación de API proporciona una base sólida para la integración de Quickash con aplicaciones de terceros y sistemas de comercio electrónico. Los endpoints cubren las funcionalidades principales de creación de pagos, consulta de transacciones y obtención de métodos de pago disponibles.

---

## 5. Historias de Usuario

**Historia de Usuario 1: Generar código QR para pago**

Como dueño de un pequeño negocio,
Quiero generar un código QR para recibir un pago específico,
Para que mis clientes puedan escanear y pagar fácilmente con sus smartphones.

Criterios de aceptación:
- El sistema debe permitir ingresar el monto del pago a recibir.
- Se debe generar un código QR único para cada transacción.
- El código QR debe contener la información necesaria para procesar el pago.
- El código QR generado debe ser fácilmente compartible (por ejemplo, a través de correo electrónico o mensaje).
- El sistema debe mostrar el estado del pago en tiempo real una vez que el código QR es escaneado.

**Historia de Usuario 2: Crear enlace de pago personalizado**

Como vendedor en línea,
Quiero crear un enlace de pago personalizado para un producto o servicio,
Para poder compartirlo con mis clientes y recibir pagos de forma remota.

Criterios de aceptación:
- El sistema debe permitir especificar el monto, descripción y duración de validez del enlace.
- Se debe generar un URL único y corto para cada enlace de pago.
- El enlace debe llevar a una página de pago segura y personalizada con la información del producto/servicio.
- El sistema debe notificar al vendedor cuando se realice un pago exitoso a través del enlace.
- Se debe poder desactivar el enlace de pago manualmente o automáticamente después de su uso o expiración.

**Historia de Usuario 3: Visualizar panel de control de transacciones**

Como gerente de una tienda,
Quiero ver un panel de control con el resumen de todas las transacciones realizadas,
Para poder monitorear las ventas y el flujo de caja de mi negocio.

Criterios de aceptación:
- El panel debe mostrar el total de ingresos del día, semana y mes.
- Se debe visualizar un gráfico con la tendencia de ventas en el tiempo.
- El panel debe incluir una lista de las transacciones más recientes con detalles como monto, fecha y método de pago.
- Se debe poder filtrar las transacciones por rango de fechas, método de pago y estado.
- El sistema debe permitir exportar los datos de las transacciones en formatos comunes (CSV, Excel).

---

## 6. Tickets de Trabajo

**Ticket 1**:

Título: Implementar API para generación y gestión de códigos QR de pago

Descripción:
Como dueño de un pequeño negocio, quiero generar un código QR para recibir un pago específico, para que mis clientes puedan escanear y pagar fácilmente con sus smartphones.

Detalles técnicos:
- Crear un nuevo endpoint en la API REST: POST /api/v1/qr-codes
- El endpoint debe aceptar los siguientes parámetros:
  - amount (decimal, requerido): monto del pago
  - currency (string, requerido): moneda del pago (ej. COP, EUR)
  - merchant_id (string, requerido): ID del comercio
  - description (string, opcional): descripción del pago
- Utilizar la librería qrcode para generar el código QR
- El código QR debe contener una URL única que dirija a la página de pago
- Almacenar la información del código QR en la base de datos

Criterios de aceptación:
1. El endpoint devuelve un código 201 Created con la información del código QR generado, incluyendo su ID único y la URL de la imagen del QR.
2. El código QR generado es válido y puede ser escaneado por dispositivos móviles.
3. La información del código QR se almacena correctamente en la base de datos.
4. Se implementan validaciones para los parámetros de entrada.
5. Se manejan adecuadamente los errores, devolviendo códigos de estado HTTP apropiados.

Tareas:
1. Crear el modelo de datos para los códigos QR
2. Implementar el servicio de generación de códigos QR
3. Crear el controlador para el nuevo endpoint
4. Implementar las validaciones de entrada
5. Escribir pruebas unitarias y de integración
6. Documentar el nuevo endpoint en la documentación de la API

Estimación: 8 puntos

Prioridad: Alta

Etiquetas: backend, api, qr-code, payment

2. **Ticket 2**:

Título: Desarrollar interfaz de usuario para crear y mostrar enlaces de pago personalizados

Descripción:
Como vendedor en línea, quiero crear un enlace de pago personalizado para un producto o servicio, para poder compartirlo con mis clientes y recibir pagos de forma remota.

Detalles técnicos:
- Crear un nuevo componente React para el formulario de creación de enlaces de pago
- Implementar la lógica para enviar la solicitud al backend (POST /api/v1/payment-links)
- Crear una página de visualización del enlace de pago generado
- Implementar la funcionalidad de copiar al portapapeles y compartir en redes sociales

Criterios de aceptación:
1. El formulario permite ingresar monto, descripción y duración de validez del enlace.
2. Al enviar el formulario, se muestra una vista previa del enlace generado.
3. La página de visualización muestra claramente el enlace corto y un botón para copiarlo.
4. Se implementan opciones para compartir el enlace en WhatsApp.
5. La interfaz es responsive y se ve correctamente en dispositivos móviles y de escritorio.
6. Se muestran mensajes de error claros si hay problemas al crear el enlace.

Tareas:
1. Diseñar y crear el componente del formulario de creación de enlaces
2. Implementar la lógica de envío de datos al backend
3. Crear la página de visualización del enlace generado
4. Implementar la funcionalidad de copiar al portapapeles
5. Agregar botones para compartir en redes sociales
6. Realizar pruebas de usabilidad en diferentes dispositivos
7. Implementar manejo de errores y mensajes de feedback

Estimación: 5 puntos

Prioridad: Media

Etiquetas: frontend, react, payment-link, ui

**Ticket 3**:

Título: Diseñar e implementar esquema de base de datos para transacciones y métodos de pago

Descripción:
Como gerente de una tienda, quiero ver un panel de control con el resumen de todas las transacciones realizadas, para poder monitorear las ventas y el flujo de caja de mi negocio.

Detalles técnicos:
- Crear las siguientes tablas en la base de datos PostgreSQL:
  1. transactions
  2. payment_methods
  3. merchants
- Implementar relaciones entre las tablas
- Crear índices para optimizar las consultas frecuentes
- Implementar triggers para actualizar automáticamente los totales de ventas

Esquema de tablas:

```sql
CREATE TABLE merchants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payment_methods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    merchant_id INTEGER REFERENCES merchants(id),
    payment_method_id INTEGER REFERENCES payment_methods(id),
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

Criterios de aceptación:
1. Las tablas se crean correctamente en la base de datos con las relaciones apropiadas.
2. Se implementan índices en las columnas merchant_id, payment_method_id y created_at de la tabla transactions.
3. Se crea un trigger que actualiza un campo total_sales en la tabla merchants después de cada inserción en transactions.
4. Se pueden realizar consultas eficientes para obtener el resumen de transacciones por comerciante y método de pago.
5. El esquema soporta la inserción de al menos 1 millón de registros sin degradación significativa del rendimiento.

Tareas:
1. Crear el script SQL para la creación de tablas
2. Implementar las relaciones entre tablas
3. Crear índices para optimizar las consultas frecuentes
4. Implementar el trigger para actualizar total_sales
5. Escribir consultas de prueba para verificar el rendimiento
6. Realizar pruebas de carga para verificar el rendimiento con gran volumen de datos
7. Documentar el esquema de la base de datos y las decisiones de diseño

Estimación: 6 puntos

Prioridad: Alta

Etiquetas: database, postgresql, schema-design, performance

Estos tickets siguen las mejores prácticas al incluir títulos descriptivos, contexto detallado, criterios de aceptación claros, tareas específicas, estimaciones y etiquetas relevantes. Además, proporcionan suficiente información técnica para que los desarrolladores puedan comenzar a trabajar en las tareas sin necesidad de aclaraciones adicionales inmediatas.

---

## 7. Pull Requests

**Pull Request 1**

# Implementación inicial de la arquitectura y documentación del proyecto Quickash

## Descripción

Este Pull Request establece la base del proyecto Quickash, una aplicación web para gestionar y recibir pagos mediante códigos QR o enlaces de pago. Se ha implementado la estructura inicial del proyecto, incluyendo la arquitectura del sistema, el modelo de datos, y la documentación principal.

### Cambios principales:

- Definición de la arquitectura del sistema basada en microservicios
- Diseño del modelo de datos con entidades principales
- Especificación inicial de la API
- Documentación de historias de usuario y tickets de trabajo
- Actualización del README con la descripción general del producto

## Motivación y contexto

Este PR sienta las bases para el desarrollo futuro de Quickash, proporcionando una estructura clara y documentación detallada que guiará el trabajo del equipo. La arquitectura de microservicios elegida permitirá una mayor escalabilidad y flexibilidad a medida que el proyecto crezca.

## Cómo se ha probado

- Se ha revisado la coherencia de la documentación
- Se ha validado el modelo de datos con expertos en el dominio
- Se ha verificado que la especificación de la API cubre los casos de uso principales

## Notas adicionales

Este PR establece la estructura inicial del proyecto. Se requerirá trabajo adicional para implementar las funcionalidades descritas en la documentación.

**Pull Request 2**

**Pull Request 3**