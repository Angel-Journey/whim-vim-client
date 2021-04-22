#!/bin/sh

# TOKEN="ccd2bfa3399a8d5ce4a4e8be0f856434" sh curl-scripts/whims/index.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/whims"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
