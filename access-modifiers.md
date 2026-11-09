Access Modifiers in TypeScript OOP

Introduction:
When working with classes, we may want some information to be accessible outside the class and other information to stay inside. TypeScript provides public, private, and protected to control this access. The readonly modifier serves a different purpose: it prevents reassignment.

Detailed Body:
A public property can be accessed inside its class, inside subclasses, and outside the class. Class members are public by default.

A private property can only be accessed inside the class that declares it. A protected property can be accessed inside that class and its subclasses.

class Student {
public name: string;
private marks: number;
protected school: string;

constructor(name: string, marks: number) {
this.name = name;
this.marks = marks;
this.school = "ABC School";
}

getMarks(): number {
return this.marks;
}
}

Here, name is public, so we can read it directly. Marks is private but the public getMarks() method provides a way to read it.
const student = new Student("Rahim", 85);

student.name;
student.getMarks();

The first expression gives "Rahim", and the second gives 85. Accessing student.marks directly would cause a TypeScript error.

A subclass can read the protected school property:
class CollegeStudent extends Student {
getSchool(): string {
return this.school;
}
}

Readonly prevents a property from being reassigned after initialization through its declaration or the declaring class’s constructor.

class Book {
readonly title: string = "Learning TypeScript";
}

const book = new Book();

book.title;

We can read title but assigning another title would cause a TypeScript error. These restrictions are checked by TypeScript. Readonly does not deeply freeze objects.

Conclusion:
Use public for members that outside code can access, private for internal details, and protected for subclass access. Use readonly when a property should not be reassigned.
