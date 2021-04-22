#!/bin/bash

# ID="6081b321b2508000158e166c" TOKEN="ccd2bfa3399a8d5ce4a4e8be0f856434" sh curl-scripts/whims/destroy.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/whims"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
