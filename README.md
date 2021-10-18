# Alchemy Bootstrap Template

## Making a plan

### A. write tests
        * test that getCart function will return the correct cart if it exists
        * test that getCart will return empty array if it does not exist
        * test that addItem will increase quantity of correct item.id by one
        * test that addItem will make new item in shopping cart if it does not yet already exist
    
    2. make getCart function
    3. make addItem function
    4. create Event listener so that when button is clicked, addItem will getCart info and update
    
(bolded steps are mandatory, unbolded are for more advanced projects)

### B. Use form to create objects - building an admin page
    * make an admin page with a form that allows us to add products to our list of products
    * Taking items from local storage
    
    1. create exportable function that will get the products from local storage using localStorage.getItem('PRODUCTS')
        - import data
        - create let local storage products
        - create if/else statement
            - if there are no products in local storage, seed the data (aka seed sites are pages that search engines start on)
            - stringify data, setItem('PRODUCTS', your jsonstring const), and set equal local storage products to your item OR you can do return lsProducts || items; (which means that you would either return lsProducts, or if it does not exist, then items)

    2. Create Admin form page using HTML 
        - use labels for each section
        - correct input type
        - match name with input purpose

    3. TDD
        - check if your addProduct function adds product to product array
            - create new let = getProducts(); (make sure to import)
            - set new const newProduct = { insert new product information aka new mochi with id that does not yet exist}
            - addProduct(newProduct); to check for addProduct function
            - set let variable to getProducts();
            - expect.equal(actual, expected);
    
    4. Now write your addProduct(newItem) function:
        <!-- a. GET -->
            * let products = getProducts();
        <!-- b. MODIFY -->
            * push products to array
        <!-- c. SET -->
            * let string = stringify LS
            * set item in LS
            
    

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass