// The Facade pattern concept

class SubSystemClassA {
    // A hypothetically complicated class
    method(): string {
        return "A"
    }
}

class SubSystemClassB {
    // A hypothetically complicated class
    method(value: any): any {
        return value
    }
}

class SubSystemClassC {
    // A hypothetically complicated class
    method(value: any): any {
        return value
    }
}

class Facade {
    // A simplified facade offering the services of subsystems
    sub_system_class_a(): any {
        // Uses the subsystems method"
        return new SubSystemClassA().method()
    }

    sub_system_class_b(value: any): any {
        // Uses the subsystems method"
        return new SubSystemClassB().method(value)
    }

    sub_system_class_c(value: any): any {
        // Uses the subsystems method"
        return new SubSystemClassC().method(value)
    }
}

// The Client
// Calling potentially complicated subsystems directly
console.log(new SubSystemClassA().method())
console.log(new SubSystemClassB().method("B"))
console.log(new SubSystemClassC().method({ "C": [1, 2, 3] }))

// or using the simplified facade instead
const FACADE = new Facade()
console.log(FACADE.sub_system_class_a())
console.log(FACADE.sub_system_class_b("B"))
console.log(FACADE.sub_system_class_c({ "C": [1, 2, 3] }))