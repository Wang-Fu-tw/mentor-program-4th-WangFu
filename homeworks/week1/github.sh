#!/bin/bash
curl https://api.github.com/users/$1 > $1.txt;

echo "";

grep "\"name" $1.txt | cut -c 1-11 --complement | sed "s/..$//g" ;
grep "\"bio" $1.txt | cut -c 1-10 --complement | sed "s/..$//g" ;
grep "\"location" $1.txt | cut -c 1-15 --complement | sed "s/..$//g" ;
grep "\"blog" $1.txt | cut -c 1-11 --complement | sed "s/..$//g" ;

rm $1.txt;