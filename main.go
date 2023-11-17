package main

import (
	"net/http"

	_ "github.com/compliance-framework/portal/statik"
	"github.com/labstack/echo"
	"github.com/rakyll/statik/fs"
)

func main() {
	e := echo.New()
	addr := ":8080"

	statikFS, err := fs.New()
	if err != nil {
		e.Logger.Fatal(err)
	}

	h := http.FileServer(statikFS)

	e.GET("/*", echo.WrapHandler(http.StripPrefix("/", h)))

	e.Logger.Fatal(e.Start(addr))
}
