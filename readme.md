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
