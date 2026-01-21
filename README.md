# Inventory Allocation System

## Overview
This project implements an inventory allocation system using Node.js and React.
The system is designed to ensure safe stock deduction and order creation using a single API.

---

## Backend
- Technology: Node.js, Express, MongoDB
- Architecture:
  - routes
  - controllers
  - services
  - repositories
  - models
- API:
  - POST /order

### Backend Responsibilities
- Validate product existence
- Validate available stock
- Deduct stock atomically
- Create order
- Prevent negative stock
- Handle concurrent requests safely

---

## Frontend (React)
- Minimal form to place order
- Uses POST /order API
- Sends productId and quantity

---

## Database
- MongoDB
- Products are seeded manually to comply with the single API constraint

---

## How to Run
1. Start MongoDB
2. Backend: cd `Backend` >> `npm run dev`
3. Frontend: cd `Frontend` >> `npm run dev`
