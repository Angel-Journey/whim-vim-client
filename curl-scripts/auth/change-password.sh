#!/bin/bash

# TOKEN="ccd2bfa3399a8d5ce4a4e8be0f856434" OLDPW="c" NEWPW="NEWer" sh curl-scripts/auth/change-password.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/change-password"

curl "${API}${URL_PATH}/" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
