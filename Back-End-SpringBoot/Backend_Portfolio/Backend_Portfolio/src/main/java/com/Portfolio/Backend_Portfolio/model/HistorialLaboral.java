
package com.Portfolio.Backend_Portfolio.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HistorialLaboral {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    private String organizacion;
    private String tarea;
    private String fecha;
    private String imagen_laboral;
    private String comentario_imagen;

    public HistorialLaboral() {
    }

    public HistorialLaboral(Long id, String organizacion, String tarea, String fecha, String imagen_laboral, String comentario_imagen) {
        this.id = id;
        this.organizacion = organizacion;
        this.tarea = tarea;
        this.fecha = fecha;
        this.imagen_laboral = imagen_laboral;
        this.comentario_imagen = comentario_imagen;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    

    public String getOrganizacion() {
        return organizacion;
    }

    public void setOrganizacion(String organizacion) {
        this.organizacion = organizacion;
    }

    public String getTarea() {
        return tarea;
    }

    public void setTarea(String tarea) {
        this.tarea = tarea;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getImagen_laboral() {
        return imagen_laboral;
    }

    public void setImagen_laboral(String imagen_laboral) {
        this.imagen_laboral = imagen_laboral;
    }

    public String getComentario_imagen() {
        return comentario_imagen;
    }

    public void setComentario_imagen(String comentario_imagen) {
        this.comentario_imagen = comentario_imagen;
    }
    
}
