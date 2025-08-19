

// all accounts are stored in a map of {account_id: balance}
const accounts = new Map();

//
// balance:
// if account exists: return json {balance: <balance>}
// else: return json {msg:"Error, account not found"}
//
async function getAccountBalance(req, res) {
    try {
        const {account_id} = req.params;

        //make sure account number exists
        //an account can be added only by depositing money
        //
        if(accounts.has(account_id)) {
            return res.status(200).json({balance: accounts.get(account_id)});
        }
        return res.status(404).json({msg:"Error, account not found"})
    }
    catch(e) {
        return res.status(500).json({msg: "some error occured. Check validity of parameters"});
    }
    
}

//
// deposit:
// function returns a json in form of: {msg: <msg>}
//
async function makeDeposit(req, res) {
    const {account_id} = req.params;
    try {
        const deposit = Number(req.body.deposit);


        //make sure deposit is a valid number greater than 0:
        if(isNaN(deposit) || deposit <=  0) {
            return res.status(500).json({msg: "deposit is not a valid number"})
        }

        //open new account if needed:
        const current = accounts.get(account_id) || 0;
        accounts.set(account_id, current + deposit);

        return res.status(200).json({msg: "deposit was made successfully"});
    }
    catch(e) {
        return res.status(500).json({msg: "some error occured. Check validity of parameters"});
    }

    
}

//
// withdraw
// function returns a json in form of: {msg: <msg>}
//
async function withdraw(req, res) {
    try {
        const {account_id} = req.params;
        const amount = Number(req.body.amount);

        //make sure a valid number greater than 0 is withdrawn:
        if(isNaN(amount) || amount <= 0) {
            return res.status(500).json({msg: "Amount is not a valid number"})
        }
        //check if account exists:
        if(accounts.has(account_id)) {

            //check if there is enough money in account for withdrawl:
            if(accounts.get(account_id) < amount) {
                return res.status(401).json({msg: "overdraft. withdraw was aborted"});
            }
            //withdraw
            accounts.set(account_id, accounts.get(account_id) - amount);
            return res.status(200).json({msg: `${amount} NIS were successfully withdrawn`})
        }
        return res.status(404).json({msg:"Error, account not found"})
    }
    catch(e) {
        return res.status(500).json({msg: "some error occured. Check validity of parameters"});
    }
}

module.exports = {getAccountBalance, withdraw, makeDeposit};