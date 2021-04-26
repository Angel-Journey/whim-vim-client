#!/bin/bash

# TOKEN="1286b06e8f13c420556863ba708f2229" TITLE="Soccer" TEXT="Playing Keeper" sh curl-scripts/whims/create.sh
# ID="60805c185e823af86f152707"

# ID="6081b321b2508000158e166c" TOKEN="ccd2bfa3399a8d5ce4a4e8be0f856434" TEXT="Indoor" sh curl-scripts/whims/update.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/whims"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "whim": {
      "title": "'"${TITLE}"'",
      "text": "'"${TEXT}"'"
    }
  }'

echo
