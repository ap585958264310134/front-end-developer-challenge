# Front-End Developer Challenge

## Developer remarks

- This application is hosted on Github Pages => **[Link](https://ap585958264310134.github.io/front-end-developer-challenge/)**
- Unfortunately I couldn't be 100% pixel perfect, because:
    - The attached icons have a size of 50px x 50px, but the mock-up "defines" their size as 58px x 58px. The icons were delivered in a PNG file, which means that changing their size in this manner will degrade their quality and make them look unattractive. Therefore, I have decided to stick to their original size, even though not every pixel measurement will match the mock-up. I believe this is the better solution.
    - The mock-up was delivered in PNG file, which means that it was hard to collect original colors, font, font sizes, widths, heights etc.
- In my opinion, there is an error in the mock-up. The cursor pointer shoudn't be available when hovering over the 'cake' icon in this situation, as you cannot select it without first selecting cutlery.
- I have tested this application on:
    - (desktop) Chrome 118
    - (mobile) Chrome 118, Android 13


## Information from template 

In this repo you will find a mock-up and all the necessary assets (in a separate folder). The design is of a tool for a fictitious game called “TitanStar Legends”, and will not be repurposed or otherwise utilized by D&D Beyond – it is only a coding challenge.


Below are specific requirements we have which cannot be adequately expressed through the mock-up. This is not a timed assignment, but it should probably take a couple of hours. When you're done, submit a link to your test's Github repository. We ask that you have your assessment completed and returned within 7 days of receiving it. Good luck!

If you feel that you have a personal project that closely resembles this project, send us the repo and we’ll evaluate that project instead. Only your contributions will be evaluated and the project must demonstrate the following competencies with:
- Making an app mobile-friendly/responsive
- Creating and utilizing modern styling
- Creating a stateful JS application

### Assessment expectations

Code reviewers will be directed to pay special attention to the following:

- Styles of submission match the provided mock
- All functionality defined above is present in the submission
- Code organisation and maintainability
- If a JS framework is used, are that libraries best practices followed
- Any novel, or additional features beyond the given scope
- You may utilize SCSS/LESS/CSS Modules/CSS-in-JS to create necessary styles, but please avoid utilizing any frameworks or libraries that are already styled. (You may utilize a reset or normalize file if you would like)

### Rune Mastery Loadout Talent Calculator 9000
Players of TitanStar Legends can spend talent points that they’ve collected on runes within a tree. We need to write a js application that simulates the rune tree within the game so players can replicate their in-game loadouts to share with the TitanStar Legends community.

![Example](assets/example.png)

- Left click to add points.
- Right click to remove points.
- The user may only use up to 6 points.
- Each item only accounts for one point.
- Displays current point total
- The user must select the items in order.
    - For example: The user may not put a point in the cake without first having put points in the chevrons and the silverware (in that order).
