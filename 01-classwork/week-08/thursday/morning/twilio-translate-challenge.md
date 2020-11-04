![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Twilio Translate Challenge

You have applied for a job at a leading global communication brand. The initial meeting went well and they have now asked you to complete the following code test.

## The challenge

Using Twilio's _Programmable SMS_ product, and the _Google Translate API_, create a web service that will allow a user to send an SMS to a phone number, whilst at the same time translating the message into another language.

The application you produce should have a single endpoint `/message` which handles the following data:

```json
{
  "message": "Hello World!",
  "lang": "fr",
  "tel": "+447777123456"
}
```

This would instruct the service to translate _Hello World!_ into French, before sending the translation to the number _+447454411787_ via SMS.

Once it has translated the message and sent the SMS, it should return the following response:

```json
{
  "message": "Translation successful. Message sent."
}
```

The user should be able to translate their message to any language code from those supported by the Google Translate API.

## Setup

To complete the challenge you will need to:

- [Sign up for a Twilio account](https://www.twilio.com/try-twilio)
- [Sign up for Google Translate API](https://github.com/googleapis/nodejs-translate#before-you-begin)

## Tips

- Work in a pair or a small team for this task. **You should not see this as a competition**, but instead a fun challenge to help you get more comfortable with reading documentation and using online resources and tutorials.
- Break the challenge down into separate chunks:
  - Send a simple SMS with Twilio.
  - Translate a phrase with Google Translate.
  - Send a translated phrase via SMS.
  - Setup Express to create the endpoint.
- The Twilio console can be a little hard to navigate. Once on the console, click on the large _Products_ tab at the top of the page, then select _Programmable SMS_. You will then be prompted to name your project before you can access the _SID_ and _TOKEN_ you will need to use the Twilio API.
- Using Twilio's free account, you can only send SMS to phone numbers that have been added to the project dashboard on the Twilio site. We suggest that you add a range of numbers of your fellow students so that you can test the endpoint thoroughly.
- Use the [Twilio](https://github.com/twilio/twilio-node#readme) and [Google Translate API](https://github.com/googleapis/nodejs-translate) official Node packages

_Have fun, and happy coding!_
