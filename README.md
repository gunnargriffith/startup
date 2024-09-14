# startup

# Elevator Pitch - Lore Core
Collaborative storytelling is the core of all Table Top Role Playing Games, but the biggest burden in that often falls to the Game Master. As Game Master, it is your responsibility to hold all the world-building, history, and environment knowledge in your head and be ready to spit it out to the players at any moment. One can always write it all down and hand it to the players, but then they'd have access to elements of the story or history that maybe they shouldn't yet. With the Lore Core, the Game Master and players alike can have access to all the information they need about the realm without the risk of plot spoilers or learning more than the in-game character should realistically know. The Game Master controls which bits of information can be accessed by each player specifically, or lock certain information to different fantasy races and origins. Now the Dwarf Barbarian can reference the relevant history of the Mountian Kingdom they are traveling through, as the Elvish Cleric refreshes his knowledge of the local deities without having to slow the game as the Game Master frantically searches through their notes. 

# Design
![LoreCoreSnip](https://github.com/user-attachments/assets/e174c4bd-d5d8-4d7a-8799-84c6ca78f981)

# Technologies 
HTML - Uses correct HTML structure for the application. Will be able to make multiple pages of notes accessible under certain conditions.
CSS - Will be used for styling and visual clarity of the site.
JavaScript - The will be used to program login and different roles of the users (GM vs Player) Also to limit file access to certain users
React - Multiple pages will need to be accessible by multiple users at once. 
Service - Backend service with endpoints for:
retrieving and submitting file edits
retrieving and submitting permission changes
displaying relevant Dnd info using the https://5e-bits.github.io/docs/ service.
DB/Login - Store users including their roles and permissions 
WebSocket - If the notes are changed, they will be changed for all users. 
