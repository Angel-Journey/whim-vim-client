#!/bin/sh

# TOKEN="ba3a51a87092db5b241a3a5ae22bcb74" TITLE="Soccer" TEXT="Playing Keeper" OWNER="608179c69a15fb0015f0da1d" sh curl-scripts/whims/create.sh

# ID="60817a2b9a15fb0015f0da1e"

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/whims"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "whim": {
      "title": "'"${TITLE}"'",
      "text": "'"${TEXT}"'",
      "owner": "'"${OWNER}"'"
    }
  }'

echo
