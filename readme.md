<h1 align="left">What are some differences between interfaces and types in TypeScript?</h1>

###

<h2 align="left">Interfaces</h2>

###

<h3 align="left">Interface is primarily used for object shape in Api's.</h3>

###

<p align="left">interface User{<br>   name: string;<br>   age: number;<br>}</p>

###

<h3 align="left">Interface can be extended by children Class.</h3>

###

<p align="left">interface Person{<br>name: string;<br>age: number;<br>}</p>

###

<h3 align="left">Declaration merging</h3>

###

<p align="left">interface User{<br>hasCar: boolean;<br>}<br><br>interface User{<br>isQualified: boolean;<br>}</p>

###

<h2 align="left">Type</h2>

###

<h3 align="left">type use for union and intersection type declaration.</h3>

###

<p align="left">type NumberString = number | string;<br><br>type id = string | number</p>

###

<h3 align="left">type does not suppert merging.</h3>

###

<p align="left">type User{<br>name: string;<br>}<br><br>type User{<br>age: number; // not allowed<br>}</p>

###

<h3 align="left">Defining tuples</h3>

###

<p align="left">type NameAndAge = [string, number];</p>

###


<h1 align="left">Provide an example of using union and intersection types in TypeScript.</h1>

###

<h2 align="left">Union</h2>

###

<p align="left">If a type can be of multiple types then we use union "|". For example, a student id can be string or number, so it can ve written as,</p>

###

<p align="left">type Id = string | number;</p>

###

<h3 align="left">More examples:</h3>

###

<p align="left">function getSmallPet(): Fish | Bird; <br><br>Here the function return Fish or Bird, This is union type.</p>

###

<p align="left">function printStatusCode(code: string | number) {<br>  console.log(`My status code is ${code}.`)<br>}</p>

###

<p align="left">let myBoolean: string | boolean;<br><br>myBoolean = 'TRUE';  // string type<br>myBoolean = false;   // boolean type</p>

###

<p align="left">// This is a union of string literal types<br>type RPS = 'rock' | 'paper' | 'scissors' ;</p>

###

<p align="left">function roughAge(age: number | string): number | string {<br> return ...///<br>}</p>

###

<h2 align="left">Intersection</h2>

###

<h3 align="left">type intersection use as "&". This is used for intersection two or more type.</h3>

###

<p align="left">interface Student { <br>  student_id: number; <br>  name: string; <br>} <br>  <br>interface Teacher { <br>  Teacher_Id: number; <br>  teacher_name: string; <br>} <br>  <br>type intersected_type = Student & Teacher; <br> // the type intersected_type referse both Student and teacher .</p>

###

<h3 align="left">Suppose that you have three interfaces: BusinessPartner, Identity, and Contact.</h3>

###

<p align="left">interface BusinessPartner {<br>    name: string;<br>    credit: number;<br>}<br><br>interface Identity {<br>    id: number;<br>    name: string;<br>}<br><br>interface Contact {<br>    email: string;<br>    phone: string;<br>}</p>

###

<h3 align="left">The following defines two intersection types:</h3>

###

<p align="left">type Employee = Identity & Contact;<br>type Customer = BusinessPartner & Contact;</p>

###


<h1 align="left">How does TypeScript help in improving code quality and project maintainability?</h1>

###

<h3 align="left">Static type checking</h3>

###

<p align="left">Typescript checks the type in compile time. So it prevent errors in run time</p>

###

<h3 align="left">Easy to understand</h3>

###

<p align="left">Typescript type declaration makes developer to understand code easily.</p>

###

<h3 align="left">Better for teamwork</h3>

###

<p align="left">Large teams can work on different parts of a project with confidence, knowing TypeScript will catch incorrect usage.</p>

###

<h3 align="left">Reduce runtime error</h3>

###

<p align="left">As error checks in compile time in typescript, it reduce runtime errors.</p>

###

<h3 align="left">Supports Large-Scale Applications</h3>

###

<p align="left">Type safety across files and modules ensures long-term maintainability.</p>

###