$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("appointment.feature");
formatter.feature({
  "line": 1,
  "name": "Запазване на час за зъболекар",
  "description": "",
  "id": "запазване-на-час-за-зъболекар",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Запазване на час за зъболекар с регистрация",
  "description": "",
  "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря страницата за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се формата за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя избира някои от предоставените свободни дати и часове \"\u003cdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда оплакване за зъбобол \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда линк за потвръждение",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение \"\u003cmessage\u003e\" в емайла си",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;",
  "rows": [
    {
      "cells": [
        "date",
        "name",
        "message"
      ],
      "line": 14,
      "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;;1"
    },
    {
      "cells": [
        "07.02.2021 10:30",
        "Проблем с мъдреца",
        "Успешно си запазихте час!"
      ],
      "line": 15,
      "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;;2"
    },
    {
      "cells": [
        "",
        "Проблем с мъдреца",
        "Моля въведете дата и час!"
      ],
      "line": 16,
      "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;;3"
    },
    {
      "cells": [
        "07.02.2021 10:30",
        "",
        "Моля въведете оплакване!"
      ],
      "line": 17,
      "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;;4"
    },
    {
      "cells": [
        "",
        "",
        "Моля въведете данни!"
      ],
      "line": 18,
      "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Запазване на час за зъболекар с регистрация",
  "description": "",
  "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря страницата за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се формата за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя избира някои от предоставените свободни дати и часове \"07.02.2021 10:30\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда оплакване за зъбобол \"Проблем с мъдреца\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда линк за потвръждение",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение \"Успешно си запазихте час!\" в емайла си",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 284326400,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentForm()"
});
formatter.result({
  "duration": 258300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07.02.2021 10:30",
      "offset": 67
    }
  ],
  "location": "AppointmentSteps.chooseDate(String)"
});
formatter.result({
  "duration": 4765700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Проблем с мъдреца",
      "offset": 30
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 104200,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 2724700,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.checkLinkConfirmation()"
});
formatter.result({
  "duration": 129400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно си запазихте час!",
      "offset": 17
    }
  ],
  "location": "AppointmentSteps.checkAppointmentMessage(String)"
});
formatter.result({
  "duration": 3110300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Запазване на час за зъболекар с регистрация",
  "description": "",
  "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря страницата за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се формата за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя избира някои от предоставените свободни дати и часове \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда оплакване за зъбобол \"Проблем с мъдреца\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда линк за потвръждение",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение \"Моля въведете дата и час!\" в емайла си",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 239700,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentForm()"
});
formatter.result({
  "duration": 233900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 67
    }
  ],
  "location": "AppointmentSteps.chooseDate(String)"
});
formatter.result({
  "duration": 89900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Проблем с мъдреца",
      "offset": 30
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 98900,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.checkLinkConfirmation()"
});
formatter.result({
  "duration": 292100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете дата и час!",
      "offset": 17
    }
  ],
  "location": "AppointmentSteps.checkAppointmentMessage(String)"
});
formatter.result({
  "duration": 95800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Запазване на час за зъболекар с регистрация",
  "description": "",
  "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря страницата за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се формата за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя избира някои от предоставените свободни дати и часове \"07.02.2021 10:30\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда оплакване за зъбобол \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда линк за потвръждение",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение \"Моля въведете оплакване!\" в емайла си",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 75300,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentForm()"
});
formatter.result({
  "duration": 193500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07.02.2021 10:30",
      "offset": 67
    }
  ],
  "location": "AppointmentSteps.chooseDate(String)"
});
formatter.result({
  "duration": 86100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 86400,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 65300,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.checkLinkConfirmation()"
});
formatter.result({
  "duration": 71600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете оплакване!",
      "offset": 17
    }
  ],
  "location": "AppointmentSteps.checkAppointmentMessage(String)"
});
formatter.result({
  "duration": 92800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Запазване на час за зъболекар с регистрация",
  "description": "",
  "id": "запазване-на-час-за-зъболекар;запазване-на-час-за-зъболекар-с-регистрация;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря страницата за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се формата за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребителя избира някои от предоставените свободни дати и часове \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда оплакване за зъбобол \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за запазване на час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда линк за потвръждение",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение \"Моля въведете данни!\" в емайла си",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentScreen()"
});
formatter.result({
  "duration": 254900,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.openAppointmentForm()"
});
formatter.result({
  "duration": 204800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 67
    }
  ],
  "location": "AppointmentSteps.chooseDate(String)"
});
formatter.result({
  "duration": 89100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "AppointmentSteps.addName(String)"
});
formatter.result({
  "duration": 91400,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.clickAppointmentButton()"
});
formatter.result({
  "duration": 44100,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentSteps.checkLinkConfirmation()"
});
formatter.result({
  "duration": 84600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете данни!",
      "offset": 17
    }
  ],
  "location": "AppointmentSteps.checkAppointmentMessage(String)"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.uri("date.feature");
