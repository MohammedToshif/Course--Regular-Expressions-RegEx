/*
what are Regular expression :-

=> Allows us to check a series of character for 'matches'
e.g => it allows us to check a form field to try and match a valid email address

=> it must have an @ symbol at a certain position

=> it must end in an extension like .com or .org or co.uk

=> regular expression allows us to check these kinds of things
*/


//-----(01) - Regular expression (like this)

/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/



//-----(02) - sample Regex pattern

// linnk => https://regex101.com/



//-----(03) - Character set

/*
[abc123]000     => a000(match = 0-4), c000( match = 5-9), 2000( match = 10-14), e000(no match), 1000(match = 15-19)

[^a]000  => not matched a000  //    b000 c000 1000
*/



//-----(04) - Ranges

/*
[a-zA-Z]inja    => (Ninja = 0-5), (ginja = 6-11), (Winja = 12-17), (zinja = 18-23), (ninja = 24-29)

*/



//-----(05) - Repeating character

/*

// +   => plus symbol se character repeating hoga counting m

1.) [0-9]+      => 0236958745256963 (matches = 0-16)


2.) [0-9]+      => 9261212612       (matches = 0-10)


3.) [0-9]{11} = 0-9 charcter length 11 hogi. {set length} => bascially use mobile number :

[0-9]{11} = 0926121261215636    result : 09261212612


4.) [a-z]{5}    => toshif ashrfi    result (0-5 - toshi),   (7-12 - ashrf)


5.) [a-z]{5,8}  => 5 se 8 tk character length match karega  => (toshif = 0-6 match) (ashrfi = 0-6 match) (pali = no match)


6.) [0-9]{5,}   => minimum 5 character, maximum infinity

*/
