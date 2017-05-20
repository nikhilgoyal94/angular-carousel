# File Structure #
Angular Login  
&nbsp;&nbsp;&nbsp;&nbsp;|  
&nbsp;&nbsp;&nbsp;&nbsp;|-- directives/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- my-carousel/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- carousel.js  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- carousel.tpl.html  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- carousel.css  

# Directive - Carousel #
Files for the directive are placed in the folder **directives/my-carousel**. These files should be present in the folder
structure of the project. If you have some other place where you have all your directives, you can simply copy only the
**my-carousel/**folder present in the **directives/** folder or otherwise, you can have this in the same folder
 structure as it is now. If you change the folder to some other folder, you need to change the path in the **directives/my-carousel/carousel.js** 
 accordingly.

# How to use #
This project itself contains a sample application for the use of this carousel module.
1. Just include **carousel.js** and **carousel.less** in the html file.
2. In the controller of the application page, inject module **directives.mycarousel** as done in the file **app.js**.
3. Simply use **<my-carousel>** as you use any other DOM Element.

# Parameters #
Here is the list of parameters which can be passed to the element.

1. **carousel-data**: Required. This will be an array of JSON objects with **src** as an required property.  
2. **should-show-caption**: Optional. It will be boolean. If set to true, the captions will be shown along with the slider.
These caption should also be defined with the JSON objects under **caption** property. Default value is false.  
3. **show-slide-number**: Optional. It will be boolean. If set to true, it will show the slide number at the left top of the
slider. Default value is false.  
4. **show-navigators**: Optional. It will be boolean. If set to true, it will show the left and right arrow key to move the
slider manually. Default value is true.  
5. **show-bullets**: Optional. It will be boolean. If set to true, it will show the bullets down the slider so as to facilitate
the easy navigation or jump from one slide to another. Default value is true.  
6. **auto-loop**: Optional. It will be boolean. If set to true, it will automatically change the slider images. Default value is
true.  
7. **auto-loop-timer**: Optional. It will be number. It denotes the time of the slider in millisecond. If the **auto-loop** is true,
the next image will be visible in the time denoted by this variable. Default value is 3000ms.

# Further Improvements #
1. New sliding designs to be added. Currently only fade is available.  


# Issues #
Feel free to report any issues if you find.  
  
Enjoy with this simple directive. :-)
