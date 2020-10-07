// ------------------------------------------Paquetes E Imports---------------------------------------------------------

	package main

	import (
		"fmt"
		"log"
		"net/http"
	)

// ------------------------------------------------Principal------------------------------------------------------------

	func main() {

		// Variables
		var PuertoDireccion string
		var SitioWeb http.Handler
		var AvisoError error

		// Asignacion
		PuertoDireccion = ":9998"
		SitioWeb = http.FileServer(http.Dir("./Frontend"))

		// Rutas
		http.Handle("/", SitioWeb)

		// Mensaje De Confirmación
		fmt.Println("Servidor Escuchando En Puerto" + PuertoDireccion)

		// Listening Server
		AvisoError = http.ListenAndServe(PuertoDireccion, nil)

		// Verificar Error En El Servidor
		if AvisoError != nil {

			log.Fatal("Error: ", AvisoError)

		}

	}