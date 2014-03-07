--- 
title: Coffescript - JavaScript for Rubyists
---



Programming languages are like songs, we like the ones we know. If your know Ruby you are probably picky about syntax and beauty of the language. This is why you will be most likely tempted to try Coffeescript -  a language that compiles into JavaScript. 

It embraces Ruby's simplicity, readability and even some idioms.

No semicolons, no comas, optional parenthesis and curly braces and yes, it is still just old JavaScript.


### Here are the 8 indisputable reasons to love Coffeescript:



#### 1. Vars are long gone

You don't need to declare your variables, you can also replace a word "function" with ->

ugliness of JS:

    var count, increment

    var increment = function() {
      var total;
      count += 1;
      return total = "CoffeeScript is " + count + "better than pure JS"
    }

beauty of CoffeeScript:

    count

    increment ->
      count += 1
      total = "CoffeeScript is " + count + "better than pure JS"



#### 2. Implicit returns, just like in ruby.

beauty of CoffeeScript:

    love -> 
      console.log "I <3 CoffeeScript"


ugliness  of JavaScript:


    var eat = function() {
      return console.log("I <3 Javascript only a little bit");
    }


#### 3. CoffeeScript allows to use defoult options.

CoffeeScript:

    love = (options {}) ->

Javascrip:
    
    var love = functions(options) {
      if (options == null) {
        options = {};
      }
    };


#### 4. CoffeeScript serves spats.

CoffeeScript provides splats ..., making variable numbers of arguments a little bit more flexible.


Javascrip:

     var perosn;

     person = {
       name: "Magda"
       addDislikesAboutJs: functions() {
         var arg = [].slice.call(arguments);
         return [].push.apply(this.dislakes, args);
       }
     };

CoffeeScript:
     
     person = 
        name: "Magda"
        addDislikesAboutJs: (args...) ->
          @dislakes.push args ...



#### 5. Flow Control as beautiful and operators  (and, or, is)


      if true == true
        "Coffee is ok"

      if true != true then "Weird"

      if 1 > 0 then "Ok" else "NEGATIVE"

      alert "It's cold!" if heat < 10

      if not true then "Panic"

      unless true
        "Panic"

      if true is 1
        "type coercion fail"

      if 10 == "+10" then "type coercion fail"


#### 6.  Existencial operators

CoffeeScript existential operator ? returns true unless a variable is null or undefined, similar to Ruby’s nil?:


       praise if brian?

You can also use it in place of the || operator:   

      velocity = southern ? 40

Coffeescript has somthing similar to Active Support’s try method:

      player.getLife()?.play()


#### 7. String Interpolations

So rubiest, it doesn't happen in pure JS:

       "Hey, #{name} have a good day!!"  


#### 8. Beauty of loops and comprehensions

Most of the loops you'll write in CoffeeScript will be comprehensions over arrays and objects. Comprehensions replace (and compile into) "for loops", with array index. Unlike "for loops" in JavaScript, array comprehensions are expressions, and can be returned and assigned.

Example with index:

      for name, i in ["Roger the pickpocket", "Roderick the robber"] alert "#{i} - Release #{name}"


Example with key, value pairs:

      yearsOld = max: 10, ida: 9, tim: 11

      ages = for child, age of yearsOld
        "#{child} is #{age}"



CoffeeScript allows you to write JavaScript in a concise, elegant fashion, there is not reason to make yourself unhappy with pure JS.
      

     
      
   

