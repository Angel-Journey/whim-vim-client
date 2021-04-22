#!/bin/bash

# ID="60817a2b9a15fb0015f0da1e" TOKEN="ba3a51a87092db5b241a3a5ae22bcb74" sh curl-scripts/whims/destroy.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/whims"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
