# Testing

> Place your test plan, test report and traceability matrix here

## References

'P' = Test passed

'F' = Test does not passed

'-' = No additional testing

## Traceability matrix

### Functional

The table below shows an overview of which test covers which functional requirements

| Test | F1 | F2 | F3 | F4 | F5 | F6 | F7 | F8 | F9 | F10 | 
|:----:|:-:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:---:|
|  T1  | P | P  | P  | P  | P  | P  | P  | P  | P  |  P  |
|  T2  | P | P  | P  | P  | P  | P  | P  | -  | P  |  P  |
|  T3  | P | P  | P  | -  | -  | P  | P  | -  | -  |  -  |
|  T4  | P | P  | -  | -  | -  | -  | -  | -  | -  |  -  |

|  ID   | Description                                                                                                                                                                                                                          | MoSCoW  |
|:-----:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|
|  F1   | Display a list of auctionable products or services                                                                                                                                                                                   |    M    |
|  F2   | For each products or services show at least the following: <br> - Product or service name <br> - The price (these should be integer values) <br> - Who placed bids <br> - When will the auction end                                  | M |
| F3 | It must be possible to search the list of auctions on a title or name                                                                                                                                                                | M | 
| F4 | Bids cannot be removed or modified once they are made                                                                                                                                                                                | M |
| F5 | Input is validated client side before sending it to the server                                                                                                                                                                       | M |
| F6 | Input is validated server side                                                                                                                                                                                                       | M |
| F7 | The list of auctions can be filtered on at least 3 attributes that are logical for the chosen service or product. I.e.: <br> - all trips in Twente<br> - all yellow sneakers<br> - all paintings that are worth over 3 million euros | M |
| F8 | A list of bids updates in realtime if another user places a bid on the product or service                                                                                                                                            | S |
| F9 | Only users with a `bidder` role can place bids | M |
| F10 | Only users with an `admin` role can manage auctions | M |


### Non funtional

The table below shows an overview of which test covers which non-functional requirements

| Test | NF1 | NF2 | NF3 | NF4 | NF5 | NF6 | NF7 | NF8 | NF9 | NF10 | NF11 | NF12 | NF13 | NF14 | NF15 | NF16 | NF17 | NF18 | NF19 | 
|:----:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|  T1  |  P  |  P   |  P   |  P   |  P  |  F  |  F  |  P  |  P   |  P   |  P   |  P  |  P   |  P   |  P   |  P   |  P   |  P   |  P   |
|  T2  |  P  |  P   |  P   |  -   |  P  |  F  |  F  |  P  |  -   |  -    |  -    |  -   |  -    |  -    |  -    |  -    |  -   |  -   |  -   |
|  T3  |  -  |  P   |  P   |  -   |  P  |  -  |  -  |  -  |  -   |  -    |  -    |  -   |  -    |  -    |  -    |  -    |  -   |  -   |  -   |
|  T4  |  -  |  -   |  P   |  -   |  -  |  -  |  -  |  -  |  -   |  -    |  -    |  -   |  -    |  -    |  -    |  -    |  -   |  -   |  -   |

|  ID  | Description                                                                                                                                         | MoSCoW  |
|:----:|-----------------------------------------------------------------------------------------------------------------------------------------------------| :---: |
| NF1  | The API returns valid JSON objects or arrays                                                                                                        | M |
| NF2  | The API returns appropriate/correct [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)                                    | M |
| NF3  | The API uses the correct HTTP verbs for its operations                                                                                              | M |
| NF4  | The API implements at least ReST level 3                                                                                                            | M |
| NF5  | The API uses query parameters for filtering the result set                                                                                          | M |
| NF6  | The API uses query parameters for sorting the result set                                                                                            | S |
| NF7  | The API uses query parameters for limiting the result set                                                                                           | S |
| NF8  | Both the front-end and backend provide descriptive error messages: 'You already placed a bid', 'Bid already exists', 'User X not allowed to do ...' | M |
| NF 9 | Both front-end and backend apply the separation of concerns principle                                                                               | M |
| NF10 | API endpoints have meaningfull good and bad weather tests                                                                                           | M |
| NF11 | The traceability matrix, test plan and test report are documented in [testing.md](../documentation/testing.md)                                      | M |
| NF12 | After registration the user should be logged in. They should not have to log in again before being able to place a bid                              | M |
| NF13 | The front-end is build using Svelte (not Svelte Kit)                                                                                                | M |
| NF14 | The backend is built using Node js with Express                                                                                                     | M |
| NF15 | The front-end is composed of (re-usable) components using a logical structure                                                                       | M |
| NF16 | The API uses JSON Web tokens for authorization                                                                                                      | M |
| NF17 | The API uses Bcrypt for password hashing                                                                                                            | M |
| NF18 | The system uses role-based authentication and authorization                                                                                         | M | 
| NF19 | Users can have multiple roles                                                                                                                       | M |