formatter.feature({
  "line": 1,
  "name": "Определяне на възможните периоди от ЗЪБОЛЕКАРЯ",
  "description": "",
  "id": "определяне-на-възможните-периоди-от-зъболекаря",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Определяне на възможните периоди от ЗЪБОЛЕКАРЯ",
  "description": "",
  "id": "определяне-на-възможните-периоди-от-зъболекаря;определяне-на-възможните-периоди-от-зъболекаря",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Зъболекаря отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Отваря се формата за определяне на възможните периоди",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвеждане на валидни данни \"\u003cdata\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за определяне на възможните периоди",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда  съобщение \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "определяне-на-възможните-периоди-от-зъболекаря;определяне-на-възможните-периоди-от-зъболекаря;",
  "rows": [
    {
      "cells": [
        "data",
        "message"
      ],
      "line": 14,
      "id": "определяне-на-възможните-периоди-от-зъболекаря;определяне-на-възможните-периоди-от-зъболекаря;;1"
    },
    {
      "cells": [
        "Зъболекарят е свободен на 07.02.2021 от 10:45",
        "Добавен свободен период!"
      ],
      "line": 15,
      "id": "определяне-на-възможните-периоди-от-зъболекаря;определяне-на-възможните-периоди-от-зъболекаря;;2"
    },
    {
      "cells": [
        "Зъболекарят е зает на 07.02.2021 от 10:45",
        "Грешка! Моля въведете валидни данни!"
      ],
      "line": 16,
      "id": "определяне-на-възможните-периоди-от-зъболекаря;определяне-на-възможните-периоди-от-зъболекаря;;3"
    },
    {
      "cells": [
        "",
        "Грешка! Моля въведете нужните данни за определяне на период!"
      ],
      "line": 17,
      "id": "определяне-на-възможните-периоди-от-зъболекаря;определяне-на-възможните-периоди-от-зъболекаря;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Определяне на възможните периоди от ЗЪБОЛЕКАРЯ",
  "description": "",
  "id": "определяне-на-възможните-периоди-от-зъболекаря;определяне-на-възможните-периоди-от-зъболекаря;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Зъболекаря отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Отваря се формата за определяне на възможните периоди",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвеждане на валидни данни \"Зъболекарят е свободен на 07.02.2021 от 10:45\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за определяне на възможните периоди",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда  съобщение \"Добавен свободен период!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DateSteps.openDatePage()"
});
formatter.result({
  "duration": 350300,
  "status": "passed"
});
formatter.match({
  "location": "DateSteps.openDateForm()"
});
formatter.result({
  "duration": 271300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Зъболекарят е свободен на 07.02.2021 от 10:45",
      "offset": 28
    }
  ],
  "location": "DateSteps.addData(String)"
});
formatter.result({
  "duration": 138400,
  "status": "passed"
});
formatter.match({
  "location": "DateSteps.clickDateButton()"
});
formatter.result({
  "duration": 774000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Добавен свободен период!",
      "offset": 18
    }
  ],
  "location": "DateSteps.checkDateMessage(String)"
});
formatter.result({
  "duration": 113600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Определяне на възможните периоди от ЗЪБОЛЕКАРЯ",
  "description": "",
  "id": "определяне-на-възможните-периоди-от-зъболекаря;определяне-на-възможните-периоди-от-зъболекаря;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Зъболекаря отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Отваря се формата за определяне на възможните периоди",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвеждане на валидни данни \"Зъболекарят е зает на 07.02.2021 от 10:45\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за определяне на възможните периоди",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда  съобщение \"Грешка! Моля въведете валидни данни!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DateSteps.openDatePage()"
});
formatter.result({
  "duration": 233600,
  "status": "passed"
});
formatter.match({
  "location": "DateSteps.openDateForm()"
});
formatter.result({
  "duration": 208400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Зъболекарят е зает на 07.02.2021 от 10:45",
      "offset": 28
    }
  ],
  "location": "DateSteps.addData(String)"
});
formatter.result({
  "duration": 83900,
  "status": "passed"
});
formatter.match({
  "location": "DateSteps.clickDateButton()"
});
formatter.result({
  "duration": 80700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешка! Моля въведете валидни данни!",
      "offset": 18
    }
  ],
  "location": "DateSteps.checkDateMessage(String)"
});
formatter.result({
  "duration": 81200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Определяне на възможните периоди от ЗЪБОЛЕКАРЯ",
  "description": "",
  "id": "определяне-на-възможните-периоди-от-зъболекаря;определяне-на-възможните-периоди-от-зъболекаря;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Зъболекаря отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Отваря се формата за определяне на възможните периоди",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвеждане на валидни данни \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за определяне на възможните периоди",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда  съобщение \"Грешка! Моля въведете нужните данни за определяне на период!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DateSteps.openDatePage()"
});
formatter.result({
  "duration": 223600,
  "status": "passed"
});
formatter.match({
  "location": "DateSteps.openDateForm()"
});
formatter.result({
  "duration": 217700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "DateSteps.addData(String)"
});
formatter.result({
  "duration": 81500,
  "status": "passed"
});
formatter.match({
  "location": "DateSteps.clickDateButton()"
});
formatter.result({
  "duration": 65000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешка! Моля въведете нужните данни за определяне на период!",
      "offset": 18
    }
  ],
  "location": "DateSteps.checkDateMessage(String)"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Вход в системата на потребител",
  "description": "",
  "id": "вход-в-системата-на-потребител",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата-на-потребител;вход-в-системата",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Въвежда валидно потребителско име \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда валидна парола \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение  \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "вход-в-системата-на-потребител;вход-в-системата;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 12,
      "id": "вход-в-системата-на-потребител;вход-в-системата;;1"
    },
    {
      "cells": [
        "Petranka",
        "adminpass",
        "Успешно влезнахте в акаунта си!"
      ],
      "line": 13,
      "id": "вход-в-системата-на-потребител;вход-в-системата;;2"
    },
    {
      "cells": [
        "Petranka",
        "admin",
        "Моля въведете правилна парола!"
      ],
      "line": 14,
      "id": "вход-в-системата-на-потребител;вход-в-системата;;3"
    },
    {
      "cells": [
        "Ivanka",
        "adminpass",
        "Моля въведете правилно потребителско име!"
      ],
      "line": 15,
      "id": "вход-в-системата-на-потребител;вход-в-системата;;4"
    },
    {
      "cells": [
        "Petranka",
        "",
        "Моля въведете парола!"
      ],
      "line": 16,
      "id": "вход-в-системата-на-потребител;вход-в-системата;;5"
    },
    {
      "cells": [
        "",
        "adminpass",
        "Моля въведете потребителско име!"
      ],
      "line": 17,
      "id": "вход-в-системата-на-потребител;вход-в-системата;;6"
    },
    {
      "cells": [
        "",
        "",
        "Моля въведете потребителско име и парола!"
      ],
      "line": 18,
      "id": "вход-в-системата-на-потребител;вход-в-системата;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата-на-потребител;вход-в-системата;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Въвежда валидно потребителско име \"Petranka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда валидна парола \"adminpass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение  \"Успешно влезнахте в акаунта си!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 348100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 93900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petranka",
      "offset": 35
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 113200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminpass",
      "offset": 24
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 115100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 6135100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно влезнахте в акаунта си!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 136700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата-на-потребител;вход-в-системата;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Въвежда валидно потребителско име \"Petranka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда валидна парола \"admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение  \"Моля въведете правилна парола!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 250200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 100700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petranka",
      "offset": 35
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 89700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 86800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 75300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете правилна парола!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 93300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата-на-потребител;вход-в-системата;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Въвежда валидно потребителско име \"Ivanka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда валидна парола \"adminpass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение  \"Моля въведете правилно потребителско име!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 111900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 88700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivanka",
      "offset": 35
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminpass",
      "offset": 24
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 86100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 81200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете правилно потребителско име!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 78800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата-на-потребител;вход-в-системата;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Въвежда валидно потребителско име \"Petranka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда валидна парола \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение  \"Моля въведете парола!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 452900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 197400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petranka",
      "offset": 35
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 91300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 108100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 46400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете парола!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 120500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата-на-потребител;вход-в-системата;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Въвежда валидно потребителско име \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда валидна парола \"adminpass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение  \"Моля въведете потребителско име!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 238600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 257800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 35
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 65900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminpass",
      "offset": 24
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 80600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете потребителско име!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата-на-потребител;вход-в-системата;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за вход",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Въвежда валидно потребителско име \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въвежда валидна парола \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натиска бутона за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение  \"Моля въведете потребителско име и парола!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 1029900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.openLoginForm()"
});
formatter.result({
  "duration": 170000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 35
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 88600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 46100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете потребителско име и парола!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 73400,
  "status": "passed"
});
formatter.uri("phone.feature");
formatter.feature({
  "line": 1,
  "name": "Запазване на час за зъболекар по телефон",
  "description": "",
  "id": "запазване-на-час-за-зъболекар-по-телефон",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Запазване на час за зъболекар по телефон",
  "description": "",
  "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя звъни на рецепцията за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се телефона от рецепцията",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Избира някои от предоставените свободни дати и часове  \"\u003cdate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Казва оплакване за зъбобол \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Чува съобщение \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;",
  "rows": [
    {
      "cells": [
        "date",
        "name",
        "message"
      ],
      "line": 11,
      "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;;1"
    },
    {
      "cells": [
        "09.02.2021 10:30",
        "Проблем с венците",
        "Успешно си запазихте час!"
      ],
      "line": 12,
      "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;;2"
    },
    {
      "cells": [
        "",
        "Проблем с венците",
        "Моля изберете дата и час!"
      ],
      "line": 13,
      "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;;3"
    },
    {
      "cells": [
        "09.02.2021 10:30",
        "",
        "Моля кажете оплакване!"
      ],
      "line": 14,
      "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;;4"
    },
    {
      "cells": [
        "",
        "",
        "Моля въведете данни!"
      ],
      "line": 15,
      "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Запазване на час за зъболекар по телефон",
  "description": "",
  "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя звъни на рецепцията за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се телефона от рецепцията",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Избира някои от предоставените свободни дати и часове  \"09.02.2021 10:30\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Казва оплакване за зъбобол \"Проблем с венците\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Чува съобщение \"Успешно си запазихте час!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentFromPhoneSteps.callDentist()"
});
formatter.result({
  "duration": 254300,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentFromPhoneSteps.acceptCall()"
});
formatter.result({
  "duration": 71600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09.02.2021 10:30",
      "offset": 56
    }
  ],
  "location": "AppointmentFromPhoneSteps.chooseDate(String)"
});
formatter.result({
  "duration": 683700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Проблем с венците",
      "offset": 28
    }
  ],
  "location": "AppointmentFromPhoneSteps.addName(String)"
});
formatter.result({
  "duration": 81700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно си запазихте час!",
      "offset": 16
    }
  ],
  "location": "AppointmentFromPhoneSteps.getMessage(String)"
});
formatter.result({
  "duration": 758500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Запазване на час за зъболекар по телефон",
  "description": "",
  "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя звъни на рецепцията за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се телефона от рецепцията",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Избира някои от предоставените свободни дати и часове  \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Казва оплакване за зъбобол \"Проблем с венците\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Чува съобщение \"Моля изберете дата и час!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentFromPhoneSteps.callDentist()"
});
formatter.result({
  "duration": 71300,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentFromPhoneSteps.acceptCall()"
});
formatter.result({
  "duration": 68100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 56
    }
  ],
  "location": "AppointmentFromPhoneSteps.chooseDate(String)"
});
formatter.result({
  "duration": 58800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Проблем с венците",
      "offset": 28
    }
  ],
  "location": "AppointmentFromPhoneSteps.addName(String)"
});
formatter.result({
  "duration": 53400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля изберете дата и час!",
      "offset": 16
    }
  ],
  "location": "AppointmentFromPhoneSteps.getMessage(String)"
});
formatter.result({
  "duration": 97400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Запазване на час за зъболекар по телефон",
  "description": "",
  "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя звъни на рецепцията за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се телефона от рецепцията",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Избира някои от предоставените свободни дати и часове  \"09.02.2021 10:30\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Казва оплакване за зъбобол \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Чува съобщение \"Моля кажете оплакване!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentFromPhoneSteps.callDentist()"
});
formatter.result({
  "duration": 76600,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentFromPhoneSteps.acceptCall()"
});
formatter.result({
  "duration": 46300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09.02.2021 10:30",
      "offset": 56
    }
  ],
  "location": "AppointmentFromPhoneSteps.chooseDate(String)"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "AppointmentFromPhoneSteps.addName(String)"
});
formatter.result({
  "duration": 105900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля кажете оплакване!",
      "offset": 16
    }
  ],
  "location": "AppointmentFromPhoneSteps.getMessage(String)"
});
formatter.result({
  "duration": 114100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Запазване на час за зъболекар по телефон",
  "description": "",
  "id": "запазване-на-час-за-зъболекар-по-телефон;запазване-на-час-за-зъболекар-по-телефон;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя звъни на рецепцията за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се телефона от рецепцията",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Избира някои от предоставените свободни дати и часове  \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Казва оплакване за зъбобол \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Чува съобщение \"Моля въведете данни!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AppointmentFromPhoneSteps.callDentist()"
});
formatter.result({
  "duration": 93100,
  "status": "passed"
});
formatter.match({
  "location": "AppointmentFromPhoneSteps.acceptCall()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 56
    }
  ],
  "location": "AppointmentFromPhoneSteps.chooseDate(String)"
});
formatter.result({
  "duration": 86800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "AppointmentFromPhoneSteps.addName(String)"
});
formatter.result({
  "duration": 75600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете данни!",
      "offset": 16
    }
  ],
  "location": "AppointmentFromPhoneSteps.getMessage(String)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребилеля въвежда име \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въвежда парола \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въвежда телефонен номер \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя въвежда е-mail \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "phone",
        "email",
        "message"
      ],
      "line": 15,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;1"
    },
    {
      "cells": [
        "Petranka",
        "adminpass",
        "0891245630",
        "petranka_c@gmail.com",
        "Успешно се регистрирахте!"
      ],
      "line": 16,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;2"
    },
    {
      "cells": [
        "Ivan",
        "adminpass",
        "0891245630",
        "petranka_c@gmail.com",
        "Невалидно потребителско име!"
      ],
      "line": 17,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;3"
    },
    {
      "cells": [
        "Petranka",
        "0000kk",
        "0891245630",
        "petranka_c@gmail.com",
        "Невалидна парола!"
      ],
      "line": 18,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;4"
    },
    {
      "cells": [
        "Petranka",
        "adminpass",
        "0000000000",
        "petranka_c@gmail.com",
        "Невалиден телефонен номер!"
      ],
      "line": 19,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;5"
    },
    {
      "cells": [
        "",
        "adminpass",
        "0891245630",
        "petranka_c@gmail.com",
        "Моля въведете потребителско име!"
      ],
      "line": 20,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;6"
    },
    {
      "cells": [
        "Petranka",
        "adminpass",
        "",
        "petranka_c@gmail.com",
        "Моля въведете телефонен номер!"
      ],
      "line": 21,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;7"
    },
    {
      "cells": [
        "Petranka",
        "adminpass",
        "0891245630",
        "",
        "Моля въведете е-mail!"
      ],
      "line": 22,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;8"
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "Моля въведете валидни дании!"
      ],
      "line": 23,
      "id": "регистрация-на-потребител;регистрация-на-потребител;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребилеля въвежда име \"Petranka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въвежда парола \"adminpass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въвежда телефонен номер \"0891245630\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя въвежда е-mail \"petranka_c@gmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Успешно се регистрирахте!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 284200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.openRegisterForm()"
});
formatter.result({
  "duration": 102500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petranka",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 89400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminpass",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 92500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0891245630",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.addPhone(String)"
});
formatter.result({
  "duration": 120800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "petranka_c@gmail.com",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.setEmail(String)"
});
formatter.result({
  "duration": 105100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 3136900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно се регистрирахте!",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.viewRegisterMessage(String)"
});
formatter.result({
  "duration": 160200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребилеля въвежда име \"Ivan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въвежда парола \"adminpass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въвежда телефонен номер \"0891245630\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя въвежда е-mail \"petranka_c@gmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Невалидно потребителско име!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 89200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.openRegisterForm()"
});
formatter.result({
  "duration": 54500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 64300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminpass",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 67100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0891245630",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.addPhone(String)"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "petranka_c@gmail.com",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.setEmail(String)"
});
formatter.result({
  "duration": 106400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 82100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидно потребителско име!",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.viewRegisterMessage(String)"
});
formatter.result({
  "duration": 93900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребилеля въвежда име \"Petranka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въвежда парола \"0000kk\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въвежда телефонен номер \"0891245630\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя въвежда е-mail \"petranka_c@gmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Невалидна парола!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 90300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.openRegisterForm()"
});
formatter.result({
  "duration": 82200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petranka",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 84600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0000kk",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 74300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0891245630",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.addPhone(String)"
});
formatter.result({
  "duration": 89900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "petranka_c@gmail.com",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.setEmail(String)"
});
formatter.result({
  "duration": 73100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидна парола!",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.viewRegisterMessage(String)"
});
formatter.result({
  "duration": 119800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребилеля въвежда име \"Petranka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въвежда парола \"adminpass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въвежда телефонен номер \"0000000000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя въвежда е-mail \"petranka_c@gmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Невалиден телефонен номер!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 80200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.openRegisterForm()"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petranka",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 138500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminpass",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 71600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0000000000",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.addPhone(String)"
});
formatter.result({
  "duration": 92900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "petranka_c@gmail.com",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.setEmail(String)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 67200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалиден телефонен номер!",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.viewRegisterMessage(String)"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребилеля въвежда име \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въвежда парола \"adminpass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въвежда телефонен номер \"0891245630\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя въвежда е-mail \"petranka_c@gmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Моля въведете потребителско име!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 78800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.openRegisterForm()"
});
formatter.result({
  "duration": 49100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminpass",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 56400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0891245630",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.addPhone(String)"
});
formatter.result({
  "duration": 59800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "petranka_c@gmail.com",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.setEmail(String)"
});
formatter.result({
  "duration": 63600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете потребителско име!",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.viewRegisterMessage(String)"
});
formatter.result({
  "duration": 80600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребилеля въвежда име \"Petranka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въвежда парола \"adminpass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въвежда телефонен номер \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя въвежда е-mail \"petranka_c@gmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Моля въведете телефонен номер!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 68800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.openRegisterForm()"
});
formatter.result({
  "duration": 44100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petranka",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 85300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminpass",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 75700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.addPhone(String)"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "petranka_c@gmail.com",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.setEmail(String)"
});
formatter.result({
  "duration": 48400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете телефонен номер!",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.viewRegisterMessage(String)"
});
formatter.result({
  "duration": 78500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребилеля въвежда име \"Petranka\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въвежда парола \"adminpass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въвежда телефонен номер \"0891245630\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя въвежда е-mail \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Моля въведете е-mail!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.openRegisterForm()"
});
formatter.result({
  "duration": 42800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petranka",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 66600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminpass",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 62800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0891245630",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.addPhone(String)"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.setEmail(String)"
});
formatter.result({
  "duration": 73500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете е-mail!",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.viewRegisterMessage(String)"
});
formatter.result({
  "duration": 63600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Регистрация на потребител",
  "description": "",
  "id": "регистрация-на-потребител;регистрация-на-потребител;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря началната страница",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Отваря се форма за регистрация в системата",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Потребилеля въвежда име \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Потребителя въвежда парола \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителя въвежда телефонен номер \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителя въвежда е-mail \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутона за регистрация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение \"Моля въведете валидни дании!\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 83700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.openRegisterForm()"
});
formatter.result({
  "duration": 53900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 74300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 91300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.addPhone(String)"
});
formatter.result({
  "duration": 82800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.setEmail(String)"
});
formatter.result({
  "duration": 454600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 37800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете валидни дании!",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.viewRegisterMessage(String)"
});
formatter.result({
  "duration": 99800,
  "status": "passed"
});
});