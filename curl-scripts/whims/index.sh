#!/bin/sh

# TOKEN="5eac60c3ae9f9ffbcdcd78702102a6aa" sh curl-scripts/whims/index.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/whims"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
