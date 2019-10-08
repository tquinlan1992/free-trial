# To Start

npm start

# Take-home Project

Before people can use Teikametrics software, they must first create an account and enter credit card information. This project is to implement a responsive 'free trial sign-up' page.


## Specifications

Use the attached [assets](assets/) for the general approach. An attached [Sketch](source/Pricing.sketch) file is provided along with the [Graphik](source/Graphik.zip) font.

Steps/Use cases:

- A user selects a payment plan 
    - User can toggle between monthly plans and yearly plans (yearly plans come with a discount)
- When a payment plan is selected, experience transitions (as a single-page app) to a confirmation screen
    - Screen shows the plan selected
    - Screen provides a means of going 'back' to select a different plan

The `Large Business` and `Agency` sections' `Contact Us` buttons are effectively just styled links.

## The Test

For the payment selection screen: deliver an implementation of this page that resembles the mockups. This should be responsive (note the desktop and mobile versions). The monthly/yearly toggle should reveal the different pricing options as well as change colors (yearly is purple, monthly is teal).

There is no design mockup for the 'confirmation screen'. It is acceptable to just render the phrase 'Thank you. You have selected PLAN VALUE HERE' provided:
- there is a means of going back and selecting a different plan
- the `PLAN VALUE HERE` value is dynamic and changes according to whichever plan they select.

Selecting a plan and going back should be implemented client-side as a 'single-page' experience.

## Evaluation

We're looking for a few things:

- ability to deliver responsive styles
- ability to implement a single-page experience
- justification of the technologies and approach(es) taken and limitations or trade-offs of the approach

Not important:
- Design/styling of the 'confirmation page'. It needs to exist as the single-page experience but the styling concerns are covered by the payment selection page
- What happens when a user clicks the `Contact Us` links. They can simply take the user to `https://www.teikametrics.com/`.

