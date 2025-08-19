# HomeAssignment

# ip addrress:  13.51.133.115

# port: 80

All API calls should be in the form of:  http://13.51.133.115:80/accounts/

# API Requests:

URL:     http://13.51.133.115:80/accounts/{account_id}/balance
METHOD:  GET
RETURNS: if account_is exists, then a json: {balance: <balance>} is returned. Else - {msg: "Error, Acount not found"}
NOTES:   account_id could be a string
