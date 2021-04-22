#!/bin/bash

# EMAIL="testclient@testmail.com" PASSWORD="c" sh curl-scripts/auth/sign-out.sh
# TOKEN="f621e2b40139a3aa3b7e38c048cc803f" sh curl-scripts/auth/sign-out.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
