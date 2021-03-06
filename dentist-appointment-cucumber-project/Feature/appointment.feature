Feature: Запазване на час за зъболекар

    Scenario Outline: Запазване на час за зъболекар с регистрация
    Given Потребителя отваря страницата за запазване на час
    And Отваря се формата за запазване на час
    When Потребителя избира някои от предоставените свободни дати и часове "<date>"
    And Въвежда оплакване за зъбобол "<name>"
    And Натиска бутона за запазване на час
    And Вижда линк за потвръждение
    Then Вижда съобщение "<message>" в емайла си


Examples: 
	| date             | name              | message                  |
    | 07.02.2021 10:30 | Проблем с мъдреца | Успешно си запазихте час!|
    |                  | Проблем с мъдреца | Моля въведете дата и час!|
	| 07.02.2021 10:30 | 		           | Моля въведете оплакване! |
	|                  |                   | Моля въведете данни!     |