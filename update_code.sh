#!/usr/bin/env bash
myName="hunterkilltree"
echo Hello, "${myName}"!
echo "Enter your commit: "
read myCommit

if [ "$myCommit" -ne null]
then
	myCommit = "no ideal"
fi
git add .

git commit -m "$myCommit"

git push origin master
