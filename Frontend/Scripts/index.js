// Boton Analizar 
function Analisis() {
	
	// Obtener Identificador Pestaña
	var Tabs = $("#Tabs").tabs(
			{
				show: { effect: 'slide', direction: 'left', duration: 400 },
				hide: { effect: 'fade', duration: 400 },
				event: 'click',
				collapsible: false
			});
			
	
	var PestañaActiva = Tabs.find(".ui-tabs-active").attr("aria-controls");

	var Identificador = PestañaActiva.split("-");
		
	// Obtener TextArea
	var TextArea = document.getElementById("textarea_" + Identificador[2]);
	
	// Obtener Texto
	var CadenaAnalizar = TextArea.value;
	
	// Configuracion Json
	var Configuracion = {
		
		Cadena: CadenaAnalizar		
		
	};
	
	// Peticion Analisis Servidor
	axios.post('http://192.168.1.4:8887/Analisis', Configuracion)
		
		.then((response) => {
			
			// Response
		
		})
		.catch((error) => {
			
			// Error Al Realizar La Solicitud
			alert("Error Al Solicitar El Analisis!");
			console.log(error);
		
		});
	
}

// Utilitarios
// Descargar Archivo
function DescargarArchivo(Contenido, NombreArchivo, Tipo) {
    
	// Varaibles
	var Archivo = new Blob([Contenido], {type: Tipo});
	
	// Verificar Si Ya Esiste 
    if(window.navigator.msSaveOrOpenBlob) {
		
		window.navigator.msSaveOrOpenBlob(Archivo, NombreArchivo);	
		
	}         
    else { 
        
		// Variables
		var A = document.createElement("a"); 
		var Url = URL.createObjectURL(Archivo);
		
		// Configuracion
        A.href = Url;
        A.download = NombreArchivo;
        
		// Agregar Elemento
		document.body.appendChild(A);
        
		// Clickear Botón
		A.click();
		
		// Timer
        setTimeout(
		
			function() {
				
				// Eliminar Elementos
				document.body.removeChild(A);
				window.URL.revokeObjectURL(Url);  
			},
		 0); 
    }
}

// Botón Abrir
// Cargar Contenido A Text Area
function CargarTextArea(Contenido) {
	

	// Obtener Identificador Pestaña
	var Tabs = $("#Tabs").tabs(
			{
				show: { effect: 'slide', direction: 'left', duration: 400 },
				hide: { effect: 'fade', duration: 400 },
				event: 'click',
				collapsible: false
			});
			
	
	var PestañaActiva = Tabs.find(".ui-tabs-active").attr("aria-controls");

	var Identificador = PestañaActiva.split("-");
		
	// Obtener TextArea
	var TextArea = document.getElementById("textarea_" + Identificador[2]);
	
	// Recorrer Archivo 
	var Lineas = Contenido.split(/\n/);
	
	// Vaciar Text Area
	TextArea.textContent = "";
	
	// Rellenar Text Area
	
	Lineas.forEach(

		Linea => TextArea.textContent += Linea + "\n"
		
	);		
	
}

// Leer Archivo
function LeerArchivo() {
	
	// Verificar Que Existan Pestañas
	var ContadorTabs = $("#Tabs >ul >li").length;
	
	if(ContadorTabs > 0) { 
	
		// Crear Input
		var Input = document.createElement('input');
		Input.type = 'file';
		Input.accept = ".java*";		

		// On Change
		Input.onchange = Ex => { 

			// Variables
			var Archivo = Ex.target.files[0];

		    var Lector = new FileReader();

            // Lectura De Archivo
		    Lector.onload = readerEvent => {
				
				// Variables
				var Contenido = Lector.result;
				
				// Cargar Archivo
				CargarTextArea(Contenido);
		    
			}
			Lector.readAsText(Archivo, "UTF-8");
		}

		Input.click();		
			
	} else {
		
		alert("No Existe Ninguna Pestaña Para Abrir Archivos!");
		
	} 	
	
}

// Abrir
function AbrirArchivo() {
	
	LeerArchivo();
	
}

