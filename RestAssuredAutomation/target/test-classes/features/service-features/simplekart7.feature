Feature: dummy feature 7



@API1
@API2
@API3



  @api @abhijeet
  Scenario Outline: Verify if items are returned successfully
    
    Given user access the "simpleKart" BaseUrl
      And the status line in response body is "HTTP/1.1 200 OK"
      
         When user calls "simpleKartItemsAPI" with "GET" http request using the query parameter "list" as "<parametervalue>"
      And the status line in response body is "HTTP/1.1 200 OK"
    Then the API call is success with status code 200
    	And the status line in response body is "HTTP/1.1 200 OK"
    	And the content type of response is "application/json; charset=utf-8"
    Examples: 
      | parametervalue |
      |             10 |
      |             -1 |
      |           9899 |

  
  
  
  @web-ui
  Scenario Outline: Verify if items details are returned successfully  for a given itemID
    Given user access the "simpleKart" BaseUrl
    When user calls "simpleKartItemDetailsAPI" with "GET" http request for the "<itemID>"
    Then the API call is success with status code 200
    And the status line in response body is "HTTP/1.1 200 OK"
    And the content type of response is "application/json; charset=utf-8"

    #Then the response body is validated against the "simpleKartItemDetailsAPI" json schema
    Examples: 
      | itemID |
      |   1657 |
      
      
      
      
      

  @simplekartservice
  Scenario Outline: Verify if order details are returned successfully  for a given orderid
    Given user access the "simpleKart" BaseUrl
    When user calls "simpleKartOrderDetailsAPI" with "GET" http request for the "<orderID>"
    Then the API call is success with status code 200
    And the status line in response body is "HTTP/1.1 200 OK"
    And the content type of response is "application/json; charset=utf-8"

    #Then the response body is validated against the "simpleKartOrderDetailsAPI" json schema
    Examples: 
      | orderID |
      |     674 |

  @simplekartservice
  Scenario: Validate if order is created for the given orderid
    Given user access the "simpleKart" BaseUrl
    Given the json payload for the "simpleKartOrderCreateAPI"
    When user calls "simpleKartOrderCreateAPI" with "POST" http request
    Then the API call is success with status code 200
    And the status line in response body is "HTTP/1.1 200 OK"
    And the content type of response is "application/json; charset=utf-8"
