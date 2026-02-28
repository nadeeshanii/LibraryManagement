# Library Management System

Simple full-stack library app with a React frontend and ASP.NET Core Web API backend.

## Features

- View all books
- Add a new book
- Edit existing books
- Delete books


## Tech Stack

- Frontend: React + TypeScript + Axios
- Backend: ASP.NET Core Web API (.NET 10)
- Database: SQLite + Entity Framework Core

## Project Structure

LibraryManagement/
├─ librarymanagement-frontend/
├─ LibraryManagement.API/
├─ LibraryManagement.sln
└─ README.md


## Prerequisites

- .NET SDK 10
- Node.js (LTS recommended)
- npm

## Setup

1. Clone the repository


git clone https://github.com/nadeeshanii/LibraryManagement.git
cd LibraryManagement


2. Restore backend dependencies

dotnet restore LibraryManagement.sln


3. Install frontend dependencies


cd librarymanagement-frontend
npm install
cd ..


## Run the Application

Run backend API (Terminal 1):

cd LibraryManagement.API
dotnet run


Backend runs on:
- `http://localhost:5085`
- `https://localhost:5084`

Run frontend (Terminal 2):


cd librarymanagement-frontend
npm start


Frontend runs on `http://localhost:3000` and calls API at `http://localhost:5085/api/books`.

## Testing

Frontend tests:


cd librarymanagement-frontend
npm test


Backend build check:


dotnet build LibraryManagement.sln


## Notes

- Keep backend running before using the frontend.
- If API port changes, update `librarymanagement-frontend/src/services/bookService.ts`.



