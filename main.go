package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()
	addr := ":8081"

	// h := http.FileServer(statikFS)

	// e.GET("/", echo.WrapHandler(http.StripPrefix("/", h)))
	e.Static("/", "dist")
	e.Use(middleware.GzipWithConfig(middleware.GzipConfig{
		Level: 5,
	}))

	e.Use(middleware.Logger())
	e.Logger.Fatal(e.Start(addr))
}
