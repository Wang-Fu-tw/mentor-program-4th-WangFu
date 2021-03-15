#!/bin/bash

for ((n=1;n<=$1;n++))
do
	touch "$n.js";
done
echo "done!";