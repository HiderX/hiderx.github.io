---
title: golang构造函数
categories: Go
---

# golang构造函数

```go
package main

import "fmt"

type Person struct {
	name string
	age  int
}

func NewPerson(name string, age int) (*Person, error) {
	if name == "" {
		return nil, fmt.Errorf("name is null")
	}
	if age < 0 {
		return nil, fmt.Errorf("age must be above 0")
	}
	return &Person{name, age}, nil
}

func main() {
	per, err := NewPerson("tom", -1)

	if err == nil {
		fmt.Println(per)
	} else {
		fmt.Println(err)
	}
}
```

