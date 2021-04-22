#!/bin/bash

# EMAIL="test1@testmail.com" PASSWORD="b" sh curl-scripts/auth/sign-up.sh
# ID="608179c69a15fb0015f0da1d"

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
