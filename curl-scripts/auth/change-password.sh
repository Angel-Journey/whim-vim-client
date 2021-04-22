#!/bin/bash

# TOKEN="466bbc394c2ab05eeac12f3631d5d396" OLDPW="b" NEWPW="NEWer" sh curl-scripts/auth/change-password.sh

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
