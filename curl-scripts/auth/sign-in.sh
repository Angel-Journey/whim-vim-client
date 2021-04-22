#!/bin/bash

# EMAIL="test1@testmail.com" PASSWORD="b" sh curl-scripts/auth/sign-in.sh
# TOKEN="ba3a51a87092db5b241a3a5ae22bcb74"

# EMAIL="testclient@testmail.com" PASSWORD="c" sh curl-scripts/auth/sign-in.sh
# TOKEN="ccd2bfa3399a8d5ce4a4e8be0f856434"

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
