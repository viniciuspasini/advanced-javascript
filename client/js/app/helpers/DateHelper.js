class DateHelper {
    
    static textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - (item % 2)));
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
}