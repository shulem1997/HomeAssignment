# HomeAssignment

# Account Management Server

This is a simple Node.js server that manages accounts with basic operations: deposit, withdraw, and check balance. Accounts are stored in memory using a `Map`.

---

## Features

- Get account balance
- Make a deposit
- Withdraw funds
- Basic error handling for invalid accounts and overdraft
- Simple in-memory storage

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16+ installed
- npm

---

## Installation

1. Clone the repository:
    - git clone https://github.com/shulem1997/HomeAssignment
    - cd HomeAssignment

2. Install dependencies: 
    - npm install
    - (npm install express if needed)

---

## Running

- node server.js
- server will run on localhost:80

---

## API Endpoints:

- server's ip is: 13.51.133.51 
- port 80
- All http requests will be in this form: http://13.51.133.115:80/accounts

### GET http://13.51.133.115:80/
 - "home page"

### http://13.51.133.115:80/accounts/{account_id}/balance

#### if account_id exists:
- status 200
- returns json {balance: <balance>}
#### if account_id doesn't exist:
- status 404
- returns json {msg: <Error msg>}
#### some other error:
- status 500
- returns json {msg: <Error msg>}


---