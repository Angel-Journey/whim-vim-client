#!/bin/sh

# TOKEN="ba3a51a87092db5b241a3a5ae22bcb74" sh curl-scripts/whims/index.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/whims"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