// Botón Guardar
// Guardar Como
function GuardarComoArchivo() {
		
	// Verificar Que Existan Pestañas
	var ContadorTabs = $("#Tabs >ul >li").length;
	
	if(ContadorTabs > 0) {
		
		// Obtener Identificador Pestaña
		var Tabs = $("#Tabs").tabs(
				{
					show: { effect: 'slide', direction: 'left', duration: 400 },
					hide: { effect: 'fade', duration: 400 },
					event: 'click',
					collapsible: false
				});
				
		
		var PestañaActiva = Tabs.find(".ui-tabs-active").attr("aria-controls");

		var Identificador = PestañaActiva.split("-");
			
		// Obtener TextArea
		var TextArea = document.getElementById("textarea_" + Identificador[2]);	
		
		DescargarArchivo(TextArea.value, "CodigoFuente.java", "text/plain");
		
	} else {
		
		alert("No Existe Ninguna Pestaña Para Generar Un Archivo!");
		
	}
	
}

// Botón Acerca De
// Acerca De 
function AcercaDe() {

	// Obtener Objeto
	var Alerta = document.getElementById('Alerta');
	
	// Cambiar Display
	Alerta.style.display = "block";
	
	// Cambiar Opacidad
	Alerta.style.opacity = "1";
	
};

// Botón Cerrar
// Cerrar
function Cerrar() {
	
	// Obtener Objeto
	var Alerta = document.getElementById('Alerta');
	
	// Cambiar Opacidad
	Alerta.style.opacity = "0";
	
	// Realentizar Salida
	setTimeout( 
	
		function() {
			
			Alerta.style.display = "none";	
			
		}	
	
	, 600);
	
}

// Multipestañas
// Multipestañas JQuery UI
$(document).ready(
    function() {
		
			// Variables
			var ContadorPestañas = 1;
			var PestañaTemplate = "<li><a href='#{href}'><i class=\"fa fa-file-code-o tabs-icon\"></i>#{label}</a>" + 
								  "<span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";
		   
			// Configuracion Menu
			var $overlaymenu = $('#Menu-overlay');
			$overlaymenu.overlay({'hideTransition':true});
			$('.Menu').drilldownmenu({backText: 'Regresar'});
			$('#Menu').on('click', function(e)
			{
				$.overlay.show($overlaymenu);
				return false;
			});
		   
			// Configuracion Tabs
			var Tabs = $("#Tabs").tabs(
			{
				show: { effect: 'slide', direction: 'left', duration: 400 },
				hide: { effect: 'fade', duration: 400 },
				event: 'click',
				collapsible: false
			});
		   
			// Nueva Pestaña
			function AddTab() {
				

				// Titulo Tab
				var TituloTab = "Pestaña " + (ContadorPestañas + 1),
				
				// Identificador Tab
				Identificador = "tabs-page-" + ContadorPestañas,
				NewTab = $(PestañaTemplate.replace(/#\{href\}/g, "#" + Identificador).replace(/#\{label\}/g, TituloTab)),
				ContenidoTextArea = "Código Fuente Java";

				// Buscar Contenedor
				Tabs.find(".ui-tabs-nav").append(NewTab);
				
				// Estilo Text Area
				var TextAreaStyle = "border: 1px solid #CCCCCC;border-radius: 4px;background-color: #FA8072;background-image: none;" +
									"color :#000080;font-family: Verdana;font-weight: bold;font-style: italic;font-size: 16px;" +
									"padding: 4px 4px 4px 4px;margin: 0;text-align: left;overflow: auto;resize: none;" +
									"border-color: #66AFE9;outline: 0;" + 
									"box-shadow: inset 0px 1px 1px rgba(0,0,0,0.075), 0px 0px 8px rgba(102,175,233,0.60);";									
				
				// Text Area
				var TextArea = "<div style=\"height:392px;\" id=\"tabs-page-" + ContadorPestañas + "\">" +
							   "<textarea name=\"textarea_" + ContadorPestañas + "\" id=\"textarea_" + ContadorPestañas + "\"" +
							   "style=\"position:absolute;left:12px;top:13px;width:607px;height:337px;z-index:0;" + TextAreaStyle + "\"" +
							   "rows=\"13\" cols=\"45\" spellcheck=\"false\"> Código Fuente Java </textarea>" +	
				               "</div>";				
			
				// Agregar Text Area
				Tabs.append(TextArea);
				
				// Refrescar Pestañas
				Tabs.tabs( "refresh" );
				
				// Contador Pestañas
				ContadorPestañas++;
			}
			
			// Agregar Pestañas
			$("#Agregar_Tabs").click(

				function() {
					
					AddTab();
					
				}
			
			);
			
			// Eliminar Pestañas
			Tabs.on( "click", "span.ui-icon-close", 
			
				function() {
					
					var TextAreaActual = $(this).closest("li").remove().attr("aria-controls");
					$("#" + TextAreaActual).remove();
					Tabs.tabs( "refresh" );
			
				}
			);				   
		   
	});