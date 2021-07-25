$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/automation/feature/Automation.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the functionality of the Automation practice application",
  "description": "",
  "id": "testing-the-functionality-of-the-automation-practice-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "user checking the signin functionality by giving valid username and password",
  "description": "",
  "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-signin-functionality-by-giving-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user click the signin button to enter the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the valid \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the valid \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user confirm it by clicking login button and navigated to the MyAccount page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-signin-functionality-by-giving-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-signin-functionality-by-giving-valid-username-and-password;;1"
    },
    {
      "cells": [
        "rekhamca.h88@gmailcom",
        "vibin"
      ],
      "line": 12,
      "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-signin-functionality-by-giving-valid-username-and-password;;2"
    },
    {
      "cells": [
        "vibin@123451",
        "jenishaa"
      ],
      "line": 13,
      "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-signin-functionality-by-giving-valid-username-and-password;;3"
    },
    {
      "cells": [
        "vibin123@gmail.com",
        "jenishaa"
      ],
      "line": 14,
      "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-signin-functionality-by-giving-valid-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "user checking the signin functionality by giving valid username and password",
  "description": "",
  "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-signin-functionality-by-giving-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user click the signin button to enter the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the valid \"rekhamca.h88@gmailcom\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the valid \"vibin\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user confirm it by clicking login button and navigated to the MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_the_signin_button_to_enter_the_login_page()"
});
formatter.result({
  "duration": 11132775900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rekhamca.h88@gmailcom",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 505987000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vibin",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 297578300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_it_by_clicking_login_button_and_navigated_to_the_MyAccount_page()"
});
formatter.result({
  "duration": 1391167200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user checking the signin functionality by giving valid username and password",
  "description": "",
  "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-signin-functionality-by-giving-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user click the signin button to enter the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the valid \"vibin@123451\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the valid \"jenishaa\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user confirm it by clicking login button and navigated to the MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_the_signin_button_to_enter_the_login_page()"
});
formatter.result({
  "duration": 4078856100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vibin@123451",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 421286900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jenishaa",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 399330600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_it_by_clicking_login_button_and_navigated_to_the_MyAccount_page()"
});
formatter.result({
  "duration": 1789468300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "user checking the signin functionality by giving valid username and password",
  "description": "",
  "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-signin-functionality-by-giving-valid-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user click the signin button to enter the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the valid \"vibin123@gmail.com\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the valid \"jenishaa\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user confirm it by clicking login button and navigated to the MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_the_signin_button_to_enter_the_login_page()"
});
formatter.result({
  "duration": 3877219200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vibin123@gmail.com",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 442524300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jenishaa",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_enter_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 375721200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_it_by_clicking_login_button_and_navigated_to_the_MyAccount_page()"
});
formatter.result({
  "duration": 3255757500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user checking the functionality of mouse over action",
  "description": "",
  "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-functionality-of-mouse-over-action",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user  must click the login button",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user drag the mouse to the women button to do mouse over action",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user click te Tops button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user click the image quick view",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user confirm it by clicking the image button and navigated to the frame",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_must_click_the_login_button()"
});
formatter.result({
  "duration": 244600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_drag_the_mouse_to_the_women_button_to_do_mouse_over_action()"
});
formatter.result({
  "duration": 347298400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_te_Tops_button()"
});
formatter.result({
  "duration": 3476785800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_image_quick_view()"
});
formatter.result({
  "duration": 572968000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_it_by_clicking_the_image_button_and_navigated_to_the_frame()"
});
formatter.result({
  "duration": 78100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user checking the functionality of the frame",
  "description": "",
  "id": "testing-the-functionality-of-the-automation-practice-application;user-checking-the-functionality-of-the-frame",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user click the image",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "user enter in to the frame",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user click the add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user confirm it by clicking the proceed checkout button and navigated to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_the_image()"
});
formatter.result({
  "duration": 198000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_in_to_the_frame()"
});
formatter.result({
  "duration": 3176777400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_add_to_cart_button()"
});
formatter.result({
  "duration": 730225800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirm_it_by_clicking_the_proceed_checkout_button_and_navigated_to_the_cart()"
});
formatter.result({
  "duration": 77400,
  "status": "passed"
});
});