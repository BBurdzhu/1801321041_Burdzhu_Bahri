Feature: Регистрация на потребител

   Scenario Outline: Регистрация на потребител 
    Given Потребителя отваря началната страница
    And Отваря се форма за регистрация в системата
    When Потребилеля въвежда име "<username>"
    And Потребителя въвежда парола "<password>"
    And Потребителя въвежда телефонен номер "<phone>"
    And Потребителя въвежда е-mail "<email>"
    And Натиска бутона за регистрация
    Then Вижда съобщение "<message>"


   Examples:
  	|username|password |phone     |email               |message                         |
	|Petranka|adminpass|0891245630|petranka_c@gmail.com|Успешно се регистрирахте!       |
	|Ivan    |adminpass|0891245630|petranka_c@gmail.com|Невалидно потребителско име!    |
	|Petranka|0000kk   |0891245630|petranka_c@gmail.com|Невалидна парола!        	    |
  	|Petranka|adminpass|0000000000|petranka_c@gmail.com|Невалиден телефонен номер!	    |
  	|        |adminpass|0891245630|petranka_c@gmail.com|Моля въведете потребителско име!|
  	|Petranka|adminpass|          |petranka_c@gmail.com|Моля въведете телефонен номер!  |
    |Petranka|adminpass|0891245630|                    |Моля въведете е-mail!           |
    |        |         |          |                    |Моля въведете валидни дании!    |
    
  
 
