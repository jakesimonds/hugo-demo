+++
title = 'Things I Learned In Computer School: Pt 1'
date = 2025-03-23T17:02:11-04:00
draft = false
+++



(this is an ongoing series when I think of it of things I learned getting a degree in computer science that are maybe relevant to regular people while I still have a memory of what it was like to be a regular person)

## It's VERY easy to write a program that would run until the sun explodes (10 lines)


```
def fibonacci_sum(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fibonacci_sum(n-1) + fibonacci_sum(n-2)

if __name__ == "__main__":
    print("Calculating Fibonacci sequence for a Googol (don't hold your breath)...")

    result = fibonacci_sum(10**100)
    print(f"Result: {result}")  
```

If you paste this code into a python file and run it your computer will get to work, and just never finish because the problem is basically impossible to solve. It's not that any one thing I'm asking the computer to do is intractable. It's just the problem is too big. 

It's the computer equivalent of stalling out a car with a manual transmission. Or burning a cake. Or putting an ikea chair together but getting some critical orientation wrong when connecting things. It's just ... oops no good can't do that! 

Before computer school I was vaguely aware of things like bitcoin using lots of energy, but I always imagined for things like that that were so expensive they must also involve giant codebases and years of human work. 

Not necessarily! 

(And as a side-note, I don't actually know what would happen if you ran this code on a laptop. What I was TRYING to do was write a simple program that would run 'forever'. But actually I imagine if you ran this you'd run out of memory at some point, or some limitation in python would crash things.)

## People Have ALWAYS Hated Computers (And to Love Computers is to have a Love/Hate Relationship with Computers)

A historical example: There was an Important Computer called the  [DEC PDP-11](https://en.wikipedia.org/wiki/PDP-11). Those acronyms stand for: 

Digital Equipment Corporation Programmed Data Processor. 

No mention of 'compter'. Why? Because even back then (maybe especially back then) 'computer' was a dirty word that people associated with incredibly expensive, hard to work, frustrating machines. So if you wanted to sell computers, or get your boss to buy you a computer, it helped to not call it computer!

A personal example: My worst day at work, or in school, in terms of what it feels like qualitatively is really not that different from when I was a kid and I couldn't get a printer to connect. Or video editing in 2007. 

I'm doing very different things. Much more sophisticated things (if I can pat myself on the back). And, per hour-of-challenging-work I think I'm a lot more patient and even-keeled now as someone professionally decent with computers. But even so you make it up in volume. And frustration is frustrating.  


