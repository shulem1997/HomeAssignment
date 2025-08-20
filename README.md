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

## Running locally

- node server.js
- server will run on localhost:80

---

## API Endpoints:

- server's ip is: 13.51.133.51 
- port 80
- All http requests will be in this form: http://13.51.133.115:80/accounts

### GET http://13.51.133.115:80/
 - "home page"

### GET http://13.51.133.115:80/accounts/{account_id}/balance
#### parameters: 
- {account_id} could be any string

#### if account_id exists:
- status 200
- returns json {balance: /balance/}
#### if account_id doesn't exist:
- status 404
- returns json {msg: /Error msg/}
- accounts can be opened with the /deposit request
#### some other error:
- status 500
- returns json {msg: /Error msg/}

### POST http://13.51.133.115:80/accounts/{account_id}/deposit

#### parameters:
- body: {deposit: /number/}

#### for valid parameters :
- status 200
- returns json {msg: /msg/}
#### else:
- status 401
- returns json {msg: /Error msg/}
#### some other error (e.g invalid parameters):
- status 500
- returns json {msg: /Error msg/}

#### Note: if account_id doesn't exist, the request opens a new account

### POST http://13.51.133.115:80/accounts/{account_id}/withdraw

#### parameters:
- body: {amount: /number/}

#### for valid parameters and enough money in account:
- status 200
- returns json {msg: /msg/}
#### if account_id doesn't have enough money:
- status 401
- returns json {msg: /Error msg/}
- no money is withdrawn
#### some other error (e.g invalid parameters):
- status 500
- returns json {msg: /Error msg/}

## submitted text file content:

git repository - https://github.com/shulem1997/HomeAssignment

for API documentation - https://github.com/shulem1997/HomeAssignment/blob/main/README.md#api-endpoints

ip - 13.51.133.115
port - 80

An example for api request execution:
in command line (terminal for linux):
curl -X GET http://13.51.133.115:80/accounts/{account_id}/balance

This is a simple http server wtitten in NodeJS, that simulates an ATM system.
I chose NodeJS becuase of its simplicity and my previous experience with it.
My approach was to use the MVC architecture (with partial implemaentation, due to the task's requiremrnts) - routes and controllers are in different directories from server, for better understanding of the code structure and debugging if needed.

The system's data is stored in-memory as a Map object that maps {account_id} as key to the account's balance as value. Using map allows O(1) access to the data, and therefore I deemed it to be the best approach for this task. 

The main challenges for this task were thinkung about possible edge cases where the simple basic implementation woudn't suffice. One of these cases I found is withdrawing a negative amount, and the "client" would end up with more money after withdrawl. 

The server is deployed on an AWS EC2 machine whose ipv4 address is specified above