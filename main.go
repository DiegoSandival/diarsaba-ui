package main

import (
	"log"
	"net/http"
)

func main() {
	fileServer := http.FileServer(http.Dir("."))

	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		if request.URL.Path != "/" {
			fileServer.ServeHTTP(writer, request)
			return
		}

		http.ServeFile(writer, request, "index.html")
	})

	log.Println("Servidor disponible en http://localhost:3000")
	if err := http.ListenAndServe(":3000", nil); err != nil {
		log.Fatal(err)
	}
}
