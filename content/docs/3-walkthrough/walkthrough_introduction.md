---
title: "Walkthrough Introduction"
metaTitle: "Get Started with Akkatecture!"
metaDescription: "Get Started with Akkatecture!"
lesson: 1
chapter: 3
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01/07/2018"
category: "akkatecture"
type: "doc"
tags:
    - walkthrough
    - akkatecture
    - introduction
    - csharp
    - dotnet
---
This walkthrough is designed to get you familiar with Akkatecture, akka.net, cqrs and event sourcing, and a few patterns that come with that. The walkthrough is in 'tutorial' style and requires your attention in order to get the most of it. The walkthrough will cover most of what akkatecture has to offer. What will follow is a brief outline of a task that is based on some imaginary business scenario, and we will walkthrough each step defining models and domain entities, while explaining how they interact with each other.

> having *some* knowledge of akka, cqrs and event sourcing is highly recommended to fully get the most out of the walkthrough.

The walkthrough will cover:

- Modelling a simple domain.
- Designing an aggregate root.
- Implementing commands and command handlers.
- Reasoning about events and aggregate state.
- Creating domain event subscribers.
- Building an aggregate saga.
- Writing a simple client application.

# Let Us Begin
The task is for you to try and model a bank that allows you to transfer money from one account to another account. The bank has their own arbitrary business rules that you have to codify. Below is the task written out for you, try to spot out each requirement as you read the task's description.

**Task** - An investor with huge pockets wants to start her own bank. She wants to open it in Europe and wants to allow customers to open accounts for free with a non-negative starting balance. The bank does not allow bank overdrafts, or negative account balances. The bank wants to allow customers to transfer money between accounts within the bank. The transaction fee for a successful money transfer is €0.25. The minimum amount of money allowed to transfer is €1.00. Which means that the minimum amount of money allowed to exit a bank account is €1.25. The bank fee is flat regardless of the amount of money being transferred. The bank would like to keep track of how much money it has gained as revenue as a result of the transaction fees.

In the walkthrough we will implement this bank together step by step starting with the aggregate. You will need to make an empty `Walkthrough.sln` solution that will hold two projects, `Domain` and `Application`. Add Akkatecture as a dependancy to `Domain` and add `Domain` as a project reference to `Application`. Your folder structure may look like this:

```
Walkthrough/
├── Walkthrough.sln
├── Domain/
│   └── Domain.csproj
└── Application/
    ├── Application.csproj
    └── Program.cs
```

Now that we have done the project init, Let's begin with designing your first aggregate.

> The full working example that completes the walkthrough can be found on the projects GitHub over [here](https://github.com/Akkatecture/Walkthrough).

[Begin →](/docs/your-first-aggregate)
