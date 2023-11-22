package main

import (
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	addr := ":" + os.Getenv("PORT")

	e.Static("/assets", "public/assets")
	e.File("/*", "public/index.html")

	e.Use(middleware.Gzip())
	e.Use(middleware.Logger())

	e.Logger.Fatal(e.Start(addr))
}
