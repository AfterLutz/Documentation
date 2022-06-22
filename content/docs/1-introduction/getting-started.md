---
title: "Getting Started"
metaTitle: "Get Started with Akkatecture!"
metaDescription: "Get Started with Akkatecture!"
lesson: 1
chapter: 1
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01/07/2018"
category: "akkatecture"
type: "doc"
tags:
    - getting-started
    - akkatecture
    - csharp
    - dotnet
showGithubEditLink: false
---

<img src="/logos/main-branding.svg?sanitize=true" width="100%" height="200" />
<div align="center">
  <img src="https://img.shields.io/nuget/v/Akkatecture.svg?style=flat" />
</div>


### Welcome to Akkatecture

Adding Akkatecture as a dependency is like installing any other NuGet package in your .net core application. All you need to do is the following:

```csharp
//Add the Akkatecture package to your project named FirstAkkatectureProject.
PM> Install-Package Akkatecture -ProjectName FirstAkkatectureProject
```
Once you have done that you can start designing your domain that can allow you to do something like what is shown below:

```csharp
//Create actor system
var system = ActorSystem.Create("useraccount-example");

//Create supervising aggregate manager for UserAccount aggregate root actors
var aggregateManager = system.ActorOf(Props.Create(() => new UserAccountAggregateManager()));

//Build create user account aggregate command with name "foo bar"
var aggregateId = UserAccountId.New;
var createUserAccountCommand = new CreateUserAccountCommand(aggregateId, "foo bar");

//Send the command to create the aggregate
aggregateManager.Tell(createUserAccountCommand);
```
> The above example is part of the Akkatecture simple example [project](https://github.com/AfterLutz/Akkatecture/tree/master/examples/simple), pull [the
code](https://github.com/AfterLutz/Akkatecture/blob/master/examples/simple/Akkatecture.Examples.Application/Program.cs#L36) and give it a run to see how it works.

Akkatecture also ships with a companion package for clustering called `Akkatecture.Clustering`. Go to the [clustering documentation](/docs/clustering) to learn more about it.

Be sure to also go through our [basic concepts documentation](/docs/primitives) and the [walkthrough](/docs/walkthrough-introduction). If you have any suggestions for improvements for Akkatecture's documentation, please visit the [documentation repository](https://github.com/Akkatecture/Documentation) and submit us a pull request.
