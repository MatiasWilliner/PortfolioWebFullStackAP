package com.Portfolio.Backend_Portfolio.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Persona {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    private String nombre;
    private String titulo;
    private String pais;
    private String imagen_portada;
    private String comentario_imagen_portada;
    private String imagen_perfil;
    private String comentario_imagen_perfil;
    private String info_extra;

    public Persona() {
    }

    public Persona(Long id, String nombre, String titulo, String pais, String imagen_portada, String comentario_imagen_portada, String imagen_perfil, String comentario_imagen_perfil, String info_extra) {
        this.id = id;
        this.nombre = nombre;
        this.titulo = titulo;
        this.pais = pais;
        this.imagen_portada = imagen_portada;
        this.comentario_imagen_portada = comentario_imagen_portada;
        this.imagen_perfil = imagen_perfil;
        this.comentario_imagen_perfil = comentario_imagen_perfil;
        this.info_extra = info_extra;
    }

    public String getInfo_extra() {
        return info_extra;
    }

    public void setInfo_extra(String info_extra) {
        this.info_extra = info_extra;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getImagen_portada() {
        return imagen_portada;
    }

    public void setImagen_portada(String imagen_portada) {
        this.imagen_portada = imagen_portada;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getComentario_imagen_portada() {
        return comentario_imagen_portada;
    }

    public void setComentario_imagen_portada(String comentario_imagen_portada) {
        this.comentario_imagen_portada = comentario_imagen_portada;
    }

    public String getImagen_perfil() {
        return imagen_perfil;
    }

    public void setImagen_perfil(String imagen_perfil) {
        this.imagen_perfil = imagen_perfil;
    }

    public String getComentario_imagen_perfil() {
        return comentario_imagen_perfil;
    }

    public void setComentario_imagen_perfil(String comentario_imagen_perfil) {
        this.comentario_imagen_perfil = comentario_imagen_perfil;
    }
    
    
}
