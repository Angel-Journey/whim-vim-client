#!/bin/sh

# TOKEN="ccd2bfa3399a8d5ce4a4e8be0f856434" TITLE="Soccer" TEXT="Playing Keeper" OWNER="608179c69a15fb0015f0da1d" sh curl-scripts/whims/create.sh

# ID="6081b321b2508000158e166c"

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
