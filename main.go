package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	addr := ":8081"

	e.Static("/assets", "dist/assets")
	e.File("/*", "dist/index.html")
	e.Use(middleware.GzipWithConfig(middleware.GzipConfig{
		Level: 9,
	}))

	e.Use(middleware.Logger())
	e.Logger.Fatal(e.Start(addr))
}
