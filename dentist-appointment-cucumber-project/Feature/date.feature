Feature: Определяне на възможните периоди от ЗЪБОЛЕКАРЯ


    Scenario Outline: Определяне на възможните периоди от ЗЪБОЛЕКАРЯ
		Given Зъболекаря отваря началната страница
		And Отваря се формата за определяне на възможните периоди
		When Въвеждане на валидни данни "<data>"
		And Натиска бутона за определяне на възможните периоди
        Then Вижда  съобщение "<message>"
		
	
		
   Examples:
   	| data                                          | message                                                     |
   	| Зъболекарят е свободен на 07.02.2021 от 10:45 | Добавен свободен период!                                    |
	| Зъболекарят е зает на 07.02.2021 от 10:45     | Грешка! Моля въведете валидни данни!                        |
	|                                               | Грешка! Моля въведете нужните данни за определяне на период!|