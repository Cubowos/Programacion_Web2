var stampit = require('stampit');
var Autor = function () {
    var objetoAutor = stampit();
    var Clase = function () {
        var nombreCompleto = '';
        var fechaNacimiento = '';
        var nacionalidad = '';
        function devuelveVerdadero() {
            return true;
        }
        function comprobarFechaNacimiento() {
            var NPARTESCORRECTA = 3;
            var partesFecha = fechaNacimiento.split("/");
            var nPartes = partesFecha.length;
            if (nPartes !== NPARTESCORRECTA) {
                return false;
            }
            var i;
            var valido = true;
            for (i = 0; i < nPartes; i++) {
                var estaParte = partesFecha[i];
                if (!/^([0-9])*$/.test(estaParte)) {
                    valido = false;
                    break;

                }
            }
            if (!valido) {
                return false;

            }
            var dias = partesFecha[0];
            var meses = partesFecha[1];
            var anos = partesFecha[2];
            if ((dias.length === 2) && (meses.length === 2) && (anos.length === 4)) {
                return true;
            } else {
                return false;
            }
        }
        function checkCampo(nombreCampo) {
            if ((nombreCampo) && (nombreCampo !== '')) {
                if (nombreCampo === 'fechaNacimiento') {
                    return comprobarFechaNacimiento;
                }
                else {
                    return devuelveVerdadero;
                }
            } else {
                return devuelveVerdadero;
            };
        }
        this.getNombreCompleto = function () {
            return nombreCompleto;
        };
        this.setNombreCompleto = function (nombreCompletoAutor) {
            nombreCompleto = nombreCompletoAutor;
        };
        this.getFechaNacimiento = function () {
            return fechaNacimiento;
        };
        this.setFechaNacimiento = function (fechaNacimientoAutor) {
            fechaNacimiento = fechaNacimientoAutor;
        };
        this.getNacionalidad = function () {
            return nacionalidad;
        };
        this.setNacionalidad = function (nacionalidadAutor) {
            nacionalidad = nacionalidadAutor;
        };
        this.checkCampo = checkCampo;

    };
    objetoAutor.enclose(Clase);
    return objetoAutor.create();
};
module.exports = Autor;