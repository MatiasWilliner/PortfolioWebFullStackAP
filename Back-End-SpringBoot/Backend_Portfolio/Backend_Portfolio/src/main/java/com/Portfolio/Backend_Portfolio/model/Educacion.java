package com.Portfolio.Backend_Portfolio.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Educacion {
    
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    private String institucion;
    private String titulo;
    private String imagen_institucion;
    private String comentario_imagen;
    private String fecha;

    public Educacion() {
    }

    public Educacion(Long id, String institucion, String titulo, String imagen_institucion, String comentario_imagen, String fecha) {
        this.id = id;
        this.institucion = institucion;
        this.titulo = titulo;
        this.imagen_institucion = imagen_institucion;
        this.comentario_imagen = comentario_imagen;
        this.fecha = fecha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInstitucion() {
        return institucion;
    }

    public void setInstitucion(String institucion) {
        this.institucion = institucion;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getImagen_institucion() {
        return imagen_institucion;
    }

    public void setImagen_institucion(String imagen_institucion) {
        this.imagen_institucion = imagen_institucion;
    }

    public String getComentario_imagen() {
        return comentario_imagen;
    }

    public void setComentario_imagen(String comentario_imagen) {
        this.comentario_imagen = comentario_imagen;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
    
    
}
