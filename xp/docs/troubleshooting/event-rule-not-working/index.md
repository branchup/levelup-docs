---
sidebar_position: 0
---

# My rule is not working

Let's walk through the different reasons why a rule may not be working as expected.

## What is always ignored

Before checking whether your rule specifically isn't working, let's recap' what events and actions are ignored:

- The actions performed by guests and administrators
- The events flagged as _anonymous_ (e.g. in an anonymous Feedback activity)
- The events occurring outside of courses (e.g. sending a message, logging in)
- The events with an _educational level_ not equal to _Participating_
- The actions performed by users that do not have the permission `block/xp:earnxp` (given to students by default)

Since Moodle 2.8, a report lists all the events, it is accessible from your Moodle site at _Site administration > Reports > Events list_. You can use it to check the educational level of an event amongst other things.

## Disable the cheat guard

Please keep in mind that the cheat guard may be affecting your results. If you are currently testing your set-up, you may want to disable the cheat guard. The cheat guard could be the cause of events being ignored if too many occur within a short time, or if the same event is repeated, or when a certain amount of points already where awarded.

The cheat guard can be disabled in the "Settings" tab. Also note that events ignored due to the cheat guard will _not_ be displayed in _Level Up XP_ logs.

The cheat guard considers two events identical when they are. For example posting in two different forum discussions is not considered identical, but posting twice in the same discussion is.

## Check if the event is in the logs

A good way to identify whether the event has been ignored by _Level Up XP_ is to check the Moodle logs. Those contain a detailed list of all events occurring and can be used to confirmed that an event was really triggered when you expected it. To view the Moodle logs, head to _Site administration > Reports > Logs_, or in _Reports > Logs_ in a course.

You may also find useful to check _Level Up XP_ logs, when a rule is matched and not prevented by the cheat guard, a log of the event, the user and how many points they earned will be saved in the logs. The logs are accessible in their dedicated tab.

## The rule cannot be matched

Rules are very flexible and allow you to combine many different conditions together, however sometimes this can lead to impossible conditions. For example, a rule cannot happen in two activities at the same time, so combining two conditions _Activity or resource is ..._ with the condition that "ALL of the conditions are true" will never match. It should read "ANY of the conditions are true". The same applies when combining _The event is ..._, and others.

If you are unsure whether your rule is impossible, considering splitting it in smaller distinct rules.