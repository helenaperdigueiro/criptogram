# Description

This project was developed to study Typescript.

I was trying to come up with an idea for a project to study Typescript and when I saw my 4-year-old niece solving a criptogram, I thought "this could be a fun project!". And so I developed this Criptogram Generator.

# How to use the application

1. Type any sentance
2. Press enter or click the submit button
3. The criptogram will be generated in a box below
4. The letters will be hidden by default
5. To toggle between show and hide the letters, click the eye icon
6. The key is different everytime the window is loaded
7. You can also generate a new key by clicking the crossed arrows icon (beware that this will erase all previously generated criptograms and cannot be undone)
8. You can also erase all criptograms and keep the same key by clicking the trash icon
9. After you create the desired criptograms, you can print as pdf and print in a sheet so the child can solve it
10. Important: the application does not support special characters such as punctuations, accentuations or numbers. The only supported characters are the letters in the English alphabet

# Author comments

I really hope people enjoy using this application to easily create personalized criptograms for the children in their lives. Criptograms are very educational and fun.

# How to run the project locally

Run with the extension "Live server".

If there are changes to the main.ts file, run the command: 
> tsc 

to transpile the Typescript to Javascript (the transpiled code will be in the build folder).

Because we are using "Live server" extension, the page will automatically reload in the browser and it will be already reading the new build/main.js generated.