## Test plan

### Objective:

To ensure the correct functionality of the auction platform's features, including both functional and non-functional requirements.

### Scope:

Tests will cover user roles, auction product displays, bidding mechanisms, and real-time updates. Non-functional testing includes API testing, security checks, and performance testing for load and response times.

### Test Schedule:

Functional Testing: 18/10/2024 - 18/10/2024

Non-Functional Testing: 19/10/2024 - 19/10/2024


### Testing Tools:

API Testing: Postman

Front-End Testing: Manual testing

### Roles and Responsibilities:

Test Execution: Developer (me)

Test Review: Developer (me)

## Test report

### Functional Testing Results

#### F1: Display a list of auctionable products or services

| Test case |                      Description                      | Result | 
|:---------:|:-----------------------------------------------------:|:------:|
|    T1     |  Display an empty list when no auctionable products   |   P    |
|    T2     |         Display multiple products in the list         |   P    |
|    T3     |     	Display product list for a specific category     |   P    |
|    T4     | Ensure no errors when displaying a large product list |   P    |

#### F2: For each products or services show at least the following:
- Product or service name
- The price (these should be integer values)
- Who placed bids
- When will the auction end

| Test case |       Description        | Result | 
|:---------:|:------------------------:|:------:|
|    T1     |    Display the name	     |   P    |
|    T2     |    Display the price     |   P    |
|    T3     | 	Display who placed bids |   P    |
|    T4     | Display the auction end  |   P    |

#### F3: It must be possible to search the list of auctions on a title or name
| Test case |                 Description                 | Result | 
|:---------:|:-------------------------------------------:|:------:|
|    T1     |    Search for auctions by product title	    |   P    |
|    T2     | 	Search for auctions by partial name match	 |   P    |
|    T3     |  	Ensure search results update dynamically  |   P    |

#### F4: Bids cannot be removed or modified once they are made
| Test case |                  Description                  | Result | 
|:---------:|:---------------------------------------------:|:------:|
|    T1     |    Ensure bids cannot be removed by users	    |   P    |
|    T2     |    Prevent modification of submitted bids	    |   P    |

#### F5: Input is validated client side before sending it to the server
| Test case |                   Description                   | Result | 
|:---------:|:-----------------------------------------------:|:------:|
|    T1     |     Validate bid amount before submission	      |   P    |
|    T2     |  	Prevent invalid inputs from being submitted   |   P    |

#### F6: Input is validated server side
| Test case |                     Description                     | Result | 
|:---------:|:---------------------------------------------------:|:------:|
|    T1     |     Validate input on the server before saving      |   P    |
|    T2     |      	Reject invalid bids from being processed      |   P    |
|    T3     |    Ensure proper error messages for invalid data    |   P    |

#### F7: The list of auctions can be filtered on at least 3 attributes that are logical for the chosen service or product. I.e.:
- all trips in Twente
- all yellow sneakers
- all paintings that are worth over 3 million euros

| Test case |                 Description                 | Result | 
|:---------:|:-------------------------------------------:|:------:|
|    T1     |           Filter products by name           |   P    |
|    T2     |          Filter products by price           |   P    |
|    T3     | Filter products by statement "Can be a pet" |   P    |

#### F8: A list of bids updates in realtime if another user places a bid on the product or service
| Test case |               Description               | Result | 
|:---------:|:---------------------------------------:|:------:|
|    T1     |  Ensure bid list updates in real-time	  |   P    |

#### F9: Only users with a bidder role can place bids
| Test case |                      Description                      | Result | 
|:---------:|:-----------------------------------------------------:|:------:|
|    T1     |  Allow only users with a bidder role to submit bids   |   P    |
|    T2     |      Deny access to bidding for non-bidder roles      |   P    |

#### F10: Only users with an admin role can manage auctions
| Test case |                   Description                   | Result | 
|:---------:|:-----------------------------------------------:|:------:|
|    T1     |  Allow only admins to create or edit auctions   |   P    |
|    T2     |   Deny auction management for non-admin users   |   P    |

### Non-Functional Testing Results

#### NF1: The API returns valid JSON objects or arrays
| Test case |                       Description                        | Result | 
|:---------:|:--------------------------------------------------------:|:------:|
|    T1     |           Ensure valid JSON responses from API           |   P    |
|    T2     | Validate that returned JSON conforms to expected schema  |   P    |

