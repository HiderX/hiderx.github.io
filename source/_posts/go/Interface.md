---
title: Interface
categories: Go
---

# Interface

## 多态

```go
package main

import "fmt"

type AnimalIF interface {
	Sleep()
	GetColor() string
	GetType() string
}

type Cat struct {
	color string
}

func (c *Cat) GetColor() string {
	return c.color
}

func (c *Cat) GetType() string {
	return "cat"
}

func (c *Cat) Sleep() {
	fmt.Println("Cat is Sleep")
}

type Dog struct {
	color string
}

func (d *Dog) Sleep() {
	fmt.Println("Dog is Sleep")
}

func (d *Dog) GetColor() string {
	return d.color
}

func (d *Dog) GetType() string {
	return "Dog"
}

func main() {
	var animal AnimalIF
	animal = &Cat{"Green"}
	animal.Sleep()
	animal = &Dog{"Red"}
	fmt.Println(animal.GetType())
	animal.Sleep()
}
```

## 嵌套

```go
package main

import "fmt"

type Flyer interface {
	fly()
}

type Swimmer interface {
	swim()
}
type FlyFish interface {
	Flyer
	Swimmer
}

type Fish struct {
}

func (fish Fish) fly() {
	fmt.Println("fly")
}

func (fish Fish) swim() {
	fmt.Println("swim")
}

func main() {
	var ff FlyFish
	ff = Fish{}
	ff.fly()
	ff.swim()
}
```