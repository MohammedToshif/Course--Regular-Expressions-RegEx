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



//-----(06) - Meta characters

/*
    //      .* = any character

    \d  => match any digit character(same as [0-9])

    \w  => match any word character (a-z, A-Z, 0-9 and _'s)

    \s  => match a whitspace character (spaces, tabs, etc)

    \t  => match a tab character only


    d --    => matches the literal character, 'd'

    \d --   => matches any digit character


    prectice :-
    \d\s\w      => 5 b (match = 0-3)

    \d{3}\s\w{5}    => 123 tosif    (match = 0-9)
                    => 987 hello    (match = 10-19)
*/




//-----(07) - special character


/*
    '+'     => The one-or-more quantifier

    '\'     => The escape character

    '[]'    => The character set

    '[^]'   => The negate symbol in a character set

    '?'     => The zero-or-one quantifier (makes a preceding char optional)

    '.'     => Any character whatsover (except the newline character)

    '*'     => The 0-or-more qunatifier (a bit like +)


    // in prectice

    a[a-z]?     => (match = ag - 0-2)

    car.        => (. dot means type any character)
                => (match = cars - 0-4)

    .+          => type any string, character any length long        (toshif ashrfi 9261212612)


    a[a-z]*     => aabcdefghijklmnopqrstuvwxyz (match 0-27)

    a[a-z]*     => aa8 (match = 0-2 - aa)

*/



//-----(08) - starting & Ending patterns


/*
    ^[a-z]{5}$      => (hello 0-5)
          => basically its used in form field     
*/



//-----(09) - Alternate character


/*
    p|t     => (p or t m se koi ek character dene pr hi match karega)
     p|t = hello toshif from pali 
     match 1 = 6-7 = t
     match 2 = 18-19 = p

     (p|t)yre   => pyre (match 1 = 0-4 = pyre)
                        (group 1 = 0-1 = p)

                => tyre (match 1 = 0-4 = pyre)
                        (group 1 = 0-1 = p)     
                        
                        
    (pet|toy|crazy)? rabbit                
    match - (pat rabbit, toy rabbit craazy rabbit)
    
    not match - (hello rabbit)
*/



//-----(10) - Creating a Form(start Code Tour)
