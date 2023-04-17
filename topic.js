//this line exist with first commit
console.log('hellow this is masud osman');
//this line exist with second commit
console.log('we are testing git');
//this line exist with third commit
console.log('now this lines will be tracked');

//so here we tested commit deletion with this command
//"git reset hard --HEAD~1"
//we can see our commit list by
//"git log --oneline"
/*
when we giv this comman gits output will be shown like this:

5f9084e (HEAD -> master, origin/master) third commit
1ef07aa second commit
9d3fa51 first commit
f64cef7 just console
8fe674b first commit

so this command "git reset hard --HEAD~1" will remove the first commit which is "5f9084e" 
so our head will be moved to immidiate back commit "1ef07aa"
*/

//well this line added now