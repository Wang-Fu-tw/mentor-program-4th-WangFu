#!/bin/bash
curl https://api.github.com/users/$1 > $1.txt;

echo "";

grep '"name"' $1.txt | cut -d '"' -f 4;
grep '"bio"' $1.txt | cut -d '"' -f 4 ;
grep '"location"' $1.txt | cut -d '"' -f 4 ;
grep '"blog"' $1.txt | cut -d '"' -f 4 ;

rm $1.txt;
