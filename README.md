# Fronend of message routing application

This repository contains various features such as angular Material integration, state management, REST API integration, environment configurations, route guards, and storage service.

## Table of Contents

- Getting Started
- Project Structure
- Features
  - State Management
  - REST API Integration
  - Environment Configurations
  - Route Guards
  - Storage Service
  - Angular Material Integration
- Running the Project

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

- Node.js (v14.x or later)
- Angular CLI (v17.x)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/dahdouh/frontend
```

2. Navigate to the project directory:

```sh
cd frontend
```

3.Install dependencies:

```sh
npm install
```

## Project Structure

Here's a brief overview of the project structure:

```sh
src/
├── app/
│   ├── components/
│   ├── guards/
│   ├── services/
│   ├── state/
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app.routing.ts
├── assets/
├── environments/
│   ├── environment.ts
│   ├── environment.prod.ts
├── index.html
└── main.ts
```

## Features

### State Management

The project uses a simple state management solution to handle application state. The state is managed using services and observables. You can find the state management logic in the src/app/state/ directory.

### REST API Integration

REST API integration is handled using Angular's HttpClientModule. Services for making HTTP requests are located in the src/app/services/ directory.

### Environment Configurations

Environment-specific configurations are stored in the src/environments/ directory. This allows you to manage different settings for development and production builds.

### Route Guards

Route guards are used to protect certain routes and ensure that only authorized users can access them. You can find the guard implementations in the src/app/guards/ directory.

### Storage Service

A storage service is included to abstract interactions with local storage and session storage. This service is located in the src/app/services/storage.service.ts file.

### Angular Material Integration

The project uses Angular Material to enhance the UI with modern design components. Angular Material modules are imported and configured in the src/app/app.module.ts file. You can customize the Angular Material theme and components as needed.

To install Angular Material, use the following commands:

```sh
ng add @angular/material
```

## Running the Project

To run the project locally, use the following command:

```sh
ng serve
```

Navigate to http://localhost:4200/ in your browser to see the application running.
