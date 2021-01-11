### Database schema

# Table: Users 

columns: 
id - integer 
bio - string 
date_of_birth - date
first_name - string  
last_name - string 
password - string

# Table: Posts 

columns: 
post_text - string 
date_posted - date
num_likes - integer
poster_id - integer  

# Table: Friends 

columns: 

requestor_id - integer 
requested_id - integer 
date_requested - date 
request_status - enum 

### Explination 

The 'users' table is fairly self-explanatory, with each user being a row in the table and the 'id' value given to each user being the primary key of the table (i.e. it is unique for each user) that is used to relate to the other two tables. The 'poster_id' column in the 'posts' table will be the 'id' of the posting user as taken from the 'users' table. Similarly, the 'requestor_id' and 'requested_id' columns of the 'friends' table, where a particular friend request is a row of the table, will be the 'id' of the users who sent and recieved the request (respectively) from the 'users' table. The 'request_status' column will have 3 possible values (something like 'pending', 'accepted', 'denied') that will store the status of the request and allow the front-end to eventually display the friend status appropriately (i.e. show a 'pending' request from the DB in the 'pending requests' page, and not display a 'denied' request at all).
