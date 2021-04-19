"use strict";
{
    const MyClass = function (val) {
        if (!(this instanceof MyClass)) {
            return new MyClass(val);
        }
        else {
            this.val = val;
        }
    };
    var a = new MyClass(5); // MyClass
    var b = MyClass(5); // also MyClass
    console.log(b);
}