#### NF2: The API returns appropriate/correct HTTP status codes
| Test case |                        Description                        | Result | 
|:---------:|:---------------------------------------------------------:|:------:|
|    T1     |           Return 200 OK for successful requests           |   P    |
|    T2     |      Return 404 Not Found for non-existent endpoints      |   P    |
|    T3     |    Return 500 Internal Server Error for server issues     |   P    |

#### NF3: The API uses the correct HTTP verbs for its operations
| Test case |              Description              | Result | 
|:---------:|:-------------------------------------:|:------:|
|    T1     |    Use GET for retrieving auctions    |   P    |
|    T2     | Use POST for submitting a new auction |   P    |
|    T3     |   Use PATCH for editing an auction    |   P    |
|    T3     |  Use DELETE for removing an auction   |   P    |

#### NF4: The API implements at least ReST level 3
| Test case |                   Description                   | Result | 
|:---------:|:-----------------------------------------------:|:------:|
|    T1     |  Hypermedia links are present in API responses  |   P    |

#### NF5: The API uses query parameters for filtering the result set
| Test case |                  Description                   | Result | 
|:---------:|:----------------------------------------------:|:------:|
|    T1     |          API filters auctions by name          |   P    |
|    T2     |         API filters auctions by price          |   P    |
|    T3     | API filters auctions by Can be a pet statement |   P    |

#### NF6: The API uses query parameters for sorting the result set
| Test case |                    Description                     | Result | 
|:---------:|:--------------------------------------------------:|:------:|
|    T1     | API sorts auctions by price (ascending/descending) |   F    |
|    T2     |       API sorts auctions by auction end time       |   F    |

#### NF7: The API uses query parameters for limiting the result set
| Test case |                       Description                       | Result | 
|:---------:|:-------------------------------------------------------:|:------:|
|    T1     |   API limits results to a specific number of products   |   F    |
|    T2     |      API supports pagination with limit and offset      |   F    |

#### NF8: Both the front-end and backend provide descriptive error messages: 'You already placed a bid', 'Bid already exists', 'User X not allowed to do ...'
| Test case |                      Description                       | Result | 
|:---------:|:------------------------------------------------------:|:------:|
|    T1     |   Show appropriate error messages for invalid inputs   |   P    |
|    T2     | Show specific error messages for bid submission issues |   P    |

#### NF9: Both front-end and backend apply the separation of concerns principle
| Test case |                        Description                         | Result | 
|:---------:|:----------------------------------------------------------:|:------:|
|    T1     |  Ensure clean separation of business logic and UI layers	  |   P    |

#### NF10: API endpoints have meaningfull good and bad weather tests
| Test case |                 Description                  | Result | 
|:---------:|:--------------------------------------------:|:------:|
|    T1     | Good and bad weather tests for API endpoints |   P    |

#### NF11: The traceability matrix, test plan and test report are documented in testing.md
| Test case |                Description                 | Result | 
|:---------:|:------------------------------------------:|:------:|
|    T1     | Document traceability matrix in testing.md |   P    |

#### NF12: After registration the user should be logged in. They should not have to log in again before being able to place a bid
| Test case |                  Description                  | Result | 
|:---------:|:---------------------------------------------:|:------:|
|    T1     | Automatically log in users after registration |   P    |

#### NF13: The front-end is build using Svelte (not Svelte Kit)
| Test case |                   Description                   | Result | 
|:---------:|:-----------------------------------------------:|:------:|
|    T1     | Ensure the front-end is structured using Svelte |   P    |

#### NF14: The backend is built using Node js with Express
| Test case |                      Description                       | Result | 
|:---------:|:------------------------------------------------------:|:------:|
|    T1     | Ensure the back-end is built using Node.js and Express |   P    |

#### NF15: The front-end is composed of (re-usable) components using a logical structure
| Test case |                    Description                    | Result | 
|:---------:|:-------------------------------------------------:|:------:|
|    T1     | Reusable Svelte components across the application |   P    |

#### NF16: The API uses JSON Web tokens for authorization
| Test case |                   Description                    | Result | 
|:---------:|:------------------------------------------------:|:------:|
|    T1     |   Ensure API uses JWT for secure authorization   |   P    |

#### NF17: The API uses Bcrypt for password hashing
| Test case |                     Description                      | Result | 
|:---------:|:----------------------------------------------------:|:------:|
|    T1     |   Passwords are hashed using bcrypt before storage   |   P    |

#### NF18: The system uses role-based authentication and authorization
| Test case |                       Description                       | Result | 
|:---------:|:-------------------------------------------------------:|:------:|
|    T1     |  Ensure users have appropriate role-based permissions   |   P    |

#### NF18: Users can have multiple roles
| Test case |                         Description                         | Result | 
|:---------:|:-----------------------------------------------------------:|:------:|
|    T1     |  Allow users to have multiple roles (e.g., admin, bidder)   |   P    |