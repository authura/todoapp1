# todoapp1

Simple Todo list app

    Features:
        - Add input to text form and submit
        - text input gets added to Task list
        - Each list element includes a button to edit text and save edited text, and another button to remove list element

    Planned features:
        - store tasks to local storage so they load on refresh

    What I learned:
        - create DOM elements with Javascript
        - append and change DOM elements
        - delete DOM elements
        - override default submit action
        - clear text field after submission
        - use various event listeners and how they function

    Questions I acquired through making this app:
        - Why does setting the attribute of the input to "readonly" once omit the actual text field and just output the block with no text?
            (My theory is that by setting it to readonly, it makes the block readonly but doesn't affect the text, 
            and after setting it twice it outputs both the block and the text value as "readonly" elements. Probably dead wrong but that's JS for you)




Notes:

    Why submit input types are preferred to buttons w/ input forms:
        - Click events only respond to the actual clicking of the button
        - Submit inputs can be activated either by clicking the button or by typing ENTER after filling in the field