# Notes
A simple Node.js application that manages your notes.

##Instrutions
To run the application, run app.js using node followed by whichever command and tags are needed.  
```
node app.js add --title=
```
##Methods
1. add  
	Allows you too add a note. The title and body tags must be included.  
	```
	node app.js add --title=' ' --body=' '
	```
2. read
	Prints out the contents of a note given the title.
	```
	node app.js read --title=' '
	```
