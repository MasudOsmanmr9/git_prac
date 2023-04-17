console.log("so this is topic2")
console.log("so this is topic3")



/*
ques: in this scenerio "suppose i have 2312212, 3412321, 444241 this three sequential order of commits 
and my current head is 444241 what will happen in this scenerio", what will happen 
if i run " git rese --hard HEAD~1" and then "git reset --soft HEAD~1"


If your current HEAD is 444241 and you run git reset --hard HEAD~1 followed by git reset --soft HEAD~1, the following will happen:

git reset --hard HEAD~1 will move the HEAD pointer back one commit, 
from 444241 to 3412321, and reset both the staging area and the working 
directory to match the contents of the files at the previous commit. Any 
changes made to files since the commit you are resetting to (3412321) will be lost and cannot be recovered.

git reset --soft HEAD~1 will move the HEAD pointer back one commit again, from 3412321 to 2312212, 
but this time it will leave the contents of the files in your working directory unchanged. 
The changes you made in the previous commit (3412321) will be staged and ready to be committed again.

So, after running git reset --soft HEAD~1 following git reset --hard HEAD~1, 
your working directory will contain the contents of the files as they were in the 
commit 2312212, and the changes you made in the commit 3412321 will be staged for the next commit.

It's important to note that running git reset --hard followed by git reset --soft is a potentially dangerous operation, as it can cause you to lose changes that you may have wanted to keep. It's always a good idea to make a backup of your work before using these commands.

*/