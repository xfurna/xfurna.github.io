---
title: "On Python"
date: 2020-09-19T12:14:34+06:00
description: "Python- a superposition of compiled and interpreted language."
author: "Archit Dwivedi"
type: "post"
---

Many times programmers new to python find the idea of python bieng an interpreted language very unconvincing. It's that mysterious `.pyc` files and `__pycache__` directory that gets generated as they run their script that seed their confusion.

Python is a high-level language. Simply put, unlike compiled language, in case of python, the source code does not get converted into an object code (followed by linking in case of compiled languages). Python code directly spits out the results hence bypassing the conversion to the object code. Complexly put, python, despite being an interpreted language, the `.py` source code first gets converted to `.pyc` bytecode. This python bytcode contains a set of instructions for python’s virtual machine to execute. Quoting Python’s documentations-

> Python is an interpreted language, as opposed to a compiled one, though the distinction can be blurry because of the presence of the bytecode compiler. This means that source files can be run directly without explicitly creating an executable which is then run.

The purpose of `.pyc` (python bytecode) is completely different from that of the binary code of any compiled language. In the case of compiled languages, this generated binary code is then directly run by the machine. One noteworthy fact about the binary code is that they are personalised to the machine which they were compiled on. A different machine with different hardware would not necessarily generate exactly the same binary.

Many times these `.pyc` files are represented as some faster version of the source code (which is true in some sense) while they are more like a small cog in the process of execution of a python program, that will be carried forward by python’s virtual machine to make your source code do its thing. 

## Python Virtual Machine (PVM)
If you ask me, what is python's virtual machine? I would direct you to this [brilliant answer](https://stackoverflow.com/a/2998544/11260811) I came across on StackOverflow. Here’s a snippet from the same-

> This popular meme is incorrect, or, rather, constructed upon a misunderstanding of (natural) language levels: a similar mistake would be to say "the Bible is a hardcover book". Let me explain that simile...
>
> "The Bible" is "a book" in the sense of being a **class** of (actual, physical objects identified as) books; the books identified as "copies of the Bible" are supposed to have something fundamental in common (the contents, although even those can be in different languages, with different acceptable translations, levels of footnotes and other annotations) -- however, those books are perfectly well allowed to differ in a myriad of aspects that are *not* considered fundamental -- kind of binding, the colour of binding, font(s) used in the printing, illustrations if any, wide writable margins or not, numbers and kinds of builtin bookmarks, and so on, and so forth.
>
> It's quite possible that a *typical* printing of the Bible would indeed be in hardcover binding -- after all, it's a book that's typically meant to be read over and over, bookmarked at several places, thumbed through looking for given chapter-and-verse pointers, etc, etc, and a good hardcover binding can make a given copy last longer under such use. However, these are mundane (practical) issues that cannot be used to determine whether a given actual book object is a copy of the Bible or not: paperback printings are perfectly possible!
>
> Similarly, Python is "a language" in the sense of defining a class of *language* **implementations** which must all be similar in some fundamental respects (syntax, most semantics except those parts of those where they're explicitly allowed to differ) but are fully allowed to differ in just about every "implementation" detail -- including how they deal with the source files they're given, whether they compile the sources to some lower-level forms (and, if so, which form -- and whether they save such compiled forms, to disk or elsewhere), how they execute said forms, and so forth.
>
> The classical implementation, CPython, is often called just "Python" for short -- but it's just one of several production-quality implementations, side by side with Microsoft's IronPython (which compiles to CLR codes, i.e., ".NET"), Jython (which compiles to JVM codes), PyPy (which is written in Python itself and can compile to a huge variety of "back-end" forms including "just-in-time" generated machine language). They're all Python (=="implementations of the Python language") just like many superficially different book objects can all be Bibles (==" copies of The Bible").
>
> If you're interested in CPython specifically: it compiles the source files into a Python-specific lower-level form (known as "bytecode"), does so automatically when needed (when there is no bytecode file corresponding to a source file, or the bytecode file is older than the source or compiled by a different Python version), usually saves the bytecode files to disk (to avoid recompiling them in the future). OTOH IronPython will typically compile to CLR codes (saving them to disk or not, depending) and Jython to JVM codes (saving them to disk or not -- it will use the .class extension if it does save them).
> These lower-level forms are then executed by appropriate "virtual machines" also known as "interpreters" -- the CPython VM, the .Net runtime, the Java VM (aka JVM), as appropriate.

This should clear most of it.

One may argue that even python implementations need the source code to be compiled to bytecode first then why is it called an interpreted language? 

Yes, every python implementation made till date compiles the source code to some low-level form before interpretation. But unlike compiled languages, that compilation into bytecode is no way in machine language and cannot be directly interpreted by the CPU.

## CPython

Let’s study CPython virtual machine in particular. CPython is python implementation in C language. The interpretation in CPython VM occurs on a stack data structure. It uses three types of stacks for this purpose.

- **Call Stack:** Each element in this stack is referred to as ‘the frames’. Each frame corresponds to one function call within the program. Whenever a function is called, a frame corresponding to that call is pushed into the stack. Likewise, whenever a function call returns, a frame is popped off the stack. Within each frame (function call) there exist two more stacks namely- evaluation stack and block stack.
- **Evaluation Stack/Data Stack:** This is the executive stack where things are pushed, manipulated and finally evaluated value is popped off.
- **Block Stack:** This stack keeps a track of control structure like loops, if, else, try, except, etc. It tells the interpreter which block of code is under consideration.

For illustrating the whole process, suppose the flow of control reaches some function `test_fuction(var, 1)`. On translation to bytecode, it would have four instruction against that-

- `LOAD_NAME` instruction: It observes the encounter with the aforementioned function and directs pushing of the `test_function` function object into the evaluation stack. In our function, there are two arguments. One is a variable while other is a constant. As the control meets these arguments, it filters the variables from the constants and pushes them onto the evaluation stack. ‘
- `LOAD_CONST` instruction: `LOAD_NAME` already has the instruction to push variable arguments into the evaluation stack, the `LOAD_CONST` instruction takes care of the rest literal arguments by making them on the stack.
- `CALL_FUNCTION` instruction: It contains information like how many positional arguments to pop so that function object comes at the top.

> For functions involving keyword arguments, a different instruction `CALL_FUNCTION_KW` is used, but with a similar principle of operation, and a third instruction, `CALL_FUNCTION_EX`, is used for function calls that involve argument unpacking with the * or ** operators.

---

The content of this post has been extensively borrowed from my personal notes. Notes are personalised. I might have missed some essentials here. Therefore, I highly recommend reading the references provided below.

---

## References

- https://opensource.com/article/18/4/introduction-python-bytecode
- http://net-informations.com/python/iq/interpreted.htm
- https://kb.iu.edu/d/agsz
- https://towardsdatascience.com/understanding-python-bytecode-e7edaae8734d
