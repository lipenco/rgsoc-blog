--- 
title: Coffescript - JavaScript for Rubyists
---


Programming languages is like songs, we like the one we know. 

There is one reson why coffessscript is so beutiful. It was ispired by Ruby language. It is amazing how some of its' idions make so much sense.

No more semicolons, optional parenthasis and curly braces, no comas, white space sensitive - these are only begigning of benefit coffescript has to offer.


Here are the 8 undespitable resons to love coffeescript:



#### 1. Vars are long gone

Ugliness if JS:

    var count, increment

    var increment = function() {
      var total;
      count += 1;
      return total = "CoffeScript is " + count + "better than pure JS"
    }

Beuty of CoffeeScript

    count

    increment ->
      count += 1
      total = "CoffeScript is " + count + "better than pure JS"



#### 2. Imlicit returns, just like in ruby.

beuty of CoffeeScript

    love -> 
      console.log "I <3 CoffeeScript"


uglynesss of JavaScript:


    var eat = function() {
      return console.log("I <3 Javascript only a little bit");
    }


#### 3. CoffeeScript allow you use defoult options, even though it looks weird.

CoffeScript:

    love = (options {}) ->

Javascrip:
    
    var love = functions(options) {
      if (options == null) {
        options = {};
      }
    };


#### 4. CoffeeScript serves spats.


Javascrip:

     var perosn;

     person = {
       name: "Magda"
       addDislikesAboutJs: functions() {
         var arg = [].slice.call(arguments);
         return [].push.apply(this.dislakes, args);
       }
     };

CoffeScript:
     
     person = 
        name: "Magda"
        addDislikesAboutJs: (args...) ->
          @dislakes.push args ...



#### 5. Flow Control as beutifull and operators (and, or, is)


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

Coffescript has somthing similar to Active Support’s try method:

      player.getLife()?.play()


#### 7. String Interpolations

So rubiest, it doesn't happen in pure JS:

       "Hey, #{name} have a good day!!"  


#### 8. Beuty of loops

Again, CoffeeScript comes to the rescue, with a beautiful syntax:

      for name in ["Roger", "Roderick", "Brian"] alert "Release #{name}"
      
If you need the current iteration index, just pass an extra argument:

      for name, i in ["Roger the pickpocket", "Roderick the robber"] alert "#{i} - Release #{name}"
      
   

