{
    interface MyClass {
        val: number;
    }

    interface MyClassConstructor {
        new(val: number): MyClass;  // newable
        (val: number): MyClass; // callable
    }

    const MyClass: MyClassConstructor = function (this: MyClass | void, val: number) {
        if (!(this instanceof MyClass)) {
            return new MyClass(val);
        } else {
            this!.val = val;
        }
    } as MyClassConstructor;

    var a = new MyClass(5); // MyClass
    var b = MyClass(5); // also MyClass

    console.log(b)
}