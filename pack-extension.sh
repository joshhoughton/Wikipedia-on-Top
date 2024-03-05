#!/bin/bash

# Remove the old .zip
rm -f ext.zip

# Create a new .zip file
zip -r ext.zip wot/ -x "*.git*" -x "*node_modules*"

echo "ext.zip has been created."