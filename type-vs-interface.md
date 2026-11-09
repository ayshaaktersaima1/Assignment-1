Type Aliases vs Interfaces in TypeScript:

Introduction:
When learning TypeScript, it is easy to get confused between type aliases and interfaces. Both can describe an objects properties and their types. However, they have some differences that help us decide when to use each one.

Detailed Body:
An interface describes the structure an object should follow. A type alias gives a name to a type. Unlike interfaces, type aliases can directly represent primitive types, unions and tuples.

For example, we can use a type alias to define the allowed roles and an interface to describe a user:

type Role = "admin" | "member";
interface User {
name: string;
role: Role;
}

Here, role can only be "admin" or "member". Both interfaces and object type aliases support optional and readonly properties.

We can also build on existing object types. An interface uses extends, while a type alias can use an intersection with &:
interface Employee extends User {
salary: number;
}

type Student = User & {
roll: number;
};

Both new types include the properties from User and add another property.
Another difference is declaration merging. Compatible interfaces with the same name in the same scope combine automatically:
interface Profile {
name: string;
}

interface Profile {
age: number;
}

Now, Profile requires both name and age. Type aliases cannot be redeclared this way.

Conclusion:
We can use an interface to describe an object, especially when we may want to add properties through declaration merging. A type alias is useful for unions, tuples and other type expressions. For simple objects, both work well so we can follow the style already used in the project.
