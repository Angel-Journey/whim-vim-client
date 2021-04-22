#!/bin/bash

# TOKEN="1286b06e8f13c420556863ba708f2229" TEXT="Test" TITLE="Running test" sh curl-scripts/examples/create.sh
# ID='608058ef89b8c7f7b4b1f20d'

API="http://localhost:4741"
URL_PATH="/examples"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'",
      "title": "'"${TITLE}"'"
    }
  }'

echo
