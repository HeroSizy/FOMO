# README

Sorry I didn't make it out, but I will explain my idea here.

### Reason

I have tried several method to capture the coordinate of cursor, like

- `event.clientX`
- read from `span` directly as string and convert back to integer
- use a different function

But none of them worked. The coordinate will keep update with time even with a time interval.

### Idea

Here is my overall idea for solving the problem:

1. Capture start and end coordinate of the cursor, use them to calculate velocity
2. Build a X-Y coordinate system and make the central point 0
3. A new function to calculate the quadrant
4. Use `switch` to give different case an instruction like 
   - If the cursor in 1st quadrant, either increament of X or decrement of Y will count
   - If the cursor in 2nd quadrant, either increament of X or increament of Y will count
   - so on and so forth
5. Use a `log(velocity)/log(n)` function to adjust damping effect where n is the coefficient



> ***P.S.*** 	*Can you please tell me the correct way of solving this problem even if I am not shortlisted?*
>
> ​	*Thank you so Much!*