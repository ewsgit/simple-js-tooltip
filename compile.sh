#!/bin/bash

cd test/html
npm exec lite-server &
cd ../../js
npm exec tsc &