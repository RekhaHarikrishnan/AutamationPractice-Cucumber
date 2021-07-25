Feature: Testing the functionality of the Automation practice application
@SanityTest
Scenario Outline: user checking the signin functionality by giving valid username and password

         Given  user click the signin button to enter the login page
         When   user enter the valid "<username>" in the username field
         And    user enter the valid "<password>" in the password field
         Then   user confirm it by clicking login button and navigated to the MyAccount page
         
         Examples:
         |username|password|
         |rekhamca.h88@gmailcom|vibin|
         |vibin@123451|jenishaa|
         |vibin123@gmail.com|jenishaa|
         
@SanityTest         
Scenario:  user checking the functionality of mouse over action

          Given  user  must click the login button
          When   user drag the mouse to the women button to do mouse over action
          And    user click te Tops button
          And    user click the image quick view 
          Then   user confirm it by clicking the image button and navigated to the frame
@SanityTest
Scenario:  user checking the functionality of the frame

          Given  user click the image
          When   user enter in to the frame
          And    user click the add to cart button
          Then   user confirm it by clicking the proceed checkout button and navigated to the cart
@SmokeTest          
Scenario:  user checking the functionality to click the proceed buttons 
   
           Given  user click the checkout button
           When   user click the checkout button to continue te shopping
           And    user click the checkout button to confim the address
           And    user click the checkbox
           And    user click the checkout button for shipping process
           And    user click the bank mode to choose payment method
           Then   user click confirm button to confirm the order and navigated to order confirmation
      
      
      
      
      
      
      
      
      
      
                               
               