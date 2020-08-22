#!/usr/bin/env bash
myName="hunterkilltree"
echo Hello, "${myName}"!
echo "Enter your commit: "
read myCommit

if [ -z "$myCommit" ]
then
	myCommit = "no ideal"
fi
git add .

git commit -m "$myCommit"

git push origin master
