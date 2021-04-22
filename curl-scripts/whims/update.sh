#!/bin/bash

# TOKEN="1286b06e8f13c420556863ba708f2229" TITLE="Soccer" TEXT="Playing Keeper" sh curl-scripts/whims/create.sh
# ID="60805c185e823af86f152707"

# ID="60817a2b9a15fb0015f0da1e" TOKEN="ba3a51a87092db5b241a3a5ae22bcb74" TEXT="Indoor" sh curl-scripts/whims/update.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/whims"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "whim": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
