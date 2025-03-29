---
shortTitle: "Typescript Error Handling"
title: "Typescript Error Handling"
description: ""
author: "Nick Brodeur"
v0.1: "2025-03-03"
dateStarted: "2025-03-29"
lastUpdated: "2025-03-29"
image: {
	src: "",
	alt: ""
}
category: ""
draft: false
proofreaders: []
---

[Typescript](https://en.wikipedia.org/wiki/TypeScript) has a number of less-than-ideal features that I've run into consistently. These issues prompted me to research the subject and see if these problems were common, if there were common solutions for mitigating them. In this process, I discovered I had found common points of frustration for programmers of many languages, and that much of language design centers around these features.

For instance, one issue I ran into frequently (especially when using lots of packages), was effectively [error handling](<https://en.wikipedia.org/wiki/Exception_handling_(programming)>) when I don't know when or if a given function will throw an error. In typescript, this often leads of a mess of try/catch blocks with generic error handling that usually ends up swallowing a significant amount of the context, making programs harder to debug.

Here, I learned about how [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) (a compiled general-purpose language known for employing out-of-the-box rules that enforce strong safety practices; Rust programs, once compiled, usually work as expected) handles errors with an [enum](https://en.wikipedia.org/wiki/Enumerated_type) type, which forces developers to handle each and every error explicitly prior to providing the '[happy path](https://en.wikipedia.org/wiki/Happy_path)' of no errors. This pattern can be tedious, but it's extremely thorough, and it forces thoughtful scenario handling where typescript makes errors easy to ignore. What's most interesting to note is typescript has similar capabilities to Rust's enum with [discriminated unions](https://dev.to/darkmavis1980/what-are-typescript-discriminated-unions-5hbb). These are frequently used by developers for situations where you are expecting to have a set of mutually exclusive sets of data, but are unsure which you will have until runtime. For example, if you call a function that will attempt to fetch data for you, you won't know whether the fetch was successful or not until your program is running. If it was successful, you'll likely want to display the data that was fetched; but if it was unsuccessful, you'll likely want to just show a message that briefly describes what went wrong. In this case, you'll either have data of some expected format (success) or an error message (fail) - both will be in the same variable as potential options until you check.

So while Rust always uses types to manage scenarios like this, Typescript uses a throw, which cancels execution of the current path up the function call stack until it is caught in a try/catch block. If the thrown error is not caught by any try/catch block, the entire program will crash and stop executing.

This might not be so bad if try/catch blocks could look inside of the code it was running to infer the complete set of possible error types. This way, you could exhaustively manage all ways a set of code may fail. But instead, try/catch in typescript assumes ignorance, so regardless of what's inside, the returned error type will always be `unknown`. In this case, the best the developer can do is throw custom errors, and check if the error is of that type later. This works well for the most straightforward code blocks, but the larger the code gets, the harder it is to know which errors are thrown, so the harder it is to handle them.

Many people have thought about this problems like these and sought to resolve them structurally with packages. Since typescript is a powerful system[^powerfulTypes], as much as there are issues with specific aspects of the language, its customizability lends itself to the ability to shape how you program with it. Packages like [fp-ts](https://www.npmjs.com/package/fp-ts/) take heavy inspiration from functional languages like [haskell](https://en.wikipedia.org/wiki/Haskell). There are also many blog[^bp1] posts about hand-built solutions and package set-ups to improve safety and the developer experience.

[^powerfulTypes]: Powerful type systems can express many different kinds of types, where strong type systems have heavy constraints that can't be broken (as pointed out in [this comment](https://www.reddit.com/r/rust/comments/1ifurb2/comment/majb5b1/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)). Type system design is a balance between broadly constraining users for better safety while giving them the tools to make those decisions themselves. This conversation is still contentious as Rust increases adoption in the face of criticism from C & C++ developers who think expressiveness is important, and bugs resulting from poor type design is a skill issue rather than a system issue.

[^bp1]: https://blog.martijnarts.com/predictable-programming-2-making-typescript-more-like-rust/
