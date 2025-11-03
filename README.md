# Sistema de Gestión de Tickets

## Descripción

Sistema de gestión de tickets empresarial desarrollado con React y Node.js, desplegado en Azure. Esta aplicación permite la gestión completa de tickets de soporte técnico, con características avanzadas como internacionalización, tema oscuro/claro, autenticación empresarial y una interfaz responsiva.

## Tabla de Contenido

- [Descripción](#descripción)
- [Características](#características)
- [Arquitectura](#arquitectura)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Desarrollo](#desarrollo)
- [Despliegue](#despliegue)
- [API Documentation](#api-documentation)

## Características

### Frontend
- 🌐 Internacionalización (ES/EN)
- 🌓 Tema claro/oscuro personalizable
- 📱 Diseño responsivo con Material-UI
- 📊 Dashboard interactivo con estadísticas
- 🔄 Actualizaciones en tiempo real
- 📝 Editor rico para tickets

### Backend
- 🔐 Autenticación con Azure AD B2C (gratuito)
- 📨 Notificaciones por email (Azure Communication Services - nivel gratuito)
- 🌐 API REST en Azure App Service (nivel F1/Free)
- 📁 Almacenamiento de archivos en Azure Storage (5GB gratuitos)
- 🔒 RBAC (Control de acceso basado en roles)
- � Swagger/OpenAPI para documentación

Nota: Se utilizan los servicios gratuitos de Azure para estudiantes:

## Arquitectura

```plaintext
proyecto/
├── client/                    # Frontend React
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   ├── contexts/         # Contextos React
│   │   ├── hooks/           # Hooks personalizados
│   │   ├── locales/         # Traducciones i18n
│   │   ├── services/        # Servicios API
│   │   ├── styles/          # Estilos y temas
│   │   └── App.jsx          # Componente raíz
│   └── package.json
│
├── server/                    # Backend Node.js
│   ├── src/
│   │   ├── config/          # Configuraciones
│   │   ├── controllers/     # Controladores
│   │   ├── middlewares/     # Middlewares
│   │   ├── models/          # Modelos de datos
│   │   ├── routes/          # Rutas API
│   │   ├── services/        # Servicios
│   │   └── app.js          # Entrada principal
│   └── package.json
│
└── docker/                    # Configuración Docker
    ├── client/
    └── server/
```

## Requisitos

### Sistema
- Node.js 22 lts
- Docker y Docker Compose
- Git
- Azure CLI

### Servicios Azure (Cuenta Estudiante)
- Cuenta de Azure for Students activa
- Azure App Service (Nivel Free o Shared)
- Azure SQL Database (Nivel Basic)
- Azure Active Directory (Nivel Free)
- Azure Storage Account (StorageV2)

Nota: La cuenta de Azure for Students incluye $100 USD en créditos y servicios gratuitos. Asegúrate de:
- Usar los niveles de servicio incluidos en el crédito estudiantil
- Monitorear el uso de créditos en el portal de Azure
- Aprovechar las versiones gratuitas de los servicios cuando sea posible

## Instalación

### Desarrollo Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Jonathanvmx/proyecto_escom.git
   cd proyecto_escom
   ```

2. Instalar dependencias:
   ```bash
   # Instalar dependencias del cliente
   cd client
   npm install

   # Instalar dependencias del servidor
   cd ../server
   npm install
   ```

3. Configurar variables de entorno:
   ```bash
   # Cliente
   cd client
   cp .env.example .env

   # Servidor
   cd ../server
   cp .env.example .env
   ```

### Usando Docker

```bash
# Construir y levantar los contenedores
docker-compose up --build
```

## Desarrollo

### Cliente (React)

```bash
cd client
npm run dev
```
- Frontend disponible en: http://localhost:5173

### Servidor (Node.js)

```bash
cd server
npm run dev
```
- API disponible en: http://localhost:3000
- Swagger docs: http://localhost:3000/api-docs

## Configuración

### Variables de Entorno

#### Cliente (.env)
```plaintext
# API URL local o de Azure App Service
VITE_API_URL=http://localhost:3000

# Azure AD B2C (versión gratuita para estudiantes)
VITE_AUTH_TENANT_NAME=your-tenant.onmicrosoft.com
VITE_AUTH_CLIENT_ID=your-client-id
VITE_AUTH_POLICY=B2C_1_SignUpSignIn
```

#### Servidor (.env)
```plaintext
# Azure SQL Database (Basic Tier)
DB_HOST=your-server.database.windows.net
DB_NAME=tickets-db
DB_USER=adminuser
DB_PASSWORD=your-password
DB_TIER=Basic

# Azure AD B2C
AZURE_AD_B2C_TENANT=your-tenant.onmicrosoft.com
AZURE_AD_B2C_CLIENT_ID=your-client-id
AZURE_AD_B2C_POLICY=B2C_1_SignUpSignIn

# Azure Storage (StorageV2)
AZURE_STORAGE_CONNECTION_STRING=your-connection-string
AZURE_STORAGE_CONTAINER=tickets-attachments

# App
PORT=3000
NODE_ENV=development
WEBSITE_NODE_DEFAULT_VERSION=~22
SCM_DO_BUILD_DURING_DEPLOYMENT=true
```

## Despliegue

### Preparación con Azure for Students

1. Login en Azure con tu cuenta de estudiante:
   ```bash
   az login --use-device-code
   ```

2. Crear recursos (usando niveles gratuitos/básicos):
   ```bash
   # Grupo de recursos
   az group create --name tickets-system-rg --location eastus

   # Base de datos SQL (nivel básico)
   az sql server create --name tickets-sql-server --resource-group tickets-system-rg --location eastus --admin-user adminuser --admin-password "TuContraseñaSegura123!"
   az sql db create --name tickets-db --resource-group tickets-system-rg --server tickets-sql-server --service-objective Basic

   # App Service (Plan F1: Free)
   az appservice plan create --name tickets-plan --resource-group tickets-system-rg --sku F1 --is-linux
   az webapp create --name tickets-app --resource-group tickets-system-rg --plan tickets-plan --runtime "NODE|22-lts"

   # Storage Account (StorageV2)
   az storage account create --name ticketsstorage --resource-group tickets-system-rg --sku Standard_LRS --kind StorageV2
   ```

Nota: Los nombres de los recursos deben ser únicos globalmente. Ajusta los nombres según sea necesario.

### Despliegue con GitHub Actions

El proyecto incluye flujos de trabajo de GitHub Actions para CI/CD:

- `.github/workflows/client.yml`: Deploy del frontend
- `.github/workflows/server.yml`: Deploy del backend
- `.github/workflows/database.yml`: Migraciones de base de datos

## API Documentation

### Endpoints

#### Autenticación
- `POST /api/auth/login` - Inicio de sesión
- `POST /api/auth/refresh` - Refrescar token
- `POST /api/auth/logout` - Cerrar sesión

#### Tickets
- `GET /api/tickets` - Listar tickets
- `POST /api/tickets` - Crear ticket
- `GET /api/tickets/:id` - Obtener ticket
- `PUT /api/tickets/:id` - Actualizar ticket
- `DELETE /api/tickets/:id` - Eliminar ticket

#### Usuarios
- `GET /api/users` - Listar usuarios
- `POST /api/users` - Crear usuario
- `GET /api/users/:id` - Obtener usuario
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

## Stack Tecnológico

### Frontend
- React 18
- Material-UI
- React Query
- i18next
- Azure AD Authentication Library

### Backend
- Node.js 22 LTS
- Express.js
- Sequelize (para SQL Server)
- Azure SDK para JavaScript
- Azure Communication Services
- Swagger UI Express

### Infraestructura (Niveles gratuitos/estudiante)
- Azure App Service (F1 - Free tier)
- Azure SQL Database (Basic tier)
- Azure AD B2C (Free tier)
- Azure Storage (Free tier - 5GB)
- Azure Communication Services (Free tier)
- GitHub Actions (Free for public repos)
