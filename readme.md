# What are some differences between interfaces and types in TypeScript?

# Interfaces

1. Interface is primarily used for object shape in Api's.

interface User{
name: string;
age: number;

}

2. Interface can be extended by children Class.

interface Person{
name: string;
age: number;
}

interface Student extends interface{
id: number;
}

3. Declaration merge:a

interface User{
hasCar: boolean;
}

interface User{
isQualified: boolean;
}

# Type

1. type use for union and intersection type declaration.

type NumberString = number | string;

type id = string | number

2. type does not suppert merging.

type User{
name: string;
}

type User{
age: number; // not allowed
}

3. Defining tuples

type NameAndAge = [string, number];
