// ------------------------------------------Paquetes E Imports---------------------------------------------------------

	package main

	import (
		"bytes"
		"encoding/json"
		"fmt"
		"io/ioutil"
		"log"
		"net/http"
	)

// ------------------------------------------------Principal------------------------------------------------------------

	// Estructura Post Cadena Analizar
	type CadenaAnalizar struct {

		Cadena string

	}

	// Solicitar Analisis JS
	func AnalisisJS(w http.ResponseWriter, r *http.Request) {

		// Declaraciones

		// Cliente HTTP
		ClientHTTP := &http.Client{}

		// Decodificador Entrada
		var Decoder = json.NewDecoder(r.Body)

		// Cadena A Analizar
		var Cadena CadenaAnalizar

		// Verficar Si Hay Error
		Error := Decoder.Decode(&Cadena)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Al Codificar La Entrada: %v", Error)

		}

		// Json Para El Request
		JsonFormat, Error := json.Marshal(Cadena)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Al Convertir La Cadena En Json: %v", Error)

		}

		// Peticion NodeJs
		Peticion := "http://192.168.1.4:7776/Analisis"

		// Solicitar Peticion A NodeJs
		Req, Error := http.NewRequest("POST", Peticion, bytes.NewBuffer(JsonFormat))

		// Verificar Si Hay Errores
		if Error != nil {

			print("Error Creando Petición: %v", Error)

		}

		// Agregar Encabezados
		Req.Header.Add("Content-Type", "application/json")
		// Req.Header.Add("X-Hola-Mundo", "Ejemplo")

		// Respueta NodeJS
		Response, Error := ClientHTTP.Do(Req)

		// Verificcar Si Hay Error
		if Error != nil {

			print("Error Haciendo Petición: %v", Error)

		}

		// Cerrar Cuerpo Response
		defer Response.Body.Close()

		// Cuerpo De La Respuseta
		RespuestaCuerpo, Error := ioutil.ReadAll(Response.Body)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Leyendo Respuesta: %v", Error)

		}

		// Enviar Respuesta
		_, _ = fmt.Fprintf(w, "%s", RespuestaCuerpo)

	}

	// Solicitar Analisis Py
	func AnalisisPY(w http.ResponseWriter, r *http.Request) {

		// Declaraciones

		// Cliente HTTP
		ClientHTTP := &http.Client{}

		// Decodificador Entrada
		var Decoder = json.NewDecoder(r.Body)

		// Cadena A Analizar
		var Cadena CadenaAnalizar

		// Verficar Si Hay Error
		Error := Decoder.Decode(&Cadena)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Al Codificar La Entrada: %v", Error)

		}

		// Json Para El Request
		JsonFormat, Error := json.Marshal(Cadena)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Al Convertir La Cadena En Json: %v", Error)

		}

		// Peticion NodeJs
		Peticion := "http://192.168.1.4:8887/Analisis"

		// Solicitar Peticion A NodeJs
		Req, Error := http.NewRequest("POST", Peticion, bytes.NewBuffer(JsonFormat))

		// Verificar Si Hay Errores
		if Error != nil {

			print("Error Creando Petición: %v", Error)

		}

		// Agregar Encabezados
		Req.Header.Add("Content-Type", "application/json")
		// Req.Header.Add("X-Hola-Mundo", "Ejemplo")

		// Respueta NodeJS
		Response, Error := ClientHTTP.Do(Req)

		// Verificcar Si Hay Error
		if Error != nil {

			print("Error Haciendo Petición: %v", Error)

		}

		// Cerrar Cuerpo Response
		defer Response.Body.Close()

		// Cuerpo De La Respuseta
		RespuestaCuerpo, Error := ioutil.ReadAll(Response.Body)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Leyendo Respuesta: %v", Error)

		}

		// Enviar Respuesta
		_, _ = fmt.Fprintf(w, "%s", RespuestaCuerpo)

	}

	// Obtener Tokens JS
	func TokensJS(w http.ResponseWriter, r *http.Request) {

		// Declaraciones

		// Cliente HTTP
		ClientHTTP := &http.Client{}

		// Peticion NodeJs
		Peticion := "http://192.168.1.4:7776/Tokens"

		// Solicitar Peticion A NodeJs
		Req, Error := http.NewRequest("GET", Peticion, nil)

		// Verificar Si Hay Errores
		if Error != nil {

			print("Error Creando Petición: %v", Error)

		}

		// Agregar Encabezados
		Req.Header.Add("Content-Type", "application/json")
		// Req.Header.Add("X-Hola-Mundo", "Ejemplo")

		// Respueta NodeJS
		Response, Error := ClientHTTP.Do(Req)

		// Verificcar Si Hay Error
		if Error != nil {

			print("Error Haciendo Petición: %v", Error)

		}

		// Cerrar Cuerpo Response
		defer Response.Body.Close()

		// Cuerpo De La Respuseta
		RespuestaCuerpo, Error := ioutil.ReadAll(Response.Body)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Leyendo Respuesta: %v", Error)

		}

		// Enviar Respuesta
		_, _ = fmt.Fprintf(w, "%s", RespuestaCuerpo)

	}

	// Obtener Tokens PY
	func TokensPY(w http.ResponseWriter, r *http.Request) {

		// Declaraciones

		// Cliente HTTP
		ClientHTTP := &http.Client{}

		// Peticion NodeJs
		Peticion := "http://192.168.1.4:8887/Tokens"

		// Solicitar Peticion A NodeJs
		Req, Error := http.NewRequest("GET", Peticion, nil)

		// Verificar Si Hay Errores
		if Error != nil {

			print("Error Creando Petición: %v", Error)

		}

		// Agregar Encabezados
		Req.Header.Add("Content-Type", "application/json")
		// Req.Header.Add("X-Hola-Mundo", "Ejemplo")

		// Respueta NodeJS
		Response, Error := ClientHTTP.Do(Req)

		// Verificcar Si Hay Error
		if Error != nil {

			print("Error Haciendo Petición: %v", Error)

		}

		// Cerrar Cuerpo Response
		defer Response.Body.Close()

		// Cuerpo De La Respuseta
		RespuestaCuerpo, Error := ioutil.ReadAll(Response.Body)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Leyendo Respuesta: %v", Error)

		}

		// Enviar Respuesta
		_, _ = fmt.Fprintf(w, "%s", RespuestaCuerpo)

	}

	// Obtener Errores JS
	func ErroresJS(w http.ResponseWriter, r *http.Request) {

		// Declaraciones

		// Cliente HTTP
		ClientHTTP := &http.Client{}

		// Peticion NodeJs
		Peticion := "http://192.168.1.4:7776/Errores"

		// Solicitar Peticion A NodeJs
		Req, Error := http.NewRequest("GET", Peticion, nil)

		// Verificar Si Hay Errores
		if Error != nil {

			print("Error Creando Petición: %v", Error)

		}

		// Agregar Encabezados
		Req.Header.Add("Content-Type", "application/json")
		// Req.Header.Add("X-Hola-Mundo", "Ejemplo")

		// Respueta NodeJS
		Response, Error := ClientHTTP.Do(Req)

		// Verificcar Si Hay Error
		if Error != nil {

			print("Error Haciendo Petición: %v", Error)

		}

		// Cerrar Cuerpo Response
		defer Response.Body.Close()

		// Cuerpo De La Respuseta
		RespuestaCuerpo, Error := ioutil.ReadAll(Response.Body)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Leyendo Respuesta: %v", Error)

		}

		// Enviar Respuesta
		_, _ = fmt.Fprintf(w, "%s", RespuestaCuerpo)

	}

	// Obtener Errores PY
	func ErroresPY(w http.ResponseWriter, r *http.Request) {

		// Declaraciones

		// Cliente HTTP
		ClientHTTP := &http.Client{}

		// Peticion NodeJs
		Peticion := "http://192.168.1.4:8887/Errores"

		// Solicitar Peticion A NodeJs
		Req, Error := http.NewRequest("GET", Peticion, nil)

		// Verificar Si Hay Errores
		if Error != nil {

			print("Error Creando Petición: %v", Error)

		}

		// Agregar Encabezados
		Req.Header.Add("Content-Type", "application/json")
		// Req.Header.Add("X-Hola-Mundo", "Ejemplo")

		// Respueta NodeJS
		Response, Error := ClientHTTP.Do(Req)

		// Verificcar Si Hay Error
		if Error != nil {

			print("Error Haciendo Petición: %v", Error)

		}

		// Cerrar Cuerpo Response
		defer Response.Body.Close()

		// Cuerpo De La Respuseta
		RespuestaCuerpo, Error := ioutil.ReadAll(Response.Body)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Leyendo Respuesta: %v", Error)

		}

		// Enviar Respuesta
		_, _ = fmt.Fprintf(w, "%s", RespuestaCuerpo)

	}

	// Obtener Errores AST
	func ArbolJS(w http.ResponseWriter, r *http.Request) {

		// Declaraciones

		// Cliente HTTP
		ClientHTTP := &http.Client{}

		// Peticion NodeJs
		Peticion := "http://192.168.1.4:7776/AST"

		// Solicitar Peticion A NodeJs
		Req, Error := http.NewRequest("GET", Peticion, nil)

		// Verificar Si Hay Errores
		if Error != nil {

			print("Error Creando Petición: %v", Error)

		}

		// Agregar Encabezados
		Req.Header.Add("Content-Type", "application/json")
		// Req.Header.Add("X-Hola-Mundo", "Ejemplo")

		// Respueta NodeJS
		Response, Error := ClientHTTP.Do(Req)

		// Verificcar Si Hay Error
		if Error != nil {

			print("Error Haciendo Petición: %v", Error)

		}

		// Cerrar Cuerpo Response
		defer Response.Body.Close()

		// Cuerpo De La Respuseta
		RespuestaCuerpo, Error := ioutil.ReadAll(Response.Body)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Leyendo Respuesta: %v", Error)

		}

		// Enviar Respuesta
		_, _ = fmt.Fprintf(w, "%s", RespuestaCuerpo)

	}

	// Obtener Errores AST
	func ArbolPY(w http.ResponseWriter, r *http.Request) {

		// Declaraciones

		// Cliente HTTP
		ClientHTTP := &http.Client{}

		// Peticion NodeJs
		Peticion := "http://192.168.1.4:8887/AST"

		// Solicitar Peticion A NodeJs
		Req, Error := http.NewRequest("GET", Peticion, nil)

		// Verificar Si Hay Errores
		if Error != nil {

			print("Error Creando Petición: %v", Error)

		}

		// Agregar Encabezados
		Req.Header.Add("Content-Type", "application/json")
		// Req.Header.Add("X-Hola-Mundo", "Ejemplo")

		// Respueta NodeJS
		Response, Error := ClientHTTP.Do(Req)

		// Verificcar Si Hay Error
		if Error != nil {

			print("Error Haciendo Petición: %v", Error)

		}

		// Cerrar Cuerpo Response
		defer Response.Body.Close()

		// Cuerpo De La Respuseta
		RespuestaCuerpo, Error := ioutil.ReadAll(Response.Body)

		// Verificar Si Hay Error
		if Error != nil {

			print("Error Leyendo Respuesta: %v", Error)

		}

		// Enviar Respuesta
		_, _ = fmt.Fprintf(w, "%s", RespuestaCuerpo)

	}

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
		http.HandleFunc("/AnalisisJS", AnalisisJS)
		http.HandleFunc("/AnalisisPY", AnalisisPY)
		http.HandleFunc("/TokensJS", TokensJS)
		http.HandleFunc("/TokensPY", TokensPY)
		http.HandleFunc("/ErroresJS", ErroresJS)
		http.HandleFunc("/ErroresPY", ErroresPY)
		http.HandleFunc("/ArbolJS", ArbolJS)
		http.HandleFunc("/ArbolPY", ArbolPY)

		// Mensaje De Confirmación
		fmt.Println("Servidor Escuchando En Puerto " + PuertoDireccion)

		// Listening Server
		AvisoError = http.ListenAndServe(PuertoDireccion, nil)

		// Verificar Error En El Servidor
		if AvisoError != nil {

			log.Fatal("Error: ", AvisoError)

		}

	}