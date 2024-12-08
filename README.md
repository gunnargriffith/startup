# startup

# Elevator Pitch - Lore Core
Collaborative storytelling is the core of all Table Top Role Playing Games, but the biggest burden in that often falls to the Game Master. As Game Master, it is your responsibility to hold all the world-building, history, and environment knowledge in your head and be ready to spit it out to the players at any moment. One can always write it all down and hand it to the players, but then they'd have access to elements of the story or history that maybe they shouldn't yet. With the Lore Core, the Game Master and players alike can have access to all the information they need about the realm without the risk of plot spoilers or learning more than the in-game character should realistically know. The Game Master controls which bits of information can be accessed by each player specifically, or lock certain information to different fantasy races and origins. Now the Dwarf Barbarian can reference the relevant history of the Mountian Kingdom they are traveling through, as the Elvish Cleric refreshes his knowledge of the local deities without having to slow the game as the Game Master frantically searches through their notes. 

# Design
![LoreCoreSnip](https://github.com/user-attachments/assets/e174c4bd-d5d8-4d7a-8799-84c6ca78f981)

# Technologies 
HTML - Uses the correct HTML structure for the application. Will be able to make multiple pages of notes accessible under certain conditions.

CSS - Will be used for styling and visual clarity of the site.

JavaScript - The will be used to program login and different roles of the users (GM vs Player) And to limit file access to certain users

React - Multiple pages will need to be accessible by multiple users at once. 

Service - Backend service with endpoints for Retrieving and submitting file edits, Retrieving and submitting permission changes, and Displaying relevant Dnd info using the https://5e-bits.github.io/docs/ service.

DB/Login - Store users including their roles and permissions 

WebSocket - If the notes are changed, they will be changed for all users. 

# HMTL Deliverable

This is the structure and start of the LoreCore website.

 [x] **HTML Pages** - I made 4 pages: a Home/Login, a page for the player notes, a page for the GM/World notes, and a page to edit player permissions to access world notes

 [x] **Links** - The header of all the pages links to the other pages. There are also fake links to the hypothical note pages. 

 [x] **Text** - The permissions decisions made are shown via text on the world lore page. 

 [ ] **Images** - There are a few places where I could include images from the Dnd image API but I wasn't sure how to leave a placeholder.
 
 [x] **DB/Login** - The main page has a place for login, and you need to choose either GM or Player as well.

 [x] **Websocket** - THe playnotes and world lore will be updatable by the users. 

# CSS Deliverable

[x] **Navigation Bar and Footer** - I styled and cleaned up the top menu and footer

[x] **Login Page** - Centered the Login and fixed the checkbox options

[x] **Flex Windows** - Flex added to all the pages for resizing

[x] **Page Link Buttons** - All the links to lore and notes made into clean buttons

[ ] **Images** I intend to pull from the DnD API but I haven't figured it out yet

# React Integration

[x] Installed and applied the required react software

[x] Restructures the code after the pattern seen in Simon to use react

[x] Complete revamp of the Gmpermissions section and world lore to make the permission have more function

[] Player notes is still a skeleton

# Service Deliverable

[x] **Express service integration** - yes

[x] **Static middleware** - Core functionally revamped to be actalluy functional

[x] **Calls to third party endpoints** - Dnd API integrated to highlight the uses of one random character skill every login

[x] **Backend serivce endpoints** - Filler login endpoint made to be used later






