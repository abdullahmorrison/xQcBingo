# xQc Bingo
This is a game where twitch viewers that watch twitch.tv/xQcOW can play Bingo.

### Current Goals:
- [x] Code the design made on adobe xd (in design folder)
- [x] Deploy the website
- [ ] Design a Bingo win popup
  - [ ] Possibly add a win animation
- [x] Add Ko-fi link to contact page
- [ ] Save the bingo progress through cookies
- [ ] Refactor the CSS
  - [ ] Allow for scalabilty for different displays
- [ ] Set up SMTPJs for Contacts
- [ ] Add a website visitor count
- [ ] Final clean up/test of code
- [ ] Show the website to r/xqcow

### Future Possiblities:
- Add drag and drop feature for chips
- Add a board randomizer
- Add Twitch Login (I have difficulty integrating oauth into my code. Need help with it)
- Add a leaderboard
- Add a database which will allow the following:
  - Users can create boards and upload them so that other viewers can play their board
  - Multiple users can play on the same board
    - Moderators can run a huge Bingo game where the winner can win a prize (ex: gifted sub)

### Possible Issues
##### CSS issues:
1. position absolute: for a nav element and the instruction panel I used 
position abosulte. That may cause layout issues that I am not aware of.
