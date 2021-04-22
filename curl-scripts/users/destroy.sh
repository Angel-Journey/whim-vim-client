#!/bin/bash

# ID=6080e47653761b0015bf8f7b sh curl-scripts/users/destroy.sh

API="https://whim-vim-api.herokuapp.com"
URL_PATH="/users"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \

echo
