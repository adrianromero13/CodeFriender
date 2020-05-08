# Code Friender

About
Code Friender is a web-based studying application for UC Berkeley Bootcamp Students that allows a user to input information into a form that will generate a personalized profile card along with a list of other profiles that best suit the current user based on their studying strengths and weaknesses.

How it works
A user will enter information into a form such as first name, last name, selection of one strength and one weakness, a short bio, email address, and Github username.
Under the hood, this information is being inputted into a live MySQL database and profile cards are rendered to the all profiles page with the most current user's card being rendered on the left.
An axios call is made to Github to retrieve the users' pictures on their Github account.
From there, the current user can click on the 'Match' tab that will take them to a page that displays three different types of matches.

    1. Best Matches
    2. Best Matches For Me
    3. Best Matches For Them

Best Matches means that both the strength and weakness of one user are the exact opposite of another user. Each user is able to help where the other falls short and vice versa.

Best Matches For Me means that the current user is paired up with a user whose strength is the current user's weakness. The matched user is able to help the current user.

Best Matches For Them means that the current user is able to help a user they are paired with. The current user has a strength where the paired user is weak and so forth.


Challenges
This application was built using React.js. This is a new technology our team has just learned how to use and it was definitely a challenge trying to understand the file structure. Modularization is key with React and each component had its own file, imports, and exports.

Connecting our app to a live MySQL database was conceptually the correct thing to do but we still faced obstacles in which our backend kept breaking. 




Credits
This project was developed and deployed by the software engineering team of Armande Milhouse, Mark Mesina, Adrian Romero, and Mark Younan. We had additional help from our instructor Manny Jucaban, and our TA's Musa Akbari, and Amanda Crawford along with all the online resources we had utilized in fixing bugs and solving problems.

Collaborators:

Armande925
Adrianromero13
Markmesina
Markyounan11

UC Berkeley, Extensions Full Stack Development BootCamp Instructors & Assistants

Manny Jucaban
Musa Akbari
Amanda Crawford
