
# Pet Care Frontend

## Student Information

| Information        | Details        |
| ------------------ | -------------- |
| **Student Name**   | Akila Chamara  |
| **Student Number** | 241711090      |
| **Slack Handle**   | @Akila Chamara |
| **GCP Project ID** | `petcare-eca`  |

## Project Description

Pet Care Frontend is the web application layer of the Pet Care Management System developed as part of the Enterprise Cloud Architecture (ECA) project.

The application provides a web-based interface for managing pet owners, pets, and appointments through REST APIs exposed by the backend microservices.

The frontend is deployed on **Google Cloud Run** and communicates with the cloud-deployed backend through the HTTP load-balancing and API Gateway infrastructure.

## Live Application

**Public Application URL:**

https://petcare-frontend-373163997556.asia-southeast1.run.app

The application is publicly accessible through Google Cloud Run.

## Features

The application provides functionality for:

* Owner management
* Pet management
* Appointment management
* Viewing saved records
* Creating records through REST APIs
* Integration with cloud-deployed backend microservices

## Architecture

```text
                           User
                            |
                            v
                    React Web Application
                            |
                            v
                       Cloud Run
                            |
                            v
                    HTTP Load Balancer
                            |
                            v
                    Managed Instance Group
                            |
                            v
                       API Gateway
                            |
                            v
                    Eureka Service Registry
                            |
              +-------------+-------------+
              |             |             |
              v             v             v
        Owner Service   Pet Service   Appointment
                                      Service
```

The frontend is hosted using a serverless Cloud Run deployment, while the backend microservices are deployed using Google Compute Engine managed infrastructure.

## Technology Stack

### Frontend

* React
* JavaScript
* Vite
* Axios
* HTML
* CSS

### Backend Integration

* REST APIs
* Spring Boot microservices
* Spring Cloud API Gateway
* Eureka Service Discovery

### Cloud & Deployment

* Google Cloud Run
* Google Cloud Platform (GCP)
* Google Cloud Load Balancing
* Google Compute Engine
* Managed Instance Groups
* Health Checks

### Development & Version Control

* Git
* GitHub
* npm

## API Integration

The frontend communicates with the backend services using Axios.

The main API routes are:

```text
/owners
/pets
/appointments
```

Requests are routed through the cloud backend infrastructure and API Gateway.

## Setup / Getting Started

### Prerequisites

* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/Akilach01/PetCare-Frontend.git
cd PetCare-Frontend
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The development application is normally available at:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production build is generated in the `dist` directory.

## Deployment

The production frontend is deployed using **Google Cloud Run**.

**GCP Project ID:**

```text
petcare-eca
```

**Production URL:**

https://petcare-frontend-373163997556.asia-southeast1.run.app

## Repository

GitHub repository:

https://github.com/Akilach01/PetCare-Frontend

## Purpose

This repository provides the web application layer of the Pet Care Management System and demonstrates integration between a React-based frontend and cloud-deployed Spring Boot microservices.